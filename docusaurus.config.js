
module.exports = {
  title: 'ULTRAKILL Wiki',
  tagline: 'Blood is Fuel',
  url: 'https://example.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'yourname',
  projectName: 'ultrakill-wiki',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ULTRAKILL Wiki',
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} ULTRAKILL Wiki`,
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
