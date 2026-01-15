import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '83a'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '43a'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '77d'),
            routes: [
              {
                path: '/easter-eggs/Secret-levels',
                component: ComponentCreator('/easter-eggs/Secret-levels', '807'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enemies/Gabriel',
                component: ComponentCreator('/enemies/Gabriel', 'cf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enemies/mindflayer',
                component: ComponentCreator('/enemies/mindflayer', '878'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enemies/minos-prime',
                component: ComponentCreator('/enemies/minos-prime', '14a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enemies/sisyphus-prime',
                component: ComponentCreator('/enemies/sisyphus-prime', '12e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enemies/something-wicked',
                component: ComponentCreator('/enemies/something-wicked', '43d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enemies/thr-1000-earthmover',
                component: ComponentCreator('/enemies/thr-1000-earthmover', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/V1/',
                component: ComponentCreator('/V1/', '8a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/versions/',
                component: ComponentCreator('/versions/', 'b8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/weapons/Arms',
                component: ComponentCreator('/weapons/Arms', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/weapons/revolver',
                component: ComponentCreator('/weapons/revolver', 'ea9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'efb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
