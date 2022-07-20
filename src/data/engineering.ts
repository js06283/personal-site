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
    resumedetails: ['Develop a portal with geospatial data visualization in table and map format for internal analysis to compare geographic features. ',
    'Frontend web development with Typescript, React, and Redux. ',],
    description: [
      
    ],
    logos: [bing_maps, microsoft],
    tech: ['npm', 'react', 'vscode', 'typescript', 'csharp', 'html5', 'css3'],
    icon: 'bi bi-microsoft',
  },
  census: {
    name: 'Census Bureau',
    position: 'Software Engineer Intern',
    location: 'Remote',
    time: 'June 2022-September 2021',
    resumedetails: [
      'Developed an automated production system for statistical products for criminal justice agencies that provide data to the Criminal Justice Administrative Records System (CJARS) with an emphasis on privacy and disclosure considerations. Full-stack web development in Python, Django, HTML, SQL, Markdown and worked with a complex relational database.',
      'Engaged in the civic tech community through virtual site visits, one-on-one mentorship, and professional development. ',
    ],
    description: [],
    logos: [census, cdf, cjars],
    tech: [],
    icon: 'bi bi-graph-up-arrow',
  },
};
