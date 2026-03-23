import { NextRequest, NextResponse } from 'next/server'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const email = (formData.get('email') as string)?.trim()

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: 'Please enter a valid email' },
      { status: 400 }
    )
  }

  console.log(`[Waitlist ${new Date().toISOString()}]`, email)
  return NextResponse.json({ success: true })
}
