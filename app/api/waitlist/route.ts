import { NextRequest, NextResponse } from 'next/server'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const KLAVIYO_PRIVATE_KEY = process.env.KLAVIYO_API_KEY ?? ''
const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID ?? ''

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const email = (formData.get('email') as string)?.trim()

  console.log('[Waitlist] Submission received:', email)

  if (!email || !isValidEmail(email)) {
    console.log('[Waitlist] Invalid email rejected:', email)
    return NextResponse.json(
      { success: false, error: 'Please enter a valid email' },
      { status: 400 }
    )
  }

  // Always log the email as a fallback — never lose a submission
  console.log('[Waitlist] Email to capture:', email)

  if (!KLAVIYO_PRIVATE_KEY) {
    console.error('[Waitlist] KLAVIYO_API_KEY env var not set — email logged above as fallback')
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    )
  }

  if (!KLAVIYO_LIST_ID) {
    console.error('[Waitlist] KLAVIYO_LIST_ID env var not set — email logged above as fallback')
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    )
  }

  const payload = {
    data: {
      type: 'profile-subscription-bulk-create-job',
      attributes: {
        profiles: {
          data: [
            {
              type: 'profile',
              attributes: {
                email,
                subscriptions: {
                  email: {
                    marketing: {
                      consent: 'SUBSCRIBED',
                    },
                  },
                },
              },
            },
          ],
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
  }

  console.log('[Waitlist] Sending to Klaviyo:', JSON.stringify(payload))

  try {
    const res = await fetch(
      'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Klaviyo-API-Key ${KLAVIYO_PRIVATE_KEY}`,
          revision: '2023-12-15',
        },
        body: JSON.stringify(payload),
      }
    )

    const responseText = await res.text()
    console.log('[Waitlist] Klaviyo response status:', res.status)
    console.log('[Waitlist] Klaviyo response body:', responseText)

    // 202 Accepted is the success response for bulk create jobs
    if (res.status === 202) {
      console.log('[Waitlist] Success — email accepted by Klaviyo:', email)
      return NextResponse.json({ success: true })
    }

    console.error('[Waitlist] Klaviyo returned non-202 status:', res.status, responseText)
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    )
  } catch (error) {
    console.error('[Waitlist] Fetch error — email logged above as fallback:', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
