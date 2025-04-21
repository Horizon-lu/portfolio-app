
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-H7BDN2UZ.js",
      "chunk-ZFTJAQFJ.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H7BDN2UZ.js",
      "chunk-ZFTJAQFJ.js",
      "chunk-255RN5MD.js"
    ],
    "route": "/me"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H7BDN2UZ.js",
      "chunk-ZFTJAQFJ.js",
      "chunk-ZWVDLEJM.js"
    ],
    "route": "/skills"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 13784, hash: 'a2b2487670439ec9015925fe4639b111a0836da838e31895bf3bc1b0861c69b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6236, hash: 'd16e17bda18cd36068c90913d851e1ecb49aa06ddb2550d133cca99ecd9e9794', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'me/index.html': {size: 22284, hash: '585f6a30a8d6dbc822d898c10ec951162ba82f6ce7601893101cf3af082cfec8', text: () => import('./assets-chunks/me_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 25616, hash: 'a8a404c58b2b8e6bd1b6deb76c8638b4e630ea1dadcdae97f6ce99381005db6c', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 52215, hash: '9734e845a6cd2eabe6d529bb5923a3cf597701fa4dc895ec58919405411e5d18', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WTPLW6CG.css': {size: 17667, hash: 'AqHilgNnmXY', text: () => import('./assets-chunks/styles-WTPLW6CG_css.mjs').then(m => m.default)}
  },
};
