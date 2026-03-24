'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroScrollIndicator() {
  const [progress, setProgress] = useState(0)
  const [snapped, setSnapped] = useState(false)
  const [glowing, setGlowing] = useState(false)
  const [labelPopped, setLabelPopped] = useState(false)
  const snapFired = useRef(false)

  useEffect(() => {
    function triggerSnapSequence() {
      setSnapped(true)
      setTimeout(() => setSnapped(false), 150)

      setGlowing(true)

      setTimeout(() => setLabelPopped(true), 100)
    }

    function onScroll() {
      const p = Math.min(window.scrollY / 300, 1)
      setProgress(p)

      if (p >= 1 && !snapFired.current) {
        snapFired.current = true
        triggerSnapSequence()
      }

      if (p < 0.9) {
        snapFired.current = false
        setGlowing(false)
        setLabelPopped(false)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const rotation = progress * 68
  const strokeColor = glowing ? '#C4572A' : 'rgba(245,240,232,0.5)'

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        textAlign: 'center',
      }}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <svg
          width="40"
          height="28"
          viewBox="0 0 40 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: 'block',
            transform: snapped ? 'scale(1.15)' : 'scale(1)',
            transition: 'transform 150ms ease-out',
          }}
        >
          <line
            x1="20" y1="28" x2="38" y2="4"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{ transition: 'stroke 400ms ease' }}
          />
          <line
            x1="20" y1="28" x2="2" y2="4"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{
              transformOrigin: '20px 28px',
              transform: `rotate(${rotation}deg)`,
              transition: 'stroke 400ms ease',
            }}
          />
        </svg>

        {/* Snap label — top right, pops in */}
        <div
          style={{
            position: 'absolute',
            top: '-24px',
            right: '-36px',
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '13px',
            color: '#C4572A',
            letterSpacing: '0.1em',
            opacity: labelPopped ? undefined : 0,
            transform: labelPopped ? undefined : 'rotate(28deg)',
            animation: labelPopped
              ? 'snapPop 250ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
              : 'none',
          }}
        >
          snap!
        </div>
      </div>
    </div>
  )
}
