'use client'

import { useState } from 'react'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(26,26,24,0.2)',
  padding: '10px 0',
  fontFamily: serif,
  fontWeight: 300,
  fontSize: '17px',
  color: '#1A1A18',
  outline: 'none',
  boxSizing: 'border-box' as const,
  transition: 'border-color 200ms ease',
}

const labelStyle = {
  fontFamily: mono,
  fontSize: '8px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.15em',
  color: '#9A9A90',
  marginBottom: '4px',
  display: 'block',
}

export default function CommunityForm() {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <div
          style={{
            fontFamily: serif,
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '48px',
            color: '#C4572A',
          }}
        >
          Noted.
        </div>
        <div
          style={{
            fontFamily: mono,
            fontSize: '10px',
            color: '#9A9A90',
            letterSpacing: '0.08em',
            marginTop: '12px',
          }}
        >
          We&apos;ll be in touch when the next gathering is announced.
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Postcard-style wrapper */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid rgba(26,26,24,0.12)',
          padding: '48px',
          maxWidth: '560px',
          margin: '48px auto 0',
        }}
      >
        <div
          style={{
            fontFamily: mono,
            fontSize: '9px',
            color: '#9A9A90',
            letterSpacing: '0.1em',
            marginBottom: '32px',
          }}
        >
          To be completed after your Flip experience.
        </div>

        {/* Name row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '24px' }}>
          <div>
            <label style={labelStyle}>First name</label>
            <input
              style={inputStyle}
              className="community-form-input"
              value={fields.firstName}
              onChange={set('firstName')}
              required
              autoComplete="given-name"
            />
          </div>
          <div>
            <label style={labelStyle}>Last name</label>
            <input
              style={inputStyle}
              className="community-form-input"
              value={fields.lastName}
              onChange={set('lastName')}
              required
              autoComplete="family-name"
            />
          </div>
        </div>

        {/* Address lines */}
        {[
          { key: 'address1' as const, label: 'Address line 1', required: true, auto: 'address-line1' },
          { key: 'address2' as const, label: 'Address line 2', required: false, auto: 'address-line2' },
        ].map(({ key, label, required, auto }) => (
          <div key={key} style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>{label}</label>
            <input
              style={inputStyle}
              className="community-form-input"
              value={fields[key]}
              onChange={set(key)}
              required={required}
              autoComplete={auto}
            />
          </div>
        ))}

        {/* City + Postcode row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '24px' }}>
          <div>
            <label style={labelStyle}>City</label>
            <input
              style={inputStyle}
              className="community-form-input"
              value={fields.city}
              onChange={set('city')}
              required
              autoComplete="address-level2"
            />
          </div>
          <div>
            <label style={labelStyle}>Postcode</label>
            <input
              style={inputStyle}
              className="community-form-input"
              value={fields.postcode}
              onChange={set('postcode')}
              required
              autoComplete="postal-code"
            />
          </div>
        </div>

        {/* Country */}
        <div style={{ marginBottom: '40px' }}>
          <label style={labelStyle}>Country</label>
          <input
            style={inputStyle}
            className="community-form-input"
            value={fields.country}
            onChange={set('country')}
            autoComplete="country-name"
          />
        </div>

        {/* Privacy note */}
        <div
          style={{
            fontFamily: mono,
            fontSize: '9px',
            color: '#9A9A90',
            lineHeight: 1.9,
            letterSpacing: '0.04em',
            marginBottom: '32px',
            borderTop: '1px solid rgba(26,26,24,0.08)',
            paddingTop: '24px',
          }}
        >
          We will only ever write to you about Flip gatherings.
          <br />
          We will never share your address with anyone.
          <br />
          Ever.
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="community-submit-btn"
          style={{
            width: '100%',
            background: '#1A1A18',
            color: '#F5F0E8',
            fontFamily: mono,
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            padding: '16px',
            border: 'none',
            cursor: status === 'loading' ? 'default' : 'pointer',
            opacity: status === 'loading' ? 0.6 : 1,
            transition: 'background 200ms ease',
          }}
        >
          {status === 'loading' ? 'Sending…' : 'Send us your address'}
        </button>

        {status === 'error' && (
          <p
            style={{
              fontFamily: mono,
              fontSize: '9px',
              color: '#C4572A',
              marginTop: '12px',
              textAlign: 'center',
            }}
          >
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  )
}
