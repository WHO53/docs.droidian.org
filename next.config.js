const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  showLineNumbers: true,
})

module.exports = withNextra({
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
})
