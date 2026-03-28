import { NextRequest, NextResponse } from 'next/server'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const KLAVIYO_PUBLIC_KEY = 'T5HNxc'
const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID ?? ''

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const email = (formData.get('email') as string)?.trim()

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: 'Please enter a valid email' },
      { status: 400 }
    )
  }

  if (!KLAVIYO_LIST_ID) {
    console.error('KLAVIYO_LIST_ID env var not set')
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    )
  }

  try {
    const res = await fetch(
      `https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_PUBLIC_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          revision: '2023-12-15',
        },
        body: JSON.stringify({
          data: {
            type: 'subscription',
            attributes: {
              profile: {
                data: {
                  type: 'profile',
                  attributes: { email },
                },
              },
            },
            relationships: {
              list: {
                data: {
                  type: 'list',
                  id: KLAVIYO_LIST_ID,
                },
              },
            },
          },
        }),
      }
    )

    if (res.ok || res.status === 202) {
      return NextResponse.json({ success: true })
    }

    const errorText = await res.text()
    console.error('Klaviyo error:', res.status, errorText)
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    )
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
