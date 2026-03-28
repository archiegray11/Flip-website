'use client'

import { useState } from 'react'
import Link from 'next/link'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const menuLinks = [
  { label: 'The Kit', href: '/the-system' },
  { label: 'The Experience', href: '/the-experience' },
  { label: 'Stories', href: '/stories' },
  { label: 'Community', href: '/community' },
  { label: 'For Organisations', href: '/for-organisations' },
  { label: 'About', href: '/about' },
]

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [animKey, setAnimKey] = useState(0)

  function openMenu() {
    setMenuOpen(true)
    setAnimKey((k) => k + 1)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      {/* ── Main bar ── */}
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
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: serif,
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '22px',
            color: '#C4572A',
            textDecoration: 'none',
          }}
        >
          Flip
        </Link>

        {/* Right cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Desktop-only links */}
          <Link
            href="/the-system"
            className="nav-desktop nav-subtle-link"
            style={{
              fontFamily: mono,
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#9A9A90',
              textDecoration: 'none',
            }}
          >
            The Kit
          </Link>
          <Link
            href="/stories"
            className="nav-desktop nav-subtle-link"
            style={{
              fontFamily: mono,
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#9A9A90',
              textDecoration: 'none',
            }}
          >
            Stories
          </Link>
          <div
            className="nav-desktop"
            style={{
              width: '1px',
              height: '14px',
              background: 'rgba(26,26,24,0.15)',
              flexShrink: 0,
            }}
          />

          {/* Begin CTA — always visible */}
          <Link
            href="/begin"
            className="nav-begin-cta"
            style={{
              fontFamily: mono,
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#C4572A',
              textDecoration: 'none',
            }}
          >
            Begin
          </Link>

          {/* Menu trigger */}
          <button
            onClick={openMenu}
            className="nav-menu-btn"
            aria-label="Open menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontFamily: mono,
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#9A9A90',
            }}
          >
            Menu
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                width: '14px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: '14px',
                  height: '1px',
                  background: '#1A1A18',
                  transition: 'transform 200ms ease',
                  transform: menuOpen ? 'translateY(2.5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '14px',
                  height: '1px',
                  background: '#1A1A18',
                  transition: 'transform 200ms ease',
                  transform: menuOpen ? 'translateY(-2.5px) rotate(-45deg)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ── Full-screen overlay ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#1A1A18',
          zIndex: 100,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 300ms ease',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Close */}
        <div
          className="menu-close-row"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '20px 40px',
            height: '60px',
            alignItems: 'center',
          }}
        >
          <button
            onClick={closeMenu}
            className="nav-close-btn"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: mono,
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.4)',
              padding: 0,
            }}
          >
            Close
          </button>
        </div>

        {/* Links */}
        <div
          key={animKey}
          className="menu-links-container"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            animation: menuOpen ? 'menuContentIn 300ms ease forwards' : 'none',
          }}
        >
          {menuLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="menu-overlay-link"
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '52px',
                color: '#F5F0E8',
                textDecoration: 'none',
                opacity: 0,
                animation: menuOpen
                  ? `menuLinkIn 400ms ease forwards ${i * 60}ms`
                  : 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            padding: '32px 40px',
          }}
        >
          <a
            href="#"
            className="nav-social-link"
            style={{
              fontFamily: mono,
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.3)',
              textDecoration: 'none',
            }}
          >
            Instagram
          </a>
          <a
            href="#"
            className="nav-social-link"
            style={{
              fontFamily: mono,
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.3)',
              textDecoration: 'none',
            }}
          >
            TikTok
          </a>
          <div style={{ width: '1px', height: '12px', background: 'rgba(245,240,232,0.1)' }} />
          <Link
            href="/begin#honest-bit"
            onClick={closeMenu}
            className="nav-social-link"
            style={{
              fontFamily: mono,
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.3)',
              textDecoration: 'none',
            }}
          >
            FAQ
          </Link>
        </div>
      </div>
    </>
  )
}
