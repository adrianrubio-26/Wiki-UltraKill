
const sidebars = {
  tutorialSidebar: [
    'index',
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
      ],
    },
    {
      type: 'category',
      label: 'Game Versions',
      items: ['versions/versions'],
    },
  ],
};

module.exports = sidebars;
