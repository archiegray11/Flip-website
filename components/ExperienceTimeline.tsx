'use client'

import { useRef, useState, useEffect } from 'react'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const days = [
  {
    label: 'Day 01',
    name: 'The Withdrawal',
    body: "The first few hours are strange. You reach for the phone that isn't there — or rather, isn't the phone you're used to. You check it expecting notifications and find nothing. The flip phone sits on your desk like an artifact from another era. By evening, you've noticed three things you've never noticed before in this room.",
    quote: "I kept picking it up and putting it down again. Not because I needed it. Just because I didn't know what else to do with my hands.",
  },
  {
    label: 'Day 02',
    name: 'The Boredom',
    body: "Something unexpected: boredom. Real boredom. The kind you haven't felt since childhood. You're waiting for a coffee and you have nothing to look at. You sit with it. It's uncomfortable for about four minutes. Then it becomes something else — a kind of quiet attention you'd forgotten you were capable of.",
    quote: "I noticed the boredom arrived and then left on its own. I didn't need to fix it.",
  },
  {
    label: 'Day 03',
    name: 'The Turning',
    body: "By day three, something has shifted. The phantom phone-reach is still happening, but less. You've started writing in the notebook — things you wouldn't have written, thoughts that wouldn't have survived the three-second attention span of a notes app. The film camera has come out twice. You're looking at things before photographing them.",
    quote: "I took a photograph of my coffee. Then I put the camera down and just drank it.",
  },
  {
    label: 'Day 04',
    name: 'The Clarity',
    body: "A conversation happens today that wouldn't have happened before. You're fully there for it. You notice the other person's face. You hear what they're not saying. Later, you try to describe what's different and struggle to. Something about time moving differently. An afternoon that felt like an afternoon.",
    quote: "Time started working again. I don't know how else to put it.",
  },
  {
    label: 'Day 05',
    name: 'The Productivity Paradox',
    body: "You expected to be less productive. You are, objectively, more productive. Not because you're doing more — because you're doing fewer things badly. Single tasks, completed. Decisions made without the compulsive urge to research them for forty minutes first. The notebook is filling up.",
    quote: "I made a decision in under a minute that I'd been going back and forth on for three weeks.",
  },
  {
    label: 'Day 06',
    name: 'The Letter',
    body: "You write the letter. The pen pal envelope has been sitting in the kit since day one, and you've been thinking about who to write to. Writing by hand to someone is profoundly different from texting them. You write things you mean. You can't delete anything. The stamp feels ceremonial.",
    quote: "I told her things I'd been meaning to tell her for two years. It took a piece of paper and a pen to make me do it.",
  },
  {
    label: 'Day 07',
    name: 'The Question',
    body: "The last day arrives with a question you weren't expecting: do you want to go back? Not because the week has been perfect — there were moments of genuine frustration, edge cases the concierge handled but felt clumsy. But something has been recalibrated. You're not sure you want to uncalibrate it.",
    quote: "I charged my iPhone that evening. I didn't pick it up for another three hours.",
  },
]

export default function ExperienceTimeline() {
  const [activeDay, setActiveDay] = useState(0)
  const dayRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    dayRefs.current.forEach((el, i) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveDay(i)
        },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div
      className="timeline-layout"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: '80px 40px 120px',
        background: '#F5F0E8',
      }}
    >
      {/* Left sticky column */}
      <div
        className="timeline-sticky"
        style={{
          position: 'sticky',
          top: '120px',
          width: '200px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontFamily: serif,
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '80px',
            color: 'rgba(26,26,24,0.08)',
            lineHeight: 1,
            transition: 'opacity 300ms ease',
          }}
        >
          {days[activeDay].label.replace('Day ', '')}
        </div>
        <div
          style={{
            fontFamily: mono,
            fontSize: '10px',
            textTransform: 'uppercase',
            color: '#C4572A',
            letterSpacing: '0.15em',
            marginTop: '8px',
            transition: 'opacity 300ms ease',
          }}
        >
          {days[activeDay].name}
        </div>
      </div>

      {/* Right scrolling column */}
      <div className="timeline-content" style={{ flex: 1, paddingLeft: '60px' }}>
        {days.map((day, i) => (
          <div
            key={i}
            ref={(el) => {
              dayRefs.current[i] = el
            }}
            style={{
              paddingBottom: i < days.length - 1 ? '100px' : 0,
            }}
          >
            {/* Day header */}
            <div
              style={{
                fontFamily: mono,
                fontSize: '10px',
                color: '#9A9A90',
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}
            >
              {day.label}
            </div>
            <div
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '28px',
                color: '#1A1A18',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}
            >
              {day.name}
            </div>

            {/* Body */}
            <p
              style={{
                fontFamily: serif,
                fontWeight: 300,
                fontSize: '17px',
                color: '#4A4A44',
                lineHeight: 1.9,
                maxWidth: '600px',
              }}
            >
              {day.body}
            </p>

            {/* Pull quote */}
            <blockquote
              style={{
                borderLeft: '3px solid #C4572A',
                paddingLeft: '24px',
                margin: '40px 0 0',
                fontFamily: serif,
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '22px',
                color: '#1A1A18',
                lineHeight: 1.5,
                maxWidth: '520px',
              }}
            >
              &ldquo;{day.quote}&rdquo;
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  )
}
