import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Begin — Choose Your Flip Kit',
  description: 'Three-day trial, seven-day experiment, or thirty-day transformation. Choose your Flip experience.',
  openGraph: {
    type: 'website',
    siteName: 'Flip',
  },
}

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const tiers = [
  {
    label: 'Trial',
    title: 'Three Days',
    price: '£49',
    priceSub: 'or £19/day',
    description:
      "For the curious. A three-day taste of analog life. Core kit only — phone, notebook, pen. Ideal if you've never done anything like this before.",
    includes: [
      'Flip phone + SIM',
      'Pocket notebook + pen',
      'Welcome guide',
      'Concierge access',
    ],
    featured: false,
  },
  {
    label: 'Full Kit',
    title: 'Seven Days',
    price: '£99',
    priceSub: 'the full experiment',
    description:
      'The complete Flip experience. Full kit, seven days of daily guidance, and everything you need to genuinely live without your smartphone.',
    includes: [
      'Flip phone + SIM',
      'Pocket notebook + pen',
      'Welcome guide',
      'Concierge access',
      'Film camera',
      'Map book',
      'Alarm clock',
      'Pen pal letter + stamp',
      'Daily reflection prompts',
    ],
    featured: true,
  },
  {
    label: 'Program',
    title: 'Thirty Days',
    price: '£249',
    priceSub: 'the full transformation',
    description:
      'For those who want lasting change, not just a taste. Thirty days of structured experience, weekly physical content drops, and ongoing concierge support.',
    includes: [
      'Flip phone + SIM',
      'Pocket notebook + pen',
      'Welcome guide',
      'Concierge access',
      'Film camera',
      'Map book',
      'Alarm clock',
      'Pen pal letter + stamp',
      'Daily reflection prompts',
      'Weekly gazette delivery',
      'Structured daily program',
      'Extended concierge hours',
      'End-of-program reflection session',
    ],
    featured: false,
  },
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
              lineHeight: 1.1,
              color: '#F5F0E8',
            }}
          >
            Choose your experiment.
          </div>

          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '24px',
              fontStyle: 'italic',
              color: '#E8977A',
              marginTop: '8px',
            }}
          >
            Start with a trial. Go deeper when you&apos;re ready.
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
            Every Flip experience includes the core kit, daily guidance, and full concierge support.
            The only difference is time.
          </p>
        </ScrollReveal>
      </section>

      {/* ─── TIER CARDS ─── */}
      <section style={{ background: '#F5F0E8', padding: '80px 40px' }}>
        <div
          className="grid-3col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.title} delay={i * 80}>
              <div
                style={{
                  position: 'relative',
                  border: tier.featured ? '2px solid #1A1A18' : '1px solid rgba(26,26,24,0.12)',
                  padding: '40px',
                }}
              >
                {/* Most popular badge */}
                {tier.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '24px',
                      fontFamily: mono,
                      fontSize: '8px',
                      color: '#9A9A90',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Most popular
                  </div>
                )}

                {/* Label */}
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: '9px',
                    textTransform: 'uppercase',
                    color: '#C4572A',
                    letterSpacing: '0.15em',
                    marginBottom: '16px',
                  }}
                >
                  {tier.label}
                </div>

                {/* Title */}
                <div
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontSize: '36px',
                    color: '#1A1A18',
                    lineHeight: 1.1,
                  }}
                >
                  {tier.title}
                </div>

                {/* Price */}
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span
                    style={{
                      fontFamily: serif,
                      fontWeight: 300,
                      fontSize: '28px',
                      color: '#1A1A18',
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: '10px',
                      color: '#9A9A90',
                    }}
                  >
                    {tier.priceSub}
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#4A4A44',
                    lineHeight: 1.7,
                    marginTop: '20px',
                  }}
                >
                  {tier.description}
                </p>

                {/* Includes */}
                <div style={{ marginTop: '24px' }}>
                  {tier.includes.map((item) => (
                    <div
                      key={item}
                      style={{
                        fontFamily: mono,
                        fontSize: '10px',
                        color: '#9A9A90',
                        lineHeight: 2,
                      }}
                    >
                      — {item}
                    </div>
                  ))}
                </div>

                {/* Button */}
                {tier.featured ? (
                  <button
                    className="featured-btn"
                    style={{
                      display: 'block',
                      width: '100%',
                      background: '#1A1A18',
                      color: '#F5F0E8',
                      fontFamily: mono,
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '14px 28px',
                      border: 'none',
                      cursor: 'pointer',
                      marginTop: '32px',
                    }}
                  >
                    Begin seven days
                  </button>
                ) : (
                  <button
                    className="ghost-btn"
                    style={{
                      display: 'block',
                      width: '100%',
                      background: 'transparent',
                      color: '#1A1A18',
                      fontFamily: mono,
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '14px 28px',
                      border: '1px solid rgba(26,26,24,0.2)',
                      cursor: 'pointer',
                      marginTop: '32px',
                    }}
                  >
                    {i === 0 ? 'Begin three days' : 'Begin thirty days'}
                  </button>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Reassurance copy */}
        <div
          style={{
            fontFamily: mono,
            fontSize: '10px',
            color: '#9A9A90',
            textAlign: 'center',
            marginTop: '40px',
            lineHeight: 2,
          }}
        >
          Free returns within 48 hours if the kit doesn&apos;t arrive in perfect condition.
          <br />
          All kits ship within 2 working days. Concierge available 8am–10pm daily.
        </div>
      </section>
    </main>
  )
}
