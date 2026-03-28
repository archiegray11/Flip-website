import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CostBreakdown from '@/components/CostBreakdown'
import HeroScrollIndicator from '@/components/HeroScrollIndicator'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata: Metadata = {
  title: 'Flip — Live Without Your Phone',
  description:
    'A complete analog system for modern life. Calls, notes, navigation, music — all replaced. Seven days. Everything you need.',
  openGraph: {
    type: 'website',
    siteName: 'Flip',
  },
}

const problemPanels = [
  {
    line1: "You've tried screen time limits.",
    line2: "They didn't work.",
    counter: '01 / 03',
  },
  {
    line1: 'Not because you lack willpower.',
    line2: 'The phone is still there.',
    counter: '02 / 03',
  },
  {
    line1: 'Flip removes the phone.',
    line2: 'And replaces everything.',
    counter: '03 / 03',
  },
]

const kitItems: { name: string; desc: string; subDesc?: string }[] = [
  {
    name: 'The Nokia 2720',
    desc: 'Calls, texts, and maps if you need them.',
    subDesc: 'The iconic flip phone. Sleek, all black, and built for exactly this.',
  },
  {
    name: 'Notebook and Pen',
    desc: 'Leather cover. Ages with you.',
    subDesc: 'The Flip Book — already written in by the person before you. Add your pages. Pass it on.',
  },
  {
    name: 'Film Camera',
    desc: 'Shot on film. Developed by us.',
    subDesc: 'The roll of film comes in the kit. Your photos are developed after your seven days and added to the Flip Album.',
  },
  {
    name: 'The Flip Papers',
    desc: 'Seven daily surprises. One opened each day.',
    subDesc: 'Mini challenges, community submissions, random prompts. Do them all. Do none. Do the ones that catch you.',
  },
  {
    name: 'The Flip Browser',
    desc: 'Blocks the noise on your laptop too.',
    subDesc: 'Connects to your browser and blocks the sites you choose for seven days. When you try to visit one, it closes like a flip phone.',
  },
  {
    name: 'Alarm Clock',
    desc: 'The phone stays out of the bedroom.',
    subDesc: 'The single most reported change from every Flip experience. Sleep improves within two nights. Every time.',
  },
]

const stats = [
  { number: '7 days', label: 'The standard experiment' },
  { number: '6 replacements', label: 'One for every smartphone function' },
  { number: '0 apps', label: 'This is not software' },
]

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

