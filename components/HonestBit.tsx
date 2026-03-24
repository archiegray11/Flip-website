const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const faqs = [
  {
    q: "What if I genuinely need my phone for something urgent?",
    a: "Use it. Sometimes you need to and we aren't watching. This is all about reassessing your relationship with your phone — you make the rules. The goal isn't perfection, it's awareness.",
  },
  {
    q: "What happens to my messages while I'm on the flip phone?",
    a: "Your SMS messages come straight through to the flip phone. You get the novelty of typing back old school or just calling. Simple.",
  },
  {
    q: "What about WhatsApp?",
    a: "Your WhatsApp is still functional on your laptop — so when you're home you can catch up on messages. When you're out and about, you're out. Enjoy not being badgered by constant group chats. We'd recommend telling your close friends and family before you start your 7 days so they can reach you directly by call or SMS.",
  },
  {
    q: "Do I have to give the kit back?",
    a: "The kit is all yours to keep — the notebook, the pen, the camera, everything. The only thing that comes back is the flip phone. At the end of your 7 days just wipe it using the instructions included and pop it in the prepaid return packaging. If you've fallen for the phone and don't want to give it back, you can buy it out for what we paid for it.",
  },
  {
    q: "What are the Flip Papers exactly?",
    a: "A surprise. Wait and see.",
  },
  {
    q: "Can I do this if I work from home or have a demanding job?",
    a: "Yes — and it works amazingly well for people who WFH. Your laptop stays, your work stays, only the phone goes. If you work in an office, check with your employer first or wait for a convenient moment in your life to take 7 days. There's no wrong time, just a right one.",
  },
  {
    q: "What if the kit arrives damaged?",
    a: "Return it and you'll be issued a full refund. No questions asked.",
  },
]

export default function HonestBit() {
  return (
    <section
      id="honest-bit"
      style={{
        background: 'rgba(26,26,24,0.02)',
        padding: '100px 40px',
        borderTop: '1px solid rgba(26,26,24,0.08)',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        {/* Intro */}
        <div style={{ textAlign: 'center' }}>
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
            The honest bit
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
            Before you buy.
          </div>
          <div
            style={{
              fontFamily: serif,
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '24px',
              color: '#4A4A44',
              marginTop: '8px',
            }}
          >
            Things worth knowing.
          </div>
          <div
            style={{
              width: '40px',
              height: '1px',
              background: '#C4572A',
              margin: '32px auto 0',
            }}
          />
        </div>

        {/* Grid */}
        <div
          className="grid-2col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            marginTop: '48px',
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="honest-card"
              style={{
                background: '#fff',
                padding: '36px',
                border: '1px solid rgba(26,26,24,0.06)',
              }}
            >
              <div
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '20px',
                  color: '#1A1A18',
                  lineHeight: 1.3,
                  marginBottom: '16px',
                }}
              >
                {faq.q}
              </div>
              <div
                style={{
                  fontFamily: serif,
                  fontWeight: 300,
                  fontSize: '16px',
                  color: '#4A4A44',
                  lineHeight: 1.85,
                }}
              >
                {faq.a}
              </div>
            </div>
          ))}

          {/* Dark contact card — 8th cell */}
          <div
            style={{
              background: '#1A1A18',
              padding: '36px',
              border: '1px solid rgba(26,26,24,0.06)',
            }}
          >
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '24px',
                color: '#F5F0E8',
                marginBottom: '12px',
              }}
            >
              Still unsure?
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '16px',
                color: 'rgba(245,240,232,0.6)',
                lineHeight: 1.7,
              }}
            >
              Get in touch and we will answer anything.
            </div>
            <a
              href="mailto:hello@flip.com"
              className="honest-contact-email"
              style={{
                display: 'inline-block',
                fontFamily: mono,
                fontSize: '10px',
                color: '#E8977A',
                textDecoration: 'none',
                marginTop: '20px',
                letterSpacing: '0.05em',
              }}
            >
              hello@flip.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
