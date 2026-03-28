'use client'

import { useRef, useState, useCallback, useEffect } from 'react'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const panels = [
  {
    number: '01 / 08',
    name: 'Flip Phone',
    tagline: 'Calls and texts. The way phones were meant to be.',
    philosophy:
      "Your smartphone isn't just a communication device. It's an infinite scroll machine disguised as one. The flip phone does what phones are supposed to do — and nothing else. You'll be surprised how little you miss.",
    replaces: 'WhatsApp · SMS · Calls',
  },
  {
    number: '02 / 08',
    name: 'The Flip Book',
    tagline: 'You are not the first person to hold this.',
    philosophy:
      "This notebook has already been written in. By someone you will never meet, who did exactly what you are about to do. When your seven days are over, you return it. The next person receives it. Over time it becomes something no company could manufacture — a layered record of real human experience.\n\nYou have five to ten pages. Use them honestly. Someone will read what you write.",
    rule: 'Do not skip ahead.',
    replaces: 'Notes · Reminders · The feeling of writing alone',
  },
  {
    number: '03 / 08',
    name: 'The Pen',
    tagline: "A tool that doesn't ping.",
    philosophy:
      "It sounds trivial until you haven't used one in months. Writing by hand changes what you write — the pace, the intention, the physical commitment of putting something down. We include a good one deliberately.",
    replaces: 'Typing · Dictation · Screenshots of thoughts',
  },
  {
    number: '04 / 08',
    name: 'The Camera',
    tagline: "A camera you won't check.",
    philosophy:
      "Each kit includes a film camera. You take photos during your seven days — moments you would have otherwise missed, or scrolled past, or not noticed at all. No previews. No retakes. No curation.\n\nWhen you return the kit, the camera comes back too. We develop the film. Your photos are added to the Flip Album.",
    extraItalic: "You won't see them straight away.",
    extraBody:
      "Twice a year we bring everything together. Every photo from every kit. Printed and placed into the Flip Album. That's when you see what you captured. Not on a screen. In a room. With everyone else.",
    replaces: 'iPhone Camera · Instagram · The urge to perform',
  },
  {
    number: '05 / 08',
    name: 'Map Book',
    tagline: 'Where you are. On paper.',
    philosophy:
      "Getting slightly lost is one of the most underrated human experiences. The map book doesn't reroute when you take a wrong turn. It lets you understand where you are in relation to everything else — which is a different, better kind of navigation.",
    replaces: 'Google Maps · Apple Maps · Citymapper',
  },
  {
    number: '06 / 08',
    name: 'Alarm Clock',
    tagline: 'The phone stays out of the bedroom.',
    philosophy:
      "The single most impactful change most Flip users report. When you don't need your phone to wake you up, it doesn't need to come into the bedroom. Sleep improves within two nights. Every time.",
    replaces: 'Phone alarm · Bedside scrolling',
  },
  {
    number: '07 / 08',
    name: 'Pen Pal Letter',
    tagline: 'A stamp. An envelope. A reason.',
    philosophy:
      "Write to someone who matters. The act of composing a letter — physical, committed, impossible to unsend — is one of the stranger and more moving experiences the kit produces. We include the materials. You provide the words.",
    replaces: 'iMessage · WhatsApp · Email',
  },
  {
    number: '08 / 08',
    name: 'The System',
    tagline: 'Everything else that makes it work.',
    philosophy:
      "The alarm clock keeps the phone out of the bedroom. The Flip Browser keeps the laptop honest. The Flip Papers give each day something to open. The community means you're not doing it alone. None of these are the point. All of them are the point.",
    replaces: 'Alarm clock · Flip Browser · The Flip Papers · The Community',
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
                padding: '80px 40px 80px 80px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignItems: 'center',
                gap: '80px',
                background: '#F5F0E8',
                boxSizing: 'border-box',
              }}
            >
              {/* Left column */}
              <div className="kit-panel-text">
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
                    maxWidth: '440px',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {panel.philosophy}
                </p>

                {'rule' in panel && panel.rule && (
                  <>
                    <div
                      style={{
                        borderTop: '1px solid rgba(26,26,24,0.1)',
                        margin: '24px 0',
                      }}
                    />
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: '10px',
                        color: '#1A1A18',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {panel.rule}
                    </div>
                  </>
                )}

                {'extraItalic' in panel && panel.extraItalic && (
                  <>
                    <div
                      style={{
                        borderTop: '1px solid rgba(26,26,24,0.1)',
                        margin: '24px 0',
                      }}
                    />
                    <div
                      style={{
                        fontFamily: serif,
                        fontWeight: 300,
                        fontStyle: 'italic',
                        fontSize: '18px',
                        color: '#1A1A18',
                        lineHeight: 1.5,
                      }}
                    >
                      {panel.extraItalic}
                    </div>
                    {'extraBody' in panel && panel.extraBody && (
                      <p
                        style={{
                          fontFamily: serif,
                          fontWeight: 300,
                          fontSize: '16px',
                          color: '#4A4A44',
                          lineHeight: 1.8,
                          marginTop: '12px',
                          maxWidth: '440px',
                        }}
                      >
                        {panel.extraBody}
                      </p>
                    )}
                  </>
                )}

                <div
                  style={{
                    fontFamily: mono,
                    fontSize: '9px',
                    color: '#9A9A90',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: ('rule' in panel && panel.rule) || ('extraItalic' in panel && panel.extraItalic) ? '24px' : '32px',
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

              {/* Right column — image placeholder */}
              <div
                className="kit-panel-image"
                style={{
                  aspectRatio: '3 / 4',
                  background: 'rgba(26,26,24,0.06)',
                  border: '1px solid rgba(26,26,24,0.08)',
                }}
              />
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
