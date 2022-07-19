import loadable from 'loadable-components';

export const Home = loadable(() => import('../pages/home'), {
  modules: ['home'],
});
export const Engineering = loadable(() => import('../pages/engineering'), {
  modules: ['engineering'],
});
export const Research = loadable(() => import('../pages/research'), {
  modules: ['research'],
});
export const PageNotFound = loadable(() => import('../pages/pageNotFound'), {
  modules: ['pageNotFound'],
});
export const Art = loadable(() => import('../pages/art'), {
  modules: ['art'],
});
export const Resume = loadable(() => import('../pages/resume'), {
  modules: ['resume'],
});

