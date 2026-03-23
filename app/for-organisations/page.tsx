import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import OrgEnquiryForm from '@/components/OrgEnquiryForm'

export const metadata: Metadata = {
  title: 'Flip for Hotels, Schools & Corporates',
  description: 'Wellness programmes and workshops for organisations. Phone-free experiences at scale.',
  openGraph: {
    type: 'website',
    siteName: 'Flip',
  },
}

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const orgSections = [
  {
    id: 'hotels',
    headline: "The most memorable guest experience you've never offered.",
    body: "Flip partners with hotels to offer a genuinely phone-free stay. Guests check in, hand over their smartphones to a secure concierge storage, and check out with the Flip kit. It's positioned as a premium wellness option — and it's one guests talk about for months.",
    pricing: 'From £89 per room per stay',
  },
  {
    id: 'schools',
    headline: 'The conversation every parent is already having.',
    body: 'Flip runs workshops, talks, and structured phone-free programmes for secondary schools and sixth forms. We work with pupils, parents, and staff — because the problem requires all three.',
    pricing: 'Half-day workshop from £600',
  },
  {
    id: 'corporate',
    headline: "The reset your team didn't know they needed.",
    body: 'Leadership retreats. Burnout reset programmes. Off-site days with intention. Flip provides the full kit and facilitation for corporate groups of any size.',
    pricing: 'From £149 per participant',
  },
]

export default function ForOrganisations() {
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
            For Organisations
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
            Flip at scale.
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
            For hotels, schools, and teams.
          </div>
        </ScrollReveal>
      </section>

      {/* ─── ORG SECTIONS ─── */}
      {orgSections.map((section) => (
        <section
          key={section.id}
          style={{
            borderTop: '1px solid rgba(26,26,24,0.1)',
            padding: '80px 40px',
            background: '#F5F0E8',
          }}
        >
          <ScrollReveal>
            <div
              className="grid-2col"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'start',
              }}
            >
              {/* Left — headline + body */}
              <div>
                <div
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontSize: '36px',
                    color: '#1A1A18',
                    lineHeight: 1.2,
                    maxWidth: '480px',
                  }}
                >
                  {section.headline}
                </div>
                <p
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#4A4A44',
                    lineHeight: 1.9,
                    marginTop: '20px',
                    maxWidth: '480px',
                  }}
                >
                  {section.body}
                </p>
              </div>

              {/* Right — pricing + link */}
              <div style={{ paddingTop: '8px' }}>
                <div
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: '24px',
                    color: '#C4572A',
                    lineHeight: 1.3,
                  }}
                >
                  {section.pricing}
                </div>
                <a
                  href="#contact"
                  className="org-link"
                  style={{
                    display: 'inline-block',
                    fontFamily: mono,
                    fontSize: '10px',
                    color: '#1A1A18',
                    textDecoration: 'none',
                    letterSpacing: '0.1em',
                    marginTop: '20px',
                  }}
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
      ))}

      {/* ─── CONTACT FORM ─── */}
      <section
        id="contact"
        style={{
          background: 'rgba(26,26,24,0.02)',
          padding: '80px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '640px', width: '100%' }}>
          <ScrollReveal>
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                textTransform: 'uppercase',
                color: '#C4572A',
                letterSpacing: '0.15em',
                marginBottom: '24px',
              }}
            >
              Get in touch
            </div>

            <OrgEnquiryForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
