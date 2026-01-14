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
    component: ComponentCreator('/', 'b23'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '4cf'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '6ef'),
            routes: [
              {
                path: '/easter-eggs/Secret-levels',
                component: ComponentCreator('/easter-eggs/Secret-levels', '807'),
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
