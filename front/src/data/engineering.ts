import { expProps } from '../components/Experience';

const bing_maps = require('../../../assets/bing_maps.png');
const microsoft = require('../../../assets/microsoft.png');
const cdf = require('../../../assets/cdf.png');
const census = require('../../../assets/census.png');
const cjars = require('../../../assets/cjars.png');

export const engineering: { [key: string]: expProps } = {
  micro: {
    name: 'Microsoft',
    position: 'Software Engineer Intern',
    location: 'Bellevue, Washington',
    time: 'May 2022-Aug 2022',
    resumedetails: ['resume'],
    description: ['engineer', 'software'],
    logos: [bing_maps, microsoft],
    tech: [
      'npm','react','vscode','typescript','csharp','html5','css3'
    ],
    icon: 'bi bi-microsoft',
  },
  census: {
    name: 'Census Bureau',
    position: 'Software Engineer Intern',
    location: 'Remote',
    time: 'June 2022-September 2021',
    resumedetails: ['resume'],
    description: ['engineer', 'software'],
    logos: [census, cdf, cjars],
    tech: [],
    icon: 'bi bi-graph-up-arrow',
  },
};
