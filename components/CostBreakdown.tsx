'use client'

import { useState } from 'react'

const mono = 'var(--font-dm-mono)'
const serif = 'var(--font-cormorant)'

const items = [
  { name: 'Flip phone (returnable)', price: 12, color: '#C4572A' },
  { name: 'Notebook', price: 5, color: '#E8977A' },
  { name: 'Pen', price: 3, color: '#7A8C6E' },
  { name: 'Film camera', price: 13, color: '#2A4A3A' },
  { name: 'Alarm clock', price: 9, color: '#D4B896' },
  { name: 'Map book', price: 6, color: '#9A9A90' },
  { name: 'Sheets (printed)', price: 4, color: '#8C9E7E' },
  { name: 'Packaging', price: 7, color: '#6E5A4A' },
  { name: 'Shipping', price: 5, color: '#F2CDB8' },
  { name: 'Platform / admin', price: 5, color: '#C49A7A' },
  { name: 'Reinvestment', price: 16, color: '#1A1A18' },
]

const total = items.reduce((sum, item) => sum + item.price, 0)

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, startAngle)
  const end = polarToCartesian(cx, cy, r, endAngle)
  const large = endAngle - startAngle > 180 ? 1 : 0
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y} Z`
}

interface Tooltip {
  x: number
  y: number
  name: string
  price: number
}

export default function CostBreakdown() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)

  const cx = 200
  const cy = 200
  const r = 170

  let currentAngle = 0
  const segments = items.map((item, i) => {
    const span = (item.price / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + span
    currentAngle += span
    const midAngle = (startAngle + endAngle) / 2
    const midRad = ((midAngle - 90) * Math.PI) / 180
    return { ...item, startAngle, endAngle, midRad, index: i }
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
      {/* Pie chart */}
      <div style={{ position: 'relative' }}>
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          style={{ display: 'block', overflow: 'visible' }}
        >
          {segments.map((seg) => {
            const path = arcPath(cx, cy, r, seg.startAngle, seg.endAngle)
            const isHovered = hovered === seg.index
            const dx = isHovered ? Math.cos(seg.midRad) * 8 : 0
            const dy = isHovered ? Math.sin(seg.midRad) * 8 : 0
            return (
              <path
                key={seg.name}
                d={path}
                fill={seg.color}
                opacity={hovered === null || isHovered ? 1 : 0.55}
                transform={`translate(${dx}, ${dy})`}
                onMouseMove={(e) =>
                  setTooltip({ x: e.clientX, y: e.clientY, name: seg.name, price: seg.price })
                }
                onMouseLeave={() => {
                  setHovered(null)
                  setTooltip(null)
                }}
                onMouseEnter={() => setHovered(seg.index)}
                style={{
                  transition: 'opacity 0.2s, transform 0.15s',
                  cursor: 'pointer',
                }}
              />
            )
          })}
          {/* Centre donut hole */}
          <circle cx={cx} cy={cy} r={60} fill="#F5F0E8" />
          <text
            x={cx}
            y={cy - 8}
            textAnchor="middle"
            fontFamily={serif}
            fontWeight={300}
            fontSize={28}
            fill="#1A1A18"
          >
            £99
          </text>
          <text
            x={cx}
            y={cy + 12}
            textAnchor="middle"
            fontFamily={mono}
            fontSize={8}
            letterSpacing={2}
            fill="#9A9A90"
            style={{ textTransform: 'uppercase' }}
          >
            TOTAL
          </text>
        </svg>
      </div>

      {/* Tooltip — fixed so it follows cursor across whole page */}
      {tooltip && (
        <div
          style={{
            position: 'fixed',
            left: tooltip.x + 16,
            top: tooltip.y - 36,
            background: '#1A1A18',
            color: '#F5F0E8',
            padding: '8px 14px',
            fontFamily: mono,
            fontSize: '11px',
            letterSpacing: '0.05em',
            pointerEvents: 'none',
            zIndex: 9999,
            whiteSpace: 'nowrap',
          }}
        >
          {tooltip.name} — £{tooltip.price}
        </div>
      )}

      {/* Legend */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px 40px',
          maxWidth: '480px',
          width: '100%',
        }}
      >
        {items.map((item) => (
          <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: item.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: mono,
                fontSize: '9px',
                color: '#4A4A44',
                letterSpacing: '0.05em',
              }}
            >
              {item.name}
            </span>
            <span
              style={{
                fontFamily: mono,
                fontSize: '9px',
                color: '#9A9A90',
                marginLeft: 'auto',
                flexShrink: 0,
              }}
            >
              £{item.price}
            </span>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <p
        style={{
          fontFamily: serif,
          fontWeight: 300,
          fontSize: '16px',
          color: '#9A9A90',
          maxWidth: '480px',
          textAlign: 'center',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        Every kit is returnable. The phone comes back and gets used again. This is your real cost
        breakdown — nothing hidden.
      </p>
    </div>
  )
}
