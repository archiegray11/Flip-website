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
      <section className="system-intro-section" style={{ background: '#F5F0E8', padding: '120px 40px 80px' }}>
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

      {/* ─── THE FLIP BOOK SECTION ─── */}
      <section style={{ background: '#1A1A18', padding: '120px 40px' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '580px' }}>
            {/* Label */}
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#E8977A',
                marginBottom: '24px',
              }}
            >
              The Flip Book
            </div>

            {/* Headline */}
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
              One notebook.
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '64px',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
                fontStyle: 'italic',
                color: '#F5F0E8',
              }}
            >
              Many lives.
            </div>

            {/* Body */}
            <p
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '18px',
                color: 'rgba(245,240,232,0.65)',
                maxWidth: '580px',
                lineHeight: 1.9,
                marginTop: '32px',
              }}
            >
              Every Flip kit contains a notebook already written in by the person before you. They
              used their seven days, added their pages, and sent it back. It went into the next kit.
              To someone they will never meet.
              <br /><br />
              Over time the notebook becomes layered. Page 1 is one person&apos;s handwriting. Page
              20 is another&apos;s. Page 200 belongs to someone who hasn&apos;t done their Flip yet.
              <br /><br />
              You are not quitting your phone alone. You are joining a sequence.
            </p>

            {/* Three principles */}
            <div style={{ marginTop: '48px' }}>
              {[
                {
                  label: 'The rule',
                  text: 'Do not skip ahead.',
                },
                {
                  label: 'The instruction',
                  text: 'Leave something honest for the next person.',
                },
                {
                  label: 'The lifecycle',
                  text: 'Each notebook retires after fifteen people. Then it becomes part of the archive.',
                },
              ].map((principle) => (
                <div
                  key={principle.label}
                  style={{
                    borderTop: '1px solid rgba(245,240,232,0.08)',
                    padding: '24px 0',
                  }}
                >
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'rgba(245,240,232,0.3)',
                      marginBottom: '8px',
                    }}
                  >
                    {principle.label}
                  </div>
                  <div
                    style={{
                      fontFamily: serif,
                      fontWeight: 300,
                      fontStyle: 'italic',
                      fontSize: '24px',
                      color: '#F5F0E8',
                    }}
                  >
                    {principle.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Closing line */}
            <div
              style={{
                marginTop: '60px',
                textAlign: 'center',
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '28px',
                color: 'rgba(245,240,232,0.4)',
              }}
            >
              The notebook you receive has already begun.
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── THE FLIP ALBUM SECTION ─── */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '120px 40px',
          borderTop: '1px solid rgba(26,26,24,0.08)',
        }}
      >
        <ScrollReveal>
          {/* Label */}
          <div
            style={{
              fontFamily: mono,
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#C4572A',
              marginBottom: '24px',
            }}
          >
            The Flip Album
          </div>

          {/* Headline */}
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '64px',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              color: '#1A1A18',
            }}
          >
            Every photo.
          </div>
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '64px',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              color: '#1A1A18',
            }}
          >
            Every person.
          </div>
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '64px',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              color: '#1A1A18',
            }}
          >
            One album.
          </div>

          {/* Body */}
          <p
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '18px',
              color: '#4A4A44',
              maxWidth: '580px',
              lineHeight: 1.9,
              marginTop: '32px',
            }}
          >
            The Flip Album is a growing physical archive of real moments captured during Flip
            experiences. Across different people, different cities, different lives.
            <br /><br />
            It is not a highlight reel. It is not curated for aesthetics. It is raw, uneven, and
            real — because that is what life without a smartphone actually looks like.
            <br /><br />
            Every photo you take during your seven days becomes part of it.
          </p>

          {/* Three columns */}
          <div
            className="flip-album-cols"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
              marginTop: '48px',
            }}
          >
            {[
              {
                label: 'The camera',
                text: 'Film. 36 exposures. No preview screen. No delete button. You look properly before you shoot.',
              },
              {
                label: 'The development',
                text: 'When your kit comes back, the camera comes with it. We develop every roll. We include almost everything — only blank frames are removed.',
              },
              {
                label: 'The reveal',
                text: "Twice a year at Flip gatherings, the album comes out. Printed photos, physical pages. You find yours mixed in with everyone else's. Not on a screen. In a room.",
              },
            ].map((col) => (
              <div
                key={col.label}
                style={{
                  borderTop: '1px solid rgba(26,26,24,0.1)',
                  paddingTop: '32px',
                }}
              >
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: '9px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#9A9A90',
                    marginBottom: '12px',
                  }}
                >
                  {col.label}
                </div>
                <p
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#4A4A44',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {col.text}
                </p>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '60px',
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '28px',
              color: 'rgba(26,26,24,0.35)',
            }}
          >
            You compare less. You reflect more. Time has passed.
          </div>
        </ScrollReveal>
      </section>

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