export default function Home() {
  return (
    <main>
      {/* ─── SECTION 1: HERO ─── */}
      <section
        style={{
          height: 'calc(100vh - 60px)',
          maxHeight: 'calc(100vh - 60px)',
          background: '#1A1A18',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Eyebrow — top left */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            fontFamily: mono,
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#E8977A',
          }}
        >
          The Flip System
        </div>

        {/* Center content */}
        <ScrollReveal>
          <div className="hero-center-content" style={{ textAlign: 'center' }}>
            {/* Headline */}
            <div
              className="hero-headline"
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '88px',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
              }}
            >
              <div style={{ color: '#F5F0E8' }}>Your life.</div>
              <div style={{ color: '#C4572A', fontStyle: 'italic' }}>Without</div>
              <div style={{ color: '#F5F0E8' }}>the phone.</div>
            </div>

            {/* Subheadline */}
            <p
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '20px',
                color: 'rgba(245,240,232,0.6)',
                maxWidth: '480px',
                margin: '32px auto 0',
                lineHeight: 1.5,
              }}
            >
              A complete analog system for modern life. Seven days. Everything you need. Nothing you
              don&apos;t.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                marginTop: '40px',
              }}
            >
              <Link
                href="/#waitlist"
                className="hero-btn-primary"
                style={{
                  display: 'inline-block',
                  background: '#F5F0E8',
                  color: '#1A1A18',
                  fontFamily: mono,
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '16px 32px',
                  textDecoration: 'none',
                }}
              >
                Join the waitlist
              </Link>
              <Link
                href="/the-system"
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: 'rgba(245,240,232,0.6)',
                  fontFamily: mono,
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '16px 32px',
                  border: '1px solid rgba(245,240,232,0.25)',
                  textDecoration: 'none',
                }}
              >
                See what&apos;s in the kit
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <HeroScrollIndicator />
      </section>

      {/* ─── SECTION 2: THE PROBLEM (3 panels) ─── */}
      {problemPanels.map((panel, i) => (
        <section
          key={i}
          style={{
            minHeight: '100vh',
            background: '#F5F0E8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '600px', padding: '0 40px' }}>
              <div
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '40px',
                  color: '#4A4A44',
                  lineHeight: 1.3,
                }}
              >
                {panel.line1}
              </div>
              <div
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '40px',
                  fontStyle: 'italic',
                  color: '#C4572A',
                  lineHeight: 1.3,
                }}
              >
                {panel.line2}
              </div>
            </div>
          </ScrollReveal>

          {/* Counter */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: mono,
              fontSize: '9px',
              color: '#9A9A90',
              letterSpacing: '0.1em',
            }}
          >
            {panel.counter}
          </div>
        </section>
      ))}

      {/* ─── TESS QUOTE ─── */}
      <section style={{ background: '#F5F0E8', padding: '60px 40px', textAlign: 'center', borderTop: '1px solid rgba(26,26,24,0.08)' }}>
        <ScrollReveal>
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '36px',
              color: '#1A1A18',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.4,
            }}
          >
            &ldquo;My world feels smaller, but in a good way.&rdquo;
          </div>
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '15px',
              color: '#9A9A90',
              marginTop: '16px',
            }}
          >
            <span style={{ color: '#C4572A' }}>Tess</span>, Performance Artist — 2025
          </div>
        </ScrollReveal>
      </section>

      {/* ─── SECTION 3: KIT PREVIEW ─── */}
      <section style={{ background: '#F5F0E8', padding: '120px 40px', borderTop: '1px solid rgba(26,26,24,0.08)' }}>
        <ScrollReveal>
          <div style={{ marginBottom: '64px' }}>
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                textTransform: 'uppercase',
                color: '#C4572A',
                letterSpacing: '0.15em',
                marginBottom: '16px',
              }}
            >
              The Kit
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '52px',
                color: '#1A1A18',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Everything you need.
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '52px',
                fontStyle: 'italic',
                color: '#C4572A',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Nothing you don&apos;t.
            </div>
          </div>
        </ScrollReveal>

        {/* Kit grid */}
        <div
          className="grid-3col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {kitItems.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 100} style={{ height: '100%' }}>
              <div
                className="kit-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: '1px solid rgba(26,26,24,0.1)',
                }}
              >
                {/* Content */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    padding: '24px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: serif,
                      fontWeight: 300,
                      fontSize: '20px',
                      color: '#1A1A18',
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: '10px',
                      color: '#9A9A90',
                      marginTop: '8px',
                    }}
                  >
                    {item.desc}
                  </div>
                  {item.subDesc && (
                    <div
                      style={{
                        fontFamily: serif,
                        fontWeight: 300,
                        fontStyle: 'italic',
                        fontSize: '14px',
                        color: '#9A9A90',
                        marginTop: '8px',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.subDesc}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── TRANSPARENCY SECTION ─── */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '120px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <ScrollReveal>
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#C4572A',
                marginBottom: '16px',
              }}
            >
              What goes into every kit
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '52px',
                color: '#1A1A18',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '64px',
              }}
            >
              £99. Here&apos;s exactly where it goes.
            </div>
          </ScrollReveal>
          <CostBreakdown />
        </div>
      </section>

      {/* ─── FOUNDER MOMENT ─── */}
      <section style={{ background: '#F5F0E8', padding: '80px 40px', borderTop: '1px solid rgba(26,26,24,0.08)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
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
              Why Flip exists
            </div>
            <blockquote
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '28px',
                color: '#1A1A18',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              &ldquo;In 2021 my phone smashed abroad. I went without for a month. I felt the best I
              had in a long time. Flip is my attempt to give other people that same feeling.&rdquo;
            </blockquote>
            <div
              style={{
                fontFamily: mono,
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#9A9A90',
                marginTop: '16px',
              }}
            >
              Archie, founder
            </div>
            <Link
              href="/about"
              className="founder-story-link"
              style={{
                display: 'block',
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '17px',
                color: '#C4572A',
                textDecoration: 'none',
                marginTop: '16px',
              }}
            >
              Read the full story →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── COMMUNITY TEASER ─── */}
      <section style={{ background: '#F5F0E8', padding: '80px 40px', borderTop: '1px solid rgba(26,26,24,0.1)' }}>
        <ScrollReveal>
          <div
            className="community-teaser-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            {/* Left */}
            <div>
              <div
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '40px',
                  color: '#C4572A',
                  lineHeight: 1.1,
                }}
              >
                The community.
              </div>
              <div
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '36px',
                  color: '#1A1A18',
                  lineHeight: 1.1,
                  marginTop: '8px',
                }}
              >
                For people who&apos;ve done it.
              </div>
            </div>

            {/* Right */}
            <div>
              <p
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '17px',
                  color: '#4A4A44',
                  lineHeight: 1.8,
                  margin: '0 0 32px',
                }}
              >
                Twice a year, alumni gather in person. You&apos;ll find out about it by post.
              </p>

              {/* Pulse button */}
              <div className="teaser-pulse-wrapper">
                <Link href="/community" className="teaser-pulse-btn">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── SECTION 4: SOCIAL PROOF STRIP ─── */}
      <section style={{ background: '#1A1A18', padding: '60px 40px' }}>
        <ScrollReveal>
          <div
            className="stats-row"
            style={{
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'center',
            }}
          >
            {stats.map((stat, i) => (
              <div key={stat.number} style={{ display: 'flex', alignItems: 'stretch' }}>
                {i > 0 && (
                  <div
                    className="stats-divider"
                    style={{
                      width: '1px',
                      background: 'rgba(255,255,255,0.1)',
                      margin: '0 60px',
                      alignSelf: 'stretch',
                    }}
                  />
                )}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: serif,
                      fontWeight: 300,
                      fontStyle: 'italic',
                      fontSize: '48px',
                      color: '#E8977A',
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: mono,
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      color: 'rgba(245,240,232,0.4)',
                      marginTop: '8px',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── SECTION 5: WAITLIST ─── */}
      <section
        id="waitlist"
        style={{
          background: '#F5F0E8',
          padding: '100px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderTop: '1px solid rgba(26,26,24,0.08)',
        }}
      >
        <div style={{ maxWidth: '560px', width: '100%' }}>
          <ScrollReveal>
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                textTransform: 'uppercase',
                color: '#C4572A',
                letterSpacing: '0.15em',
                marginBottom: '16px',
              }}
            >
              Batch one
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '48px',
                color: '#1A1A18',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
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
                color: '#C4572A',
                marginTop: '8px',
              }}
            >
              Faster than we expected.
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
              The first ten kits are gone. We&apos;re preparing batch two now. Join the waitlist and
              you&apos;ll be first to know when they&apos;re ready — and first to get one.
            </p>
            <WaitlistForm
              buttonText="Reserve my place"
              note="No payment now. Just your place in the queue."
            />
          </ScrollReveal>
        </div>
      </section>
      {/* ─── REINVESTMENT STATEMENT ─── */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '40px 40px',
          display: 'flex',
          justifyContent: 'center',
          borderTop: '1px solid rgba(26,26,24,0.1)',
        }}
      >
        <div style={{ maxWidth: '640px', width: '100%', textAlign: 'center' }}>
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
            About the margins
          </div>
          <p
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '16px',
              color: '#4A4A44',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            The £16 profit per kit goes right back into Flip: better sheets,
            better sourcing, building the community meetups. A business built to last, not to extract.
          </p>
        </div>
      </section>
    </main>
  )
}
