'use client'

import { useState } from 'react'
import Link from 'next/link'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

export default function CommunityLogin() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Placeholder — wire up to real auth later
    await new Promise((r) => setTimeout(r, 600))
    setStatus('done')
  }

  return (
    <div
      style={{
        margin: '56px auto 0',
        maxWidth: '360px',
        width: '100%',
      }}
    >
      {/* Divider */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        <div style={{ flex: 1, height: '1px', background: 'rgba(245,240,232,0.1)' }} />
        <span
          style={{
            fontFamily: mono,
            fontSize: '8px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.25)',
          }}
        >
          Alumni access
        </span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(245,240,232,0.1)' }} />
      </div>

      {status === 'done' ? (
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '28px',
              color: '#C4572A',
            }}
          >
            Welcome back.
          </div>
          <div
            style={{
              fontFamily: mono,
              fontSize: '9px',
              color: 'rgba(245,240,232,0.35)',
              marginTop: '10px',
              letterSpacing: '0.08em',
            }}
          >
            Check your inbox for a sign-in link.
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: 'flex',
                border: '1px solid rgba(245,240,232,0.12)',
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="community-login-input"
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  padding: '14px 16px',
                  fontFamily: mono,
                  fontSize: '10px',
                  color: '#F5F0E8',
                  outline: 'none',
                  letterSpacing: '0.05em',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="community-login-btn"
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderLeft: '1px solid rgba(245,240,232,0.12)',
                  padding: '14px 20px',
                  fontFamily: mono,
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'rgba(245,240,232,0.5)',
                  cursor: 'pointer',
                  transition: 'color 200ms ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {status === 'loading' ? '…' : 'Enter →'}
              </button>
            </div>
          </form>

          {status === 'error' && (
            <div
              style={{
                fontFamily: mono,
                fontSize: '9px',
                color: '#C4572A',
                textAlign: 'center',
                marginTop: '10px',
              }}
            >
              Something went wrong. Try again.
            </div>
          )}

          <div
            style={{
              fontFamily: mono,
              fontSize: '9px',
              color: 'rgba(245,240,232,0.2)',
              textAlign: 'center',
              marginTop: '16px',
              letterSpacing: '0.06em',
            }}
          >
            Not a member yet?{' '}
            <Link
              href="/begin"
              className="community-login-join"
              style={{
                color: 'rgba(245,240,232,0.35)',
                textDecoration: 'none',
              }}
            >
              Begin your Flip →
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
