'use client'

import { useState } from 'react'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

interface Props {
  number: string
  label: string
  title: string
  location: string
  note: string
  year: string
}

export default function GatheringCard({ number, label, title, location, note, year }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      style={{ perspective: '1000px', cursor: 'pointer', height: '320px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Rotating inner */}
      <div
        style={{
          position: 'relative',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ── FRONT ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: '#1A1A18',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '36px',
          }}
        >
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '18px',
              color: '#C4572A',
              marginBottom: '8px',
            }}
          >
            Flip
          </div>

          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(245,240,232,0.15)',
            }}
          />

          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '36px',
              color: '#F5F0E8',
              marginTop: '24px',
              letterSpacing: '0.05em',
            }}
          >
            {number}
          </div>

          {/* Hint */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              fontFamily: mono,
              fontSize: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(245,240,232,0.2)',
            }}
          >
            hover
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
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={{
              fontFamily: mono,
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.4)',
              marginBottom: '16px',
            }}
          >
            {label}
          </div>

          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '24px',
              color: '#F5F0E8',
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '15px',
              color: 'rgba(245,240,232,0.5)',
              marginTop: '8px',
            }}
          >
            {location}
          </div>

          <div
            style={{
              height: '1px',
              background: 'rgba(245,240,232,0.1)',
              margin: '20px 0',
            }}
          />

          <p
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '14px',
              color: 'rgba(245,240,232,0.6)',
              lineHeight: 1.8,
              margin: 0,
              flex: 1,
            }}
          >
            {note}
          </p>

          <div
            style={{
              fontFamily: mono,
              fontSize: '9px',
              color: 'rgba(245,240,232,0.2)',
              marginTop: '20px',
              letterSpacing: '0.1em',
            }}
          >
            {year}
          </div>
        </div>
      </div>
    </div>
  )
}
