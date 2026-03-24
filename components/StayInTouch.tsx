'use client'

import { useState } from 'react'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

export default function StayInTouch() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    setSubmitted(true)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          fontFamily: mono,
          fontSize: '9px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#9A9A90',
          marginBottom: '12px',
        }}
      >
        Not quite yet
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          background: 'transparent',
          border: '1px solid rgba(26,26,24,0.2)',
          color: '#1A1A18',
          fontFamily: mono,
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          padding: '14px 28px',
          cursor: 'pointer',
        }}
      >
        Stay in touch
      </button>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '120px' : '0',
          transition: 'max-height 350ms ease',
          marginTop: open ? '16px' : '0',
        }}
      >
        {submitted ? (
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '18px',
              color: '#C4572A',
            }}
          >
            Noted.
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="waitlist-input"
                style={{
                  fontFamily: mono,
                  fontSize: '11px',
                  color: '#1A1A18',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(26,26,24,0.2)',
                  padding: '8px 0',
                  outline: 'none',
                  width: '200px',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontFamily: mono,
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#1A1A18',
                  cursor: 'pointer',
                  padding: '8px 0',
                }}
              >
                Send
              </button>
            </form>
            <div
              style={{
                fontFamily: mono,
                fontSize: '9px',
                color: '#9A9A90',
                marginTop: '8px',
              }}
            >
              One email when something worth knowing happens. Nothing else.
            </div>
          </>
        )}
      </div>
    </div>
  )
}
