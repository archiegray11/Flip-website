import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function fetchBuffer(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http
    const req = lib.get(url, { headers }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchBuffer(res.headers.location, headers).then(resolve).catch(reject)
      }
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', reject)
    })
    req.on('error', reject)
  })
}

async function getFontBase64(weight, style) {
  const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  const cssUrl = `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@${style === 'italic' ? 1 : 0},${weight}&display=swap`
  const css = (await fetchBuffer(cssUrl, { 'User-Agent': ua })).toString()

  // Extract font URL (format may be woff2 or truetype depending on UA)
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:woff2|truetype)'\)/)
  if (!match) throw new Error('Could not find font URL in CSS: ' + css.slice(0, 500))

  const fontUrl = match[1]
  const isTtf = fontUrl.endsWith('.ttf')
  console.log(`Downloading font: ${fontUrl}`)
  const fontBuffer = await fetchBuffer(fontUrl, { 'User-Agent': ua })
  return { b64: fontBuffer.toString('base64'), format: isTtf ? 'truetype' : 'woff2', mime: isTtf ? 'font/ttf' : 'font/woff2' }
}

function makeSVG({ text, fill, bgFill, weight, font }) {
  const fontFace = `@font-face {
      font-family: 'Cormorant Garamond';
      font-style: italic;
      font-weight: ${weight};
      src: url('data:${font.mime};base64,${font.b64}') format('${font.format}');
    }`

  const bg = bgFill ? `<rect width="300" height="120" fill="${bgFill}"/>` : ''

  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="120" viewBox="0 0 300 120">
  <defs>
    <style>
      ${fontFace}
    </style>
  </defs>
  ${bg}
  <text
    x="8"
    y="95"
    font-family="'Cormorant Garamond', serif"
    font-weight="${weight}"
    font-style="italic"
    font-size="120"
    letter-spacing="-2.4"
    fill="${fill}"
  >flip</text>
</svg>
`
}

async function main() {
  console.log('Fetching Cormorant Garamond 300 italic...')
  const font300 = await getFontBase64(300, 'italic')

  console.log('Fetching Cormorant Garamond 400 italic...')
  const font400 = await getFontBase64(400, 'italic')

  const variants = [
    { name: 'flip-primary', fill: '#C4572A', bgFill: null,      weight: 300, font: font300 },
    { name: 'flip-dark',    fill: '#1A1A18', bgFill: null,      weight: 300, font: font300 },
    { name: 'flip-cream',   fill: '#F5F0E8', bgFill: null,      weight: 300, font: font300 },
    { name: 'flip-emboss',  fill: '#000000', bgFill: '#ffffff', weight: 400, font: font400 },
  ]

  for (const v of variants) {
    const svgContent = makeSVG({ text: 'flip', fill: v.fill, bgFill: v.bgFill, weight: v.weight, font: v.font })
    const svgPath = path.join(__dirname, `${v.name}.svg`)
    fs.writeFileSync(svgPath, svgContent)
    console.log(`Written ${v.name}.svg`)
  }

  // Export PNGs via sharp
  const sharp = (await import('sharp')).default

  for (const v of variants) {
    const svgPath = path.join(__dirname, `${v.name}.svg`)
    const pngPath = path.join(__dirname, `${v.name}.png`)
    const svgContent = fs.readFileSync(svgPath)
    await sharp(svgContent)
      .resize(600)
      .png()
      .toFile(pngPath)
    console.log(`Exported ${v.name}.png`)
  }

  console.log('Done.')
}

main().catch(err => { console.error(err); process.exit(1) })
