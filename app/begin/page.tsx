import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import HonestBit from '@/components/HonestBit'
import WaitlistForm from '@/components/WaitlistForm'

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

const includes: { text: string }[] = [
  { text: 'The Nokia 2720 — calls, texts, and maps' },
  { text: 'Notebook and pen — leather cover, yours to write in' },
  { text: 'Film camera and film roll — developed by us, added to the Flip Album' },
  { text: 'The Flip Papers — seven daily surprises, one per day' },
  { text: 'The Flip Browser Chrome extension — blocks your chosen sites for 7 days' },
  { text: 'Alarm clock — keeps the phone out of the bedroom' },
]

export default function Begin() {
  return (
    <main>
      {/* ─── INTRO ─── */}
      <section style={{ background: '#1A1A18', padding: '100px 40px 80px' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '560px' }}>
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
              Availability
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
              Sold out.
            </div>

            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '24px',
                color: '#E8977A',
                marginTop: '8px',
              }}
            >
              Batch one is gone.
            </div>

            <p
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '18px',
                color: 'rgba(245,240,232,0.6)',
                maxWidth: '480px',
                lineHeight: 1.8,
                marginTop: '24px',
              }}
            >
              Ten kits. Ten people. All gone. We&apos;re building batch two now — a refined version
              based on everything we learned from batch one. Join the waitlist below.
            </p>

            <WaitlistForm
              dark
              buttonText="Reserve my place in batch two"
              note="No payment now. Pricing confirmed when batch two is ready."
            />
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

            {/* Pricing note */}
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                color: '#9A9A90',
                marginTop: '16px',
                letterSpacing: '0.05em',
              }}
            >
              Pricing revealed to waitlist members first.
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
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </section>

      <HonestBit />
    </main>
  )
}
