'use client'

import { useState } from 'react'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

type State = 'idle' | 'loading' | 'success' | 'error'

export default function WaitlistForm() {
  const [state, setState] = useState<State>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch('/api/waitlist', { method: 'POST', body: formData })
      const json = await res.json()

      if (json.success) {
        setState('success')
      } else {
        setErrorMsg(json.error || 'Something went wrong. Please try again.')
        setState('error')
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div style={{ marginTop: '40px' }}>
        <div
          style={{
            fontFamily: serif,
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '28px',
            color: '#C4572A',
          }}
        >
          You&apos;re on the list.
        </div>
        <div
          style={{
            fontFamily: mono,
            fontSize: '10px',
            color: '#9A9A90',
            marginTop: '8px',
          }}
        >
          We&apos;ll be in touch when your kit is ready.
        </div>
      </div>
    )
  }

  return (
    <div style={{ marginTop: '40px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="waitlist-input"
          style={{
            width: '100%',
            border: '1px solid rgba(26,26,24,0.2)',
            padding: '14px 16px',
            background: 'transparent',
            fontFamily: serif,
            fontWeight: 300,
            fontSize: '16px',
            color: '#1A1A18',
            boxSizing: 'border-box',
            display: 'block',
          }}
        />
        {state === 'error' && errorMsg && (
          <div
            style={{
              fontFamily: mono,
              fontSize: '10px',
              color: '#C4572A',
              marginTop: '8px',
            }}
          >
            {errorMsg}
          </div>
        )}
        <button
          type="submit"
          disabled={state === 'loading'}
          className="waitlist-submit"
          style={{
            display: 'block',
            width: '100%',
            background: '#1A1A18',
            color: '#F5F0E8',
            fontFamily: mono,
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '16px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '12px',
          }}
        >
          {state === 'loading' ? 'Joining...' : 'Join the waitlist'}
        </button>
        <p
          style={{
            fontFamily: mono,
            fontSize: '9px',
            color: '#9A9A90',
            textAlign: 'center',
            marginTop: '16px',
          }}
        >
          No spam. No monthly emails. Just a single message when your kit is ready.
        </p>
      </form>
    </div>
  )
}
