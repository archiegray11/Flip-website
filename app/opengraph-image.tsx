import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Flip — Live Without Your Phone'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#1A1A18',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 96, fontWeight: 300, color: '#F5F0E8', lineHeight: 1.05 }}>
            Your life.
          </div>
          <div style={{ fontSize: 96, fontWeight: 300, color: '#C4572A', lineHeight: 1.05, fontStyle: 'italic' }}>
            Without
          </div>
          <div style={{ fontSize: 96, fontWeight: 300, color: '#F5F0E8', lineHeight: 1.05 }}>
            the phone.
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            right: 60,
            fontSize: 16,
            color: '#E8977A',
            fontFamily: 'monospace',
            letterSpacing: '0.1em',
          }}
        >
          flip
        </div>
      </div>
    ),
    { ...size }
  )
}
