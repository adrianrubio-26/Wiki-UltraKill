
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Main Character',
      items: ['V1/V1'],
    },
    {
      type: 'category',
      label: 'Weapons',
      items: ['weapons/revolver'],
    },
    {
      type: 'category',
      label: 'Enemies',
      items: ['enemies/mindflayer',
        'enemies/minos-prime',
        'enemies/thr-1000-earthmover',
        'enemies/something-wicked',
        'enemies/sisyphus-prime',
        'enemies/Gabriel'
      ],
    },
    {
      type: 'category',
      label: 'Easter Eggs',
      items: ['easter-eggs/Secret-levels'],
    },
    {
      type: 'category',
      label: 'Game Versions',
      items: ['versions/versions'],
    },
  ],
};

module.exports = sidebars;
