import { defineConfig } from 'vitepress'

// Public Kashif documentation (product + user guides).
// IMPORTANT: this site is PUBLIC. Never add internal/ops content here — those live in the app
// repo under internal-docs/ and are never served or published. srcDir is this docs/ folder only.
export default defineConfig({
  title: 'Kashif Docs',
  description: 'Product and user documentation for Kashif — the inbound hiring platform.',
  lang: 'en-US',
  // Hosted at hirekashif.com/docs by default; change to '/' if served on its own subdomain.
  base: '/docs/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'robots', content: 'index,follow' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Product', link: '/product/overview' },
      { text: 'hirekashif.com', link: 'https://hirekashif.com' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Product',
          items: [
            { text: 'Overview', link: '/product/overview' },
            { text: 'Feature catalog', link: '/product/feature-catalog' },
          ],
        },
        {
          text: 'Getting started',
          items: [
            { text: 'Getting started', link: '/guide/getting-started' },
          ],
        },
        {
          text: 'User guide',
          items: [
            { text: 'Jobs & careers pages', link: '/guide/jobs-and-careers' },
            { text: 'Applicants & pipeline', link: '/guide/applicants-and-pipeline' },
            { text: 'Interviews & scheduling', link: '/guide/interviews-and-scheduling' },
            { text: 'Candidate communications', link: '/guide/candidate-communications' },
            { text: 'Fairness & compliance', link: '/guide/fairness-and-compliance' },
            { text: 'Team, roles & security', link: '/guide/team-roles-and-security' },
            { text: 'Billing & plans', link: '/guide/billing-and-plans' },
            { text: 'Analytics & ROI', link: '/guide/analytics-and-roi' },
            { text: 'Integrations', link: '/guide/integrations' },
          ],
        },
      ],
    },
    search: { provider: 'local' },
    footer: {
      message: 'Kashif — the inbound hiring platform',
      copyright: '© Kashif',
    },
  },
})
