import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, address1, address2, city, postcode, country } = body

    if (!firstName || !lastName || !address1 || !city || !postcode) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 })
    }

    console.log('[community address]', new Date().toISOString(), {
      firstName,
      lastName,
      address1,
      address2: address2 || '',
      city,
      postcode,
      country: country || 'United Kingdom',
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
