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
      link: '/jessica-shi',
    },
    {
      label: 'Resume',
      link: '/jessica-shi/resume',
      view: 'resume',
      isRouteBtn: true,
    },
    {
      label: 'Engineering',
      link: '/jessica-shi/engineering',
      view: 'engineering',
      isRouteBtn: true,
    },
    {
      label: 'Research',
      link: '/jessica-shi/research',
      view: 'research',
      isRouteBtn: true,
    },
    {
      label: 'Art',
      link: '/jessica-shi/art',
      view: 'art',
      isRouteBtn: true,
    },
  ],
});

export default navigation;
