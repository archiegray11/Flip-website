import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import HonestBit from '@/components/HonestBit'

export const metadata: Metadata = {
  title: 'Begin — Flip',
  description: 'The complete Flip experience. Seven days, everything you need, nothing superfluous.',
  openGraph: {
    type: 'website',
    siteName: 'Flip',
  },
}

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const includes: { text: string; sub?: string }[] = [
  { text: 'Nokia 2720 flip phone' },
  {
    text: 'The Flip Book',
    sub: 'A notebook already written in. You add your pages. You pass it on. Over time it becomes something extraordinary.',
  },
  { text: 'Pen' },
  {
    text: 'Film camera',
    sub: 'Developed after your seven days. Your photos join the Flip Album — revealed twice a year, in person, with everyone else.',
  },
  { text: 'Map book' },
  { text: 'Alarm clock' },
  { text: 'Pen pal letter + stamp' },
  { text: 'The Flip Browser — blocks time-wasting sites on your laptop while you\'re off your phone' },
  { text: 'The Flip Papers — seven surprises, one each day.' },
]

export default function Begin() {
  return (
    <main>
      {/* ─── INTRO ─── */}
      <section style={{ background: '#1A1A18', padding: '100px 40px 80px' }}>
        <ScrollReveal>
          <div
            style={{
              fontFamily: mono,
              fontSize: '10px',
              textTransform: 'uppercase',
              color: '#E8977A',
              letterSpacing: '0.15em',
              marginBottom: '20px',
            }}
          >
            Begin
          </div>

          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '64px',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              color: '#F5F0E8',
            }}
          >
            One kit.
          </div>

          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '64px',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              color: '#C4572A',
            }}
          >
            Seven days.
          </div>

          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '24px',
              color: 'rgba(245,240,232,0.6)',
              marginTop: '16px',
            }}
          >
            Everything you need. Nothing you don&apos;t.
          </div>
        </ScrollReveal>
      </section>

      {/* ─── PRODUCT ─── */}
      <section style={{ background: '#F5F0E8', padding: '100px 40px' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            {/* Label */}
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#C4572A',
                marginBottom: '16px',
              }}
            >
              The Kit
            </div>

            {/* Title */}
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '52px',
                color: '#1A1A18',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}
            >
              Seven Days
            </div>

            {/* Price */}
            <div style={{ marginTop: '16px' }}>
              <span
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '36px',
                  color: '#1A1A18',
                }}
              >
                £99
              </span>
            </div>
            <div
              style={{
                fontFamily: mono,
                fontSize: '9px',
                color: '#9A9A90',
                marginTop: '4px',
              }}
            >
              free returns within 48 hours if anything isn&apos;t right
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '18px',
                color: '#4A4A44',
                lineHeight: 1.8,
                marginTop: '24px',
              }}
            >
              The complete Flip experience. Everything you need to live your normal life without your
              smartphone for seven days. Nothing superfluous. Nothing missing.
            </p>

            {/* Includes list */}
            <div style={{ marginTop: '32px' }}>
              {includes.map((item) => (
                <div key={item.text}>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: '10px',
                      color: '#9A9A90',
                      lineHeight: 2.4,
                    }}
                  >
                    — {item.text}
                  </div>
                  {item.sub && (
                    <div
                      style={{
                        fontFamily: serif,
                        fontWeight: 300,
                        fontStyle: 'italic',
                        fontSize: '15px',
                        color: 'rgba(26,26,24,0.4)',
                        lineHeight: 1.7,
                        marginTop: '4px',
                        marginLeft: '16px',
                        marginBottom: '4px',
                      }}
                    >
                      {item.sub}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA button */}
            <button
              className="begin-btn"
              style={{
                display: 'block',
                width: '100%',
                background: '#1A1A18',
                color: '#F5F0E8',
                fontFamily: mono,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                padding: '18px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '48px',
              }}
            >
              Begin the experiment
            </button>

            {/* Reassurance */}
            <div
              style={{
                fontFamily: mono,
                fontSize: '9px',
                color: '#9A9A90',
                textAlign: 'center',
                marginTop: '16px',
                lineHeight: 2,
              }}
            >
              Ships within 2 working days. The phone comes back after your 7 days — a prepaid return
              envelope is in every kit.
            </div>
          </div>
        </ScrollReveal>
      </section>

      <HonestBit />
    </main>
  )
}
