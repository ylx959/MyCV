import { describe, expect, it } from 'vitest'
import { cv } from './data.ts'
import { renderCv } from './render.ts'

describe('renderCv', () => {
  it('renders the profile name and title', () => {
    const out = renderCv(cv)
    expect(out).toContain(cv.profile.name)
    expect(out).toContain(cv.profile.title)
  })

  it('escapes user-provided text', () => {
    const out = renderCv({ ...cv, profile: { ...cv.profile, name: '<script>x</script>' } })
    expect(out).not.toContain('<script>')
    expect(out).toContain('&lt;script&gt;')
  })

  it('omits sections with no entries', () => {
    const out = renderCv({ ...cv, collaborations: { people: [] }, connect: [] })
    expect(out).not.toContain('Collaborations')
    expect(out).not.toContain('Connect')
  })

  it('shows Present for an ongoing role and a single year when there is no end', () => {
    const out = renderCv({
      ...cv,
      experience: [
        { company: 'A', start: '2025', end: null },
        { company: 'B', start: '2022' },
      ],
    })
    expect(out).toContain('</time> – Present')
    expect(out).not.toMatch(/2022<\/time> –/)
  })

  it('renders links inside highlights and opens external ones in a new tab', () => {
    const out = renderCv({
      ...cv,
      experience: [{ company: 'A', start: '2024', highlights: [['Built ', { label: 'Docs', href: 'https://x.dev' }]] }],
    })
    expect(out).toMatch(/href="https:\/\/x\.dev"\s+target="_blank"/)
    expect(out).toContain('>Docs<svg')
  })

  it('falls back to initials when a collaborator has no avatar', () => {
    const out = renderCv({ ...cv, collaborations: { people: [{ name: 'Lin Wei' }] } })
    expect(out).toContain('>LW<')
  })
})

describe('renderCv edge cases', () => {
  it('renders nothing for an empty highlights list', () => {
    const out = renderCv({ ...cv, education: [], experience: [{ company: 'A', start: '2024', highlights: [] }] })
    expect(out).not.toContain('list-disc')
    expect(out).not.toMatch(/>\s*0\s*</)
  })
})

describe('education', () => {
  it('renders after experience with school as heading and degree as summary', () => {
    const out = renderCv({
      ...cv,
      education: [{ school: 'NTU', degree: 'B.S. CS', start: '2018', end: '2022' }],
    })
    expect(out.indexOf('Education')).toBeGreaterThan(out.indexOf('Experience'))
    expect(out).toMatch(/<h3[^>]*>NTU<\/h3>/)
    expect(out).toContain('<p class="mt-2">B.S. CS</p>')
  })

  it('is omitted when there is no education', () => {
    expect(renderCv({ ...cv, education: [] })).not.toContain('Education')
  })
})
