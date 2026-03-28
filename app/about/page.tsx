import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'About — Flip',
  description: 'Why Flip exists. The founder\'s story.',
  openGraph: {
    type: 'website',
    siteName: 'Flip',
  },
}

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

export default function About() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section
        style={{
          background: '#1A1A18',
          padding: '120px 40px',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <ScrollReveal>
          <div>
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#E8977A',
                marginBottom: '24px',
              }}
            >
              The founder
            </div>

            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '80px',
                color: '#F5F0E8',
                letterSpacing: '-0.03em',
                lineHeight: 1.0,
              }}
            >
              Why Flip exists.
            </div>

            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '24px',
                color: '#E8977A',
                marginTop: '16px',
              }}
            >
              A broken phone. A month abroad. A feeling worth chasing.
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── THE STORY ─── */}
      <section className="about-story-section" style={{ background: '#F5F0E8', padding: '120px 40px' }}>
        <ScrollReveal>
          <div
            className="about-story-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            {/* Left: photo */}
            <div className="about-photo-col">
              <div
                className="about-photo-img"
                style={{
                  width: '100%',
                  aspectRatio: '2 / 3',
                  background: 'rgba(26,26,24,0.06)',
                  border: '1px solid rgba(26,26,24,0.08)',
                }}
              />
              <div
                className="about-photo-caption"
                style={{
                  fontFamily: mono,
                  fontSize: '9px',
                  color: '#9A9A90',
                  marginTop: '10px',
                }}
              >
                Archie, founder of Flip
              </div>
            </div>

            {/* Right: text */}
            <div className="about-text-col" style={{ maxWidth: '380px' }}>
              {[
                'It started in 2021. I was abroad at 19 and my phone smashed. Absolutely finished. I rang my mum to try and fix the problem but being away it wasn\'t possible. I went without for a month.\n\nI felt the best I had in a long time. It was truly an eye opening experience.',
                'When I got back to the UK I tried living without a phone entirely but it just wasn\'t possible. Before university I got a phone back because I didn\'t want to be left out socially. I found myself slipping back into those same bad habits.\n\nOn and off again. Different flip phones, no phone, greyscaling, deleting apps and redownloading them. Nothing worked.',
                'Until 2025, when I decided to sit down and plan it all out. It worked. Since then I have been on exactly what is in this kit and maintained a functional life, although different.\n\nFlip started as an attempt to give other people that same feeling I first had. I believe it truly changes how you look at the world, especially in today\'s age.',
              ].map((para, i) => (
                <div key={i}>
                  {para.split('\n\n').map((chunk, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: serif,
                        fontWeight: 300,
                        fontSize: '15px',
                        color: '#4A4A44',
                        lineHeight: 1.85,
                        margin: '0 0 24px',
                      }}
                    >
                      {chunk}
                    </p>
                  ))}
                </div>
              ))}

              {/* Stand-out paragraph */}
              <p
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '20px',
                  color: '#1A1A18',
                  lineHeight: 1.8,
                  margin: '8px 0 0',
                }}
              >
                I don&apos;t know where this company will go. All I want to do is meet interesting
                people and help people take a comfortable step into living without a smartphone, even
                if it&apos;s just for seven days.
              </p>

              {/* Signature */}
              <div
                style={{
                  height: '1px',
                  background: 'rgba(26,26,24,0.1)',
                  margin: '32px 0 0',
                }}
              />
              <div
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '32px',
                  color: '#1A1A18',
                  marginTop: '24px',
                }}
              >
                Archie
              </div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: '9px',
                  color: '#9A9A90',
                  marginTop: '8px',
                }}
              >
                Founder, Flip
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{
          background: 'rgba(26,26,24,0.02)',
          padding: '80px 40px',
          textAlign: 'center',
          borderTop: '1px solid rgba(26,26,24,0.08)',
        }}
      >
        <ScrollReveal>
          <p
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '32px',
              color: '#1A1A18',
              marginBottom: '32px',
            }}
          >
            This is the kit I use every day.
          </p>
          <div className="teaser-pulse-wrapper" style={{ display: 'inline-block' }}>
            <Link href="/#waitlist" className="teaser-pulse-btn">
              Join the waitlist
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
