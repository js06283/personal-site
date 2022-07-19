export type Link = {
  label: string;
  link: string;
  view?: string;
  isRouteBtn?: boolean;
};

export type Navigation = {
  brand: string;
  leftLinks: Array<Link>;
  rightLinks: Array<Link>;
};
// #endregion

const navigation = Object.freeze({
  brand: 'Jessica Shi',
  leftLinks: [],
  rightLinks: [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Resume',
      link: '/resume',
      view: 'resume',
      isRouteBtn: true,
    },
    {
      label: 'Engineering',
      link: '/engineering',
      view: 'engineering',
      isRouteBtn: true,
    },
    {
      label: 'Research',
      link: '/research',
      view: 'research',
      isRouteBtn: true,
    },
    {
      label: 'Art',
      link: '/art',
      view: 'art',
      isRouteBtn: true,
    },
  ],
});

export default navigation;
