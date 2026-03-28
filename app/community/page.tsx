import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CommunityForm from '@/components/CommunityForm'
import InvitationCard from '@/components/InvitationCard'
import CommunityLogin from '@/components/CommunityLogin'
import GatheringCard from '@/components/GatheringCard'

export const metadata: Metadata = {
  title: 'Community — Flip',
  description:
    "The Flip alumni community. Twice a year, in person. You'll hear about it by post.",
}

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const steps = [
  {
    title: 'Complete your Flip',
    body: "Finish your 7 days and you're in. No application. No approval. Everyone who completes a Flip becomes part of the community automatically.",
    icon: (
      <svg width="72" height="52" viewBox="0 0 72 52" fill="none" aria-hidden="true">
        <rect x="1.5" y="1.5" width="69" height="49" stroke="#1A1A18" strokeWidth="1" />
        <polyline points="1.5,1.5 36,30 70.5,1.5" stroke="#1A1A18" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: 'A letter arrives',
    body: 'Before each gathering, a handwritten-style letter arrives at your address. Date, location, a line or two about what to expect. Nothing more. No reminders. No follow ups.',
    icon: (
      <svg width="52" height="68" viewBox="0 0 52 68" fill="none" aria-hidden="true">
        <path d="M1.5 13 L13 1.5 H50.5 V66.5 H1.5 Z" stroke="#1A1A18" strokeWidth="1" />
        <polyline points="1.5,13 13,13 13,1.5" stroke="#1A1A18" strokeWidth="1" />
        <line x1="14" y1="26" x2="42" y2="26" stroke="#1A1A18" strokeWidth="0.75" />
        <line x1="14" y1="36" x2="42" y2="36" stroke="#1A1A18" strokeWidth="0.75" />
        <line x1="14" y1="46" x2="34" y2="46" stroke="#1A1A18" strokeWidth="0.75" />
      </svg>
    ),
  },
  {
    title: 'You write back',
    body: "To RSVP you send a letter back. Your name, whether you're coming, anything you want to say. Some people write a paragraph. Some people write three pages. Both are welcome.",
    icon: (
      <svg width="40" height="72" viewBox="0 0 40 72" fill="none" aria-hidden="true">
        <path d="M14 3 H26 L33 54 L20 68 L7 54 Z" stroke="#1A1A18" strokeWidth="1" />
        <line x1="14" y1="3" x2="7" y2="54" stroke="#1A1A18" strokeWidth="0.75" />
        <line x1="26" y1="3" x2="33" y2="54" stroke="#1A1A18" strokeWidth="0.75" />
        <line x1="11" y1="17" x2="29" y2="17" stroke="#1A1A18" strokeWidth="0.75" />
      </svg>
    ),
  },
]

export default function CommunityPage() {
  return (
    <main>
      {/* ─── SECTION 1: HERO ─── */}
      <section
        style={{
          minHeight: '80vh',
          background: '#1A1A18',
          padding: '120px 40px',
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
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#E8977A',
                marginBottom: '24px',
              }}
            >
              The Flip Community
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
              <div>Where people who&apos;ve</div>
              <div>done it, meet.</div>
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
              Twice a year. In person. You&apos;ll hear about it by post.
            </div>

            <p
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '18px',
                color: 'rgba(245,240,232,0.6)',
                maxWidth: '480px',
                margin: '24px auto 0',
                lineHeight: 1.8,
              }}
            >
              No group chat. No newsletter. No algorithm deciding what you see. When something is
              happening, a letter arrives at your door. That&apos;s how you&apos;ll know.
            </p>

            <CommunityLogin />
          </div>
        </ScrollReveal>
      </section>

      {/* ─── GATHERINGS RECORD ─── */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '100px 40px',
          borderBottom: '1px solid rgba(26,26,24,0.08)',
        }}
      >
        {/* Intro */}
        <ScrollReveal>
          <div
            style={{
              fontFamily: mono,
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#C4572A',
              marginBottom: '48px',
            }}
          >
            The gatherings so far
          </div>

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
            We&apos;ve been meeting.
          </div>
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '52px',
              color: '#C4572A',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginTop: '8px',
            }}
          >
            Since the beginning.
          </div>

          <p
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: '18px',
              color: '#4A4A44',
              maxWidth: '560px',
              lineHeight: 1.8,
              marginTop: '32px',
            }}
          >
            Before the website. Before the kit was finished. Before most people knew what Flip was.
            We started gathering anyway. These are the ones that happened.
          </p>
        </ScrollReveal>

        {/* Event cards */}
        <div
          className="gatherings-record-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '64px',
          }}
        >
          <ScrollReveal delay={0}>
            <GatheringCard
              number="001"
              label="Gathering 001"
              title="Drinks in Marylebone"
              location="A pub. Good light. Better conversation."
              note="The first one. We didn't know who would come or what it would be. It turned out to be exactly what it needed to be."
              year="2025"
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <GatheringCard
              number="002"
              label="Gathering 002"
              title="Brunch in Kensington"
              location="A table for the morning. Nowhere to be."
              note="Mornings have a different quality. People talk differently over eggs than they do over drinks. We learned that."
              year="2025"
            />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <GatheringCard
              number="003"
              label="Gathering 003"
              title="An Evening, Revisited"
              location="Marylebone, again. Some things bear repeating."
              note="The third gathering felt easier than the first. Something had settled. The room had a familiarity to it that hadn't existed before."
              year="2025"
            />
          </ScrollReveal>
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
          The next one will find you by post.
        </div>
      </section>

      {/* ─── SECTION 2: HOW IT WORKS ─── */}
      <section style={{ background: '#F5F0E8', padding: '120px 40px' }}>
        <ScrollReveal>
          <div
            style={{
              fontFamily: mono,
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#C4572A',
              marginBottom: '48px',
            }}
          >
            How it works
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div
            className="community-steps"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.title}
                style={{
                  padding: '0 48px 0 0',
                  paddingLeft: i === 0 ? 0 : '48px',
                  borderLeft: i > 0 ? '1px solid rgba(26,26,24,0.1)' : 'none',
                }}
              >
                <div style={{ height: '80px', display: 'flex', alignItems: 'flex-end', marginBottom: '32px' }}>
                  {step.icon}
                </div>
                <div
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontSize: '24px',
                    color: '#1A1A18',
                    marginBottom: '12px',
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontSize: '15px',
                    color: '#4A4A44',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── SECTION 3: THE GATHERINGS ─── */}
      <section
        style={{
          background: 'rgba(26,26,24,0.02)',
          padding: '120px 40px',
          borderTop: '1px solid rgba(26,26,24,0.08)',
          borderBottom: '1px solid rgba(26,26,24,0.08)',
        }}
      >
        <ScrollReveal>
          <div
            style={{
              fontFamily: mono,
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#C4572A',
              marginBottom: '48px',
            }}
          >
            The gatherings
          </div>
        </ScrollReveal>

        <div
          className="gatherings-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
        >
          {/* Left */}
          <ScrollReveal>
            <div>
              <div
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '52px',
                  color: '#C4572A',
                  lineHeight: 1.0,
                }}
              >
                Twice a year.
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
                Spring and autumn.
              </div>
              <p
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '17px',
                  color: '#4A4A44',
                  lineHeight: 1.9,
                  marginTop: '32px',
                  maxWidth: '440px',
                }}
              >
                No agenda. No speakers. No networking in the horrible sense of the word. Just people
                who&apos;ve shared an unusual experience, in a nice room, with good drinks.
              </p>
              <p
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '17px',
                  color: '#4A4A44',
                  lineHeight: 1.9,
                  marginTop: '20px',
                  maxWidth: '440px',
                }}
              >
                The gatherings are small deliberately. When something grows too large it loses the
                thing that made it worth attending. We&apos;d rather have thirty people who are
                genuinely present than three hundred who are half elsewhere.
              </p>
              <p
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '17px',
                  color: '#1A1A18',
                  lineHeight: 1.9,
                  marginTop: '20px',
                  maxWidth: '440px',
                  fontStyle: 'italic',
                }}
              >
                If you&apos;ve done a Flip, you belong here.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: invitation card */}
          <ScrollReveal delay={150}>
            <InvitationCard />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── THE FLIP ALBUM ─── */}
      <section
        style={{
          background: 'rgba(26,26,24,0.02)',
          padding: '80px 40px',
          borderTop: '1px solid rgba(26,26,24,0.08)',
        }}
      >
        <ScrollReveal>
          <div style={{ maxWidth: '560px' }}>
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
              The Flip Album
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '48px',
                color: '#C4572A',
                lineHeight: 1.0,
              }}
            >
              Twice a year.
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
              Everything comes together.
            </div>
            <p
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '17px',
                color: '#4A4A44',
                maxWidth: '560px',
                lineHeight: 1.9,
                marginTop: '24px',
              }}
            >
              Every photo taken during every Flip experience gets developed and printed. Twice a year
              at our gatherings, the albums come out. You find your photos mixed in with everyone
              else&apos;s. Strangers&apos; moments beside yours.
              <br /><br />
              No screens. No scrolling. Just printed photographs and the people who took them.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── SECTION 4: THE LETTER ─── */}
      <section
        style={{
          background: '#F5F0E8',
          padding: '120px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '560px', width: '100%' }}>
          <ScrollReveal>
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#C4572A',
                marginBottom: '48px',
              }}
            >
              Your address
            </div>
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
              Tell us where to write.
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '52px',
                color: '#C4572A',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                marginTop: '8px',
              }}
            >
              We&apos;ll do the rest.
            </div>
            <p
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '18px',
                color: '#4A4A44',
                lineHeight: 1.8,
                marginTop: '32px',
              }}
            >
              Complete your Flip and you&apos;ll be asked for a postal address. That&apos;s the only
              thing we need. No account. No profile. No preferences to set. Just somewhere to send a
              letter.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <CommunityForm />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SECTION 5: THE PHILOSOPHY ─── */}
      <section
        style={{
          background: '#1A1A18',
          padding: '100px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <ScrollReveal>
          <div style={{ maxWidth: '640px' }}>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '32px',
                color: '#F5F0E8',
                lineHeight: 1.5,
              }}
            >
              &ldquo;Most communities exist online. They grow large and hollow. Ours exists in rooms.
              It grows slowly and stays full.&rdquo;
            </div>
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                color: 'rgba(245,240,232,0.3)',
                letterSpacing: '0.1em',
                marginTop: '24px',
              }}
            >
              — Flip
            </div>
            <div style={{ marginTop: '48px' }}>
              <Link
                href="/begin"
                className="philosophy-cta"
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  border: '1px solid rgba(245,240,232,0.2)',
                  color: '#F5F0E8',
                  fontFamily: mono,
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  padding: '14px 32px',
                  textDecoration: 'none',
                }}
              >
                Begin your Flip
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
