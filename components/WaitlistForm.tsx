'use client'

import { useState } from 'react'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

type State = 'idle' | 'loading' | 'success' | 'error'

export default function WaitlistForm({
  buttonText = 'Join the waitlist',
  note = 'No spam. No monthly emails. Just a single message when your kit is ready.',
  dark = false,
}: {
  buttonText?: string
  note?: string
  dark?: boolean
}) {
  const [state, setState] = useState<State>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [btnHovered, setBtnHovered] = useState(false)

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

  const inputStyle = dark
    ? {
        border: '1px solid rgba(245,240,232,0.2)',
        color: '#F5F0E8',
        fontFamily: serif,
        fontWeight: 300,
        fontSize: '16px',
      }
    : {
        border: '1px solid rgba(26,26,24,0.2)',
        color: '#1A1A18',
        fontFamily: serif,
        fontWeight: 300,
        fontSize: '16px',
      }

  const btnBg = dark
    ? btnHovered ? '#E8977A' : '#F5F0E8'
    : btnHovered ? '#C4572A' : '#1A1A18'

  const btnColor = dark ? '#1A1A18' : '#F5F0E8'
  const noteColor = dark ? 'rgba(245,240,232,0.4)' : '#9A9A90'
  const errorColor = dark ? '#E8977A' : '#C4572A'

  if (state === 'success') {
    return (
      <div style={{ marginTop: '40px' }}>
        <div
          style={{
            fontFamily: serif,
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '28px',
            color: dark ? '#E8977A' : '#C4572A',
          }}
        >
          You&apos;re on the list.
        </div>
        <div
          style={{
            fontFamily: mono,
            fontSize: '10px',
            color: noteColor,
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
            padding: '14px 16px',
            background: 'transparent',
            boxSizing: 'border-box',
            display: 'block',
            outline: 'none',
            ...inputStyle,
          }}
        />
        {state === 'error' && errorMsg && (
          <div style={{ fontFamily: mono, fontSize: '10px', color: errorColor, marginTop: '8px' }}>
            {errorMsg}
          </div>
        )}
        <button
          type="submit"
          disabled={state === 'loading'}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            display: 'block',
            width: '100%',
            background: btnBg,
            color: btnColor,
            fontFamily: mono,
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '16px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '12px',
            transition: 'background 200ms ease',
          }}
        >
          {state === 'loading' ? 'Joining...' : buttonText}
        </button>
        <p
          style={{
            fontFamily: mono,
            fontSize: '9px',
            color: noteColor,
            textAlign: 'center',
            marginTop: '16px',
          }}
        >
          {note}
        </p>
      </form>
    </div>
  )
}
