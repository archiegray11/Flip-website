'use client'

import { useState } from 'react'
import Link from 'next/link'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const navLinks = [
  { label: 'The System', href: '/the-system' },
  { label: 'The Experience', href: '/the-experience' },
  { label: 'Stories', href: '/stories' },
  { label: 'For Organisations', href: '/for-organisations' },
]

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          height: '60px',
          background: 'rgba(245,240,232,0.97)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(26,26,24,0.08)',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Flip logo */}
        <Link
          href="/"
          style={{
            fontFamily: serif,
            fontWeight: 300,
            fontSize: '20px',
            color: '#1A1A18',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          Flip
        </Link>

        {/* Right: Desktop nav links */}
        <div
          className="nav-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: mono,
                fontSize: '10px',
                textTransform: 'uppercase',
                color: '#1A1A18',
                textDecoration: 'none',
                letterSpacing: '0.1em',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/begin"
            style={{
              fontFamily: mono,
              fontSize: '10px',
              textTransform: 'uppercase',
              color: '#C4572A',
              textDecoration: 'none',
              letterSpacing: '0.1em',
            }}
          >
            Begin
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '6px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
          aria-label="Open menu"
        >
          <span style={{ display: 'block', width: '24px', height: '1px', background: '#1A1A18' }} />
          <span style={{ display: 'block', width: '24px', height: '1px', background: '#1A1A18' }} />
          <span style={{ display: 'block', width: '24px', height: '1px', background: '#1A1A18' }} />
        </button>
      </nav>

      {/* Full-screen mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#F5F0E8',
            zIndex: 100,
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              alignSelf: 'flex-end',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: mono,
              fontSize: '10px',
              textTransform: 'uppercase',
              color: '#9A9A90',
              letterSpacing: '0.1em',
            }}
            aria-label="Close menu"
          >
            Close
          </button>

          {/* Mobile nav links */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '48px',
                  color: '#1A1A18',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/begin"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '48px',
                color: '#C4572A',
                textDecoration: 'none',
              }}
            >
              Begin
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
