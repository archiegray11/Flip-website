'use client'

import { useState } from 'react'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

export default function InvitationCard() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div>
      {/* Perspective wrapper */}
      <div
        style={{ perspective: '1000px', cursor: 'pointer' }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        {/* Rotating inner card */}
        <div
          style={{
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* ── FRONT ── */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              background: '#1A1A18',
              padding: '48px',
              border: '1px solid rgba(245,240,232,0.1)',
              boxShadow:
                '2px 2px 0 rgba(0,0,0,0.35), 5px 5px 0 rgba(0,0,0,0.18), 9px 9px 0 rgba(0,0,0,0.08), 0 24px 64px rgba(0,0,0,0.35)',
            }}
          >
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '20px',
                color: '#C4572A',
              }}
            >
              Flip
            </div>
            <div
              style={{
                height: '1px',
                background: 'rgba(245,240,232,0.15)',
                margin: '20px 0',
              }}
            />
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '28px',
                color: '#F5F0E8',
                lineHeight: 1.4,
                marginTop: '32px',
              }}
            >
              You are warmly invited
              <br />
              to the next Flip gathering.
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '18px',
                color: 'rgba(245,240,232,0.5)',
                marginTop: '24px',
              }}
            >
              Details to follow by post.
            </div>
            <div
              style={{
                height: '1px',
                background: 'rgba(245,240,232,0.1)',
                margin: '32px 0 24px',
              }}
            />
            <div
              style={{
                fontFamily: mono,
                fontSize: '9px',
                color: 'rgba(245,240,232,0.25)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              }}
            >
              RSVP by letter only.
            </div>
          </div>

          {/* ── BACK ── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: '#1A1A18',
              border: '1px solid rgba(245,240,232,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                '2px 2px 0 rgba(0,0,0,0.35), 5px 5px 0 rgba(0,0,0,0.18), 9px 9px 0 rgba(0,0,0,0.08), 0 24px 64px rgba(0,0,0,0.35)',
            }}
          >
            <span
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '64px',
                color: '#C4572A',
                letterSpacing: '-0.02em',
              }}
            >
              flip
            </span>
          </div>
        </div>
      </div>

      {/* Hover hint */}
      <div
        style={{
          fontFamily: mono,
          fontSize: '9px',
          color: '#9A9A90',
          textAlign: 'center',
          marginTop: '16px',
          letterSpacing: '0.1em',
        }}
      >
        ↑ hover
      </div>
    </div>
  )
}
