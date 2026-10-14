import type { Cv } from './types.ts'

/** CV content — the only file you need to edit to change what the page says. */
export const cv: Cv = {
  profile: {
    name: 'Your Name',
    title: 'Frontend Engineer',
    nav: [
      { label: 'My work', href: 'https://github.com/your-handle' },
      { label: 'Notes', href: '#', icon: 'note' },
      { label: 'Prints', href: '#', icon: 'image' },
    ],
  },
  experience: [
    { company: 'Current Company', start: '2025', end: null },
    {
      company: 'Previous Company',
      start: '2023',
      end: '2025',
      summary: 'One sentence on what the team did and what you owned.',
      highlights: [
        ['Designed and built the ', { label: 'Pricing page', href: 'https://example.com' }, ', from concept to production'],
        'Implemented filtering for the main data table',
        'Cut dashboard load time from 4.1s to 1.7s',
      ],
    },
    {
      company: 'First Company',
      start: '2022',
      summary: 'First frontend hire, focused on the marketing site and design system.',
    },
  ],
  education: [
    {
      school: 'The University of Sydney',
      degree: 'Master of Computer Science',
      start: 'YYYY',
      end: 'YYYY',
    },
    {
      school: 'National Taiwan University of Science and Technology',
      degree: 'Bachelor of Architecture, Department of Architecture, College of Design',
      start: '2022',
      end: '2026',
    },
    {
      school: 'Taichung First Senior High School',
      start: '2019',
      end: '2022',
    },
  ],
  collaborations: {
    intro: 'Some of the people I had the chance to work alongside and learn from',
    people: [
      { name: 'Teammate One', href: 'https://example.com' },
      { name: 'Teammate Two' },
    ],
  },
  connect: [
    { label: 'GitHub', href: 'https://github.com/ylx959' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ylx0421/' },
    { label: 'Email', href: 'mailto:yanglinxuan021@gmail.com' },
    { label: 'Instagram', href: 'https://www.instagram.com/linxuan__0421/' },
  ],
}
