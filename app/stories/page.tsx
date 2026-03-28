import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Flip Stories — Real Experiences',
  description: 'Real accounts from people who\'ve done the Flip experiment.',
  openGraph: {
    type: 'website',
    siteName: 'Flip',
  },
}

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const stories = [
  {
    name: 'Tess',
    role: 'Performance Artist',
    year: '2025',
    pullQuote: 'My world feels smaller, but in a good way. The connections I already have are enough.',
    body: [
      'It has massively reduced my anxiety and given me space to notice when I would turn to my phone to regulate stress. It has exponentially improved my focus on my creative practice by minimising the hundreds of things my phone can distract me with, feeling like I have to share something on Instagram, or thinking let me just send this to a friend and then getting pulled into a whole conversation. It has given me dedicated, focused time with my work.',
      'It has also been a huge talking point. So many people say I would love to do that, but I could never. My world feels smaller, but in a good way. The connections I already have are enough, and tending to them feels far more meaningful.',
    ],
  },
  {
    name: 'Vic',
    role: 'London',
    year: '2025',
    pullQuote: 'Not having a smart phone is a lot easier to cope with than having one in your hands and trying to use willpower.',
    body: [
      'Not having a smart phone though very inconvenient at some times is a lot easier to cope with than having a smart phone in your hands and trying to use willpower to stay disciplined and distraction free.',
      'The mere fact you are carrying a flip phone often allows random people to strike up conversations with you due to being intrigued. Use that opportunity to connect and form relationships.',
      'Reading over my notes feels like I am closer to that day than looking through photos funnily enough.',
    ],
  },
  {
    name: 'Stan',
    role: 'Software Engineer',
    year: '2025',
    pullQuote: 'I feel like I have been more productive at work and less anxious.',
    body: [
      'It has been great so far. The sheets give you daily excitement, they are really fun. I feel like I have been more productive at work and less anxious. I have started calling my friends more which makes you feel closer to people.',
    ],
  },
]

export default function Stories() {
  return (
    <main>
      {/* ─── INTRO ─── */}
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
            Stories
          </div>

          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '52px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1A1A18',
            }}
          >
            What actually happened.
          </div>
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '52px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              fontStyle: 'italic',
              color: '#C4572A',
            }}
          >
            In their own words.
          </div>
        </ScrollReveal>
      </section>

      {/* ─── STORIES ─── */}
      <section className="stories-section" style={{ background: '#F5F0E8', padding: '0 0 80px' }}>
        {stories.map((story, i) => (
          <ScrollReveal key={story.name} delay={i * 80}>
            <article
              className="story-article"
              style={{
                borderTop: '1px solid rgba(26,26,24,0.1)',
                padding: '80px 40px',
                display: 'flex',
                gap: '0',
              }}
            >
              {/* Left: person details */}
              <div className="story-meta" style={{ width: '200px', flexShrink: 0 }}>
                <div
                  className="story-name"
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontSize: '18px',
                    color: '#1A1A18',
                  }}
                >
                  {story.name}
                </div>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: '9px',
                    textTransform: 'uppercase',
                    color: '#9A9A90',
                    letterSpacing: '0.1em',
                    marginTop: '6px',
                  }}
                >
                  {story.role}
                </div>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: '9px',
                    color: '#9A9A90',
                    marginTop: '4px',
                  }}
                >
                  {story.year}
                </div>
              </div>

              {/* Right: content */}
              <div className="story-content" style={{ flex: 1, paddingLeft: '60px' }}>
                {/* Pull quote */}
                <blockquote
                  style={{
                    borderLeft: '3px solid #C4572A',
                    paddingLeft: '32px',
                    fontFamily: serif,
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: '28px',
                    color: '#1A1A18',
                    lineHeight: 1.4,
                    margin: '0 0 32px',
                  }}
                >
                  &ldquo;{story.pullQuote}&rdquo;
                </blockquote>

                {/* Body paragraphs */}
                <div style={{ maxWidth: '600px' }}>
                  {story.body.map((para, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: serif,
                        fontWeight: 300,
                        fontSize: '16px',
                        color: '#4A4A44',
                        lineHeight: 1.95,
                        margin: j > 0 ? '20px 0 0' : '0',
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </section>

      {/* ─── CLOSING ─── */}
      <section
        className="stories-closing"
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
              fontSize: '28px',
              color: 'rgba(26,26,24,0.45)',
              maxWidth: '500px',
              margin: '0 auto 32px',
              lineHeight: 1.5,
            }}
          >
            Three people. Three different lives. One week without a phone.
          </p>
          <div className="teaser-pulse-wrapper" style={{ display: 'inline-block' }}>
            <Link href="/#waitlist" className="teaser-pulse-btn">
              Join the waitlist for batch two
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
