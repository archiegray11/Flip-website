'use client'

import { useRef, useState, useCallback, useEffect } from 'react'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const panels = [
  {
    number: '01 / 06',
    name: 'The Nokia 2720',
    tagline: 'Calls, texts, and maps if you need them.',
    philosophy:
      'The Nokia 2720 is not a compromise. It is the original. Sleek, all black, and built to do exactly what a phone should do — and nothing else. You will be surprised how quickly it starts to feel like enough.',
    replaces: 'Smartphone · WhatsApp · Infinite scroll',
  },
  {
    number: '02 / 06',
    name: 'Notebook and Pen',
    tagline: 'Leather cover. Ages over time.',
    philosophy:
      'The notebook arrives already written in. Someone before you — a stranger — used their seven days and left their pages behind. You add yours. When you return the kit the notebook goes to the next person. The pen is yours to keep. Leather cover, weighted in the hand, it ages the more you use it. Both are made to last.',
    replaces: 'Notes · Reminders · Voice memos · Screenshots of thoughts',
  },
  {
    number: '03 / 06',
    name: 'Film Camera',
    tagline: 'A camera you will not check.',
    philosophy:
      'The film roll comes inside the kit. During your seven days you take photographs of moments you would have otherwise missed — or scrolled past without seeing. No previews. No retakes. No curation. When the kit comes back, the camera does too. We develop every roll. Your photos are added to the Flip Album — a growing physical archive revealed twice a year at our gatherings. In person. Not on a screen.',
    replaces: 'iPhone camera · Instagram · The urge to perform',
  },
  {
    number: '04 / 06',
    name: 'The Flip Papers',
    tagline: 'One opened each day. No rules.',
    philosophy:
      'Seven things to open, one each day. Some are challenges. Some are submissions from the Flip community. Some are prompts, provocations, or small and strange things to do with your hands. There is no obligation. No homework. No wrong answer. Open them in order. That is the only rule.',
    replaces: 'Notifications · The scroll · The endless to-do list',
  },
  {
    number: '05 / 06',
    name: 'The Flip Browser',
    tagline: 'For when you reach for the laptop instead.',
    philosophy:
      'The Flip Browser is a Chrome extension that connects directly to your browser. Before your seven days begin you choose the sites you want to block — Instagram, TikTok, Reddit, whatever pulls you in. For the duration of your Flip they are gone. When you try to visit one, the page closes like a flip phone snapping shut. Because removing the phone from your pocket is only half the battle. The laptop is still there.',
    replaces: 'Instagram · TikTok · Reddit · YouTube · The other device',
  },
  {
    number: '06 / 06',
    name: 'Alarm Clock',
    tagline: 'The phone stays out of the bedroom.',
    philosophy:
      'When you do not need your phone to wake you up, it does not need to come into the bedroom. This one change — more than any other in the kit — is what people report first. Sleep improves within two nights. The morning feels different. You are not reaching for a screen before you have even opened your eyes.',
    replaces: 'Phone alarm · Bedside scrolling · The morning scroll',
  },
]

export default function KitScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredArrow, setHoveredArrow] = useState<'left' | 'right' | null>(null)

  const handleScroll = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth))
  }, [])

  const scrollTo = useCallback((index: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' })
  }, [])

  // Hint animation: nudge right then back, once, after 1.5s
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const nudge = setTimeout(() => {
      el.scrollTo({ left: 40, behavior: 'smooth' })
      const restore = setTimeout(() => {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      }, 600)
      return () => clearTimeout(restore)
    }, 1500)
    return () => clearTimeout(nudge)
  }, [])

  const arrowStyle = (side: 'left' | 'right') => ({
    position: 'absolute' as const,
    top: 0,
    [side]: 0,
    height: '100%',
    width: '60px',
    background:
      hoveredArrow === side ? 'rgba(245,240,232,1)' : 'rgba(245,240,232,0.9)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: 'background 200ms ease, color 200ms ease',
    fontFamily: serif,
    fontSize: '48px',
    lineHeight: 1,
    color: hoveredArrow === side ? '#C4572A' : '#1A1A18',
    padding: 0,
  })

  return (
    <div>
      {/* Scroller + overlaid arrows */}
      <div style={{ position: 'relative' }}>
        {activeIndex > 0 && (
          <button
            onClick={() => scrollTo(activeIndex - 1)}
            onMouseEnter={() => setHoveredArrow('left')}
            onMouseLeave={() => setHoveredArrow(null)}
            aria-label="Previous item"
            className="kit-nav-arrow"
            style={arrowStyle('left')}
          >
            &#8249;
          </button>
        )}

        {activeIndex < panels.length - 1 && (
          <button
            onClick={() => scrollTo(activeIndex + 1)}
            onMouseEnter={() => setHoveredArrow('right')}
            onMouseLeave={() => setHoveredArrow(null)}
            aria-label="Next item"
            className="kit-nav-arrow"
            style={arrowStyle('right')}
          >
            &#8250;
          </button>
        )}

        <div
          ref={scrollerRef}
          className="kit-scroller kit-scroller-area"
          onScroll={handleScroll}
          style={{
            display: 'flex',
            overflowX: 'scroll',
            scrollSnapType: 'x mandatory',
            minHeight: '80vh',
          }}
        >
          {panels.map((panel) => (
            <div
              key={panel.number}
              className="kit-panel"
              style={{
                flexShrink: 0,
                width: '100vw',
                scrollSnapAlign: 'start',
                background: '#F5F0E8',
                boxSizing: 'border-box',
              }}
            >
              <div className="kit-panel-text" style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 40px' }}>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: '9px',
                    color: '#9A9A90',
                    letterSpacing: '0.1em',
                    marginBottom: '16px',
                  }}
                >
                  {panel.number}
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
                  {panel.name}
                </div>

                <div
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontSize: '22px',
                    fontStyle: 'italic',
                    color: '#C4572A',
                    marginTop: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {panel.tagline}
                </div>

                <p
                  style={{
                    fontFamily: serif,
                    fontWeight: 300,
                    fontSize: '16px',
                    color: '#4A4A44',
                    lineHeight: 1.8,
                    marginTop: '24px',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {panel.philosophy}
                </p>

                <div
                  style={{
                    fontFamily: mono,
                    fontSize: '9px',
                    color: '#9A9A90',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: '32px',
                    marginBottom: '6px',
                  }}
                >
                  Replaces
                </div>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: '10px',
                    color: '#1A1A18',
                  }}
                >
                  {panel.replaces}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Dot indicator bar */}
      <div
        style={{
          width: '100%',
          background: '#F5F0E8',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {panels.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to panel ${i + 1}`}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: i === activeIndex ? '#1A1A18' : 'rgba(26,26,24,0.2)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transform: i === activeIndex ? 'scale(1.3)' : 'scale(1)',
              transition: 'background 200ms ease, transform 200ms ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}
