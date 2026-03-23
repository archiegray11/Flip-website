import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import KitScroller from '@/components/KitScroller'

export const metadata: Metadata = {
  title: 'The Flip Kit — What\'s in the Box',
  description: 'Every item in the Flip kit, and why it exists. Analog replacements for every smartphone function.',
  openGraph: {
    type: 'website',
    siteName: 'Flip',
  },
}

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

export default function TheSystem() {
  return (
    <main>
      {/* ─── SECTION 1: PAGE INTRO ─── */}
      <section style={{ background: '#F5F0E8', padding: '120px 40px 80px' }}>
        <ScrollReveal>
          <div
            style={{
              fontFamily: mono,
              fontSize: '10px',
              textTransform: 'uppercase',
              color: '#C4572A',
              letterSpacing: '0.15em',
              marginBottom: '20px',
            }}
          >
            The System
          </div>

          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '64px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1A1A18',
            }}
          >
            Analog replacements
          </div>
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '64px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              fontStyle: 'italic',
              color: '#C4572A',
            }}
          >
            for a digital life.
          </div>

          <p
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '18px',
              color: '#4A4A44',
              maxWidth: '560px',
              lineHeight: 1.8,
              marginTop: '24px',
            }}
          >
            Every function your smartphone performs, the Flip kit replaces. Not with a worse
            version. With a slower, more intentional one. Here&apos;s what&apos;s in the box — and
            why each item exists.
          </p>

          <p
            style={{
              fontFamily: mono,
              fontSize: '10px',
              color: '#9A9A90',
              marginTop: '40px',
            }}
          >
            Scroll sideways to explore each item →
          </p>
        </ScrollReveal>
      </section>

      {/* ─── SECTION 2: HORIZONTAL KIT SCROLLER ─── */}
      <KitScroller />

      {/* ─── SECTION 3: PHILOSOPHY STATEMENT ─── */}
      <section
        style={{
          background: '#1A1A18',
          padding: '120px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ScrollReveal>
          <div style={{ maxWidth: '640px', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '36px',
                color: '#F5F0E8',
                lineHeight: 1.4,
              }}
            >
              &ldquo;We didn&apos;t set out to build a product. We set out to build a system that
              makes it genuinely possible to live without a smartphone — and still function in the
              world.&rdquo;
            </p>
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                color: 'rgba(245,240,232,0.4)',
                marginTop: '24px',
                letterSpacing: '0.1em',
              }}
            >
              — Flip
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── SECTION 4: CTA ─── */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '80px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '40px',
                color: '#C4572A',
                marginBottom: '32px',
              }}
            >
              Ready to begin?
            </div>
            <a
              href="/begin"
              className="cta-btn"
              style={{
                display: 'inline-block',
                background: '#1A1A18',
                color: '#F5F0E8',
                fontFamily: mono,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '16px 40px',
                textDecoration: 'none',
              }}
            >
              Choose your kit
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
