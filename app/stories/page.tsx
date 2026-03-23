import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import WaitlistForm from '@/components/WaitlistForm'

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
    name: 'Marcus',
    age: 34,
    role: 'product designer',
    pullQuote: "I thought I was using my phone. I didn't realise it was using me.",
    body: "I'm a designer. I spend my working days thinking about interfaces and attention. And I still couldn't see what my phone was doing to me until it wasn't there anymore. The first two days were genuinely difficult. By day four I was sleeping better than I had in years. I did the 30-day program. I still use the flip phone.",
  },
  {
    name: 'Sarah',
    age: 41,
    role: 'teacher',
    pullQuote:
      'My students noticed before I did. They said I seemed different. More present. I had to explain to a 15-year-old what a flip phone was.',
    body: "I did the 7-day trial during the school holidays. I'd been struggling with what I'd describe as background anxiety — nothing clinical, just a constant low hum of something. It went quiet on day three. I've since recommended Flip to four colleagues. One of them cried at the end of her week, which surprised her more than anyone.",
  },
  {
    name: 'James',
    age: 29,
    role: 'consultant',
    pullQuote: "Seven days felt like I'd been away for a month. In the best possible way.",
    body: "I travel constantly for work. The phone has always been justified — essential, even. I did the 7-day trial on a trip to Copenhagen. I used the concierge four times. They sorted everything in minutes. I read two books. I had a conversation with a stranger that lasted three hours. I've since started doing one Flip week every quarter.",
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

      {/* ─── STORY CARDS ─── */}
      <section style={{ background: '#F5F0E8', padding: '0 0 120px' }}>
        {stories.map((story, i) => (
          <ScrollReveal key={story.name} delay={i * 100}>
            <article
              style={{
                borderTop: '1px solid rgba(26,26,24,0.1)',
                padding: '80px 40px',
              }}
            >
              {/* Attribution */}
              <div
                style={{
                  fontFamily: mono,
                  fontSize: '10px',
                  color: '#9A9A90',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '40px',
                  maxWidth: '640px',
                  margin: '0 auto 40px',
                }}
              >
                {story.name}, {story.age} — {story.role}
              </div>

              {/* Image placeholder */}
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  background: 'rgba(26,26,24,0.06)',
                  border: '1px solid rgba(26,26,24,0.08)',
                  marginBottom: '48px',
                }}
              />

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
                  maxWidth: '640px',
                  margin: '0 auto 40px',
                }}
              >
                &ldquo;{story.pullQuote}&rdquo;
              </blockquote>

              {/* Body */}
              <p
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#4A4A44',
                  maxWidth: '640px',
                  margin: '0 auto',
                  lineHeight: 1.95,
                }}
              >
                {story.body}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </section>

      {/* ─── WAITLIST ─── */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '120px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderTop: '1px solid rgba(26,26,24,0.1)',
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
              Join the experiment
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '48px',
                color: '#1A1A18',
                lineHeight: 1.1,
              }}
            >
              Be among the first.
            </div>
            <p
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '18px',
                color: '#4A4A44',
                marginTop: '16px',
                lineHeight: 1.7,
              }}
            >
              Flip launches soon. Join the waitlist and we&apos;ll reach out when your kit is ready.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <WaitlistForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
