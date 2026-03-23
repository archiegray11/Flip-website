import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const name = (formData.get('name') as string)?.trim()
  const organisation = (formData.get('organisation') as string)?.trim()
  const role = (formData.get('role') as string)?.trim()
  const sector = (formData.get('sector') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !organisation || !sector || !message) {
    return NextResponse.json(
      { success: false, error: 'Please fill in all required fields' },
      { status: 400 }
    )
  }

  console.log(`[Enquiry ${new Date().toISOString()}]`, { name, organisation, role, sector, message })
  return NextResponse.json({ success: true })
}
