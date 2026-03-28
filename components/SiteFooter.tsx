import Link from 'next/link'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const footerLinks = [
  { label: 'The Kit', href: '/the-system' },
  { label: 'The Experience', href: '/the-experience' },
  { label: 'Stories', href: '/stories' },
  { label: 'Community', href: '/community' },
  { label: 'For Organisations', href: '/for-organisations' },
  { label: 'About', href: '/about' },
]

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: '#1A1A18',
        padding: '48px 40px',
        borderTop: '1px solid rgba(245,240,232,0.06)',
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: serif,
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '22px',
            color: '#C4572A',
            textDecoration: 'none',
          }}
        >
          Flip
        </Link>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            gap: '28px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="footer-link"
              style={{
                fontFamily: mono,
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(245,240,232,0.3)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
