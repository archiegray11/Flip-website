import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import ExperienceTimeline from '@/components/ExperienceTimeline'

export const metadata: Metadata = {
  title: 'What Seven Days Without Your Phone Feels Like',
  description: 'A day-by-day account of the Flip experience. What changes, and when.',
  openGraph: {
    type: 'website',
    siteName: 'Flip',
  },
}

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

export default function TheExperience() {
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
            The Experience
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
            Seven days.
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
            Here&apos;s what actually happens.
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
            This is not a detox. It&apos;s not a punishment. It&apos;s an experiment in living
            differently — and like all good experiments, it has a beginning, a middle, and a
            surprising end.
          </p>
        </ScrollReveal>
      </section>

      {/* ─── TIMELINE ─── */}
      <ExperienceTimeline />

      {/* ─── CTA ─── */}
      <section
        style={{
          background: '#1A1A18',
          padding: '80px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <ScrollReveal>
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '40px',
              color: '#E8977A',
              marginBottom: '32px',
            }}
          >
            Ready to find your day seven?
          </div>
          <a
            href="/#waitlist"
            className="exp-cta-btn"
            style={{
              display: 'inline-block',
              background: '#F5F0E8',
              color: '#1A1A18',
              fontFamily: mono,
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '16px 40px',
              textDecoration: 'none',
            }}
          >
            Join the waitlist
          </a>
        </ScrollReveal>
      </section>
    </main>
  )
}
