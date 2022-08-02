import { expProps } from '../components/Experience';

const bing_maps = require('../../../assets/bing_maps.png');
const microsoft = require('../../../assets/microsoft.png');
const cdf = require('../../../assets/cdf.png');
const census = require('../../../assets/census.png');
const cjars = require('../../../assets/cjars.png');
const studbud = require('../../../assets/studbud.png');
const greenup = require('../../../assets/greenup.png');
const covtell = require('../../../assets/covtell.png');

export const engineering: { [key: string]: expProps } = {
  micro: {
    name: 'Microsoft',
    position: 'Software Engineer Intern',
    location: 'Bellevue, Washington',
    time: 'May 2022-Aug 2022',
    resumedetails: [
      'Develop a portal with geospatial data visualization in table and map format for internal analysis to compare geographic features. ',
      'Frontend web development with Typescript, React, and Redux. ',
    ],
    description: [],
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
    tech: ['django', 'python', 'vscode'],
    icon: 'bi bi-graph-up-arrow',
  },
  studbud: {
    name: 'StudBud',
    position: 'Engineering & Co-founder',
    location: 'Remote',
    time: 'August 2020-March 2021',
    resumedetails: [
      'Designed and coded a tool using Wolfram Language and Python that uses a machine learning algorithm to place students into study groups based on study habits and other preferences.',
      'Received 1200+ sign-ups from Columbia students; endorsed by the Engineering Student Council.'
    ],
    description: [],
    logos: [studbud],
    tech: ['django', 'python', 'vscode'],
    icon: 'bi bi-book',
  },
  greenup: {
    name: 'GreenUp',
    position: 'Hackathon lead',
    location: 'Remote',
    time: '04/2020',
    resumedetails: [
      'Created a web-app that calculates a "green-score" for a specified location based on the ratio of green space detected from satellite imagery.',
      'GreenUp Green Space Detector (3rd place overall)'
    ],
    description: [],
    logos: [greenup],
    tech: [],
    icon: 'bi bi-tree'
  },
  covtell: {
    name: 'CovTell',
    position: 'Hackathon lead',
    location: 'Remote',
    time: '04/2020',
    resumedetails: [
      'A voice app made using Voiceflow that pulls the most recent COVID-19 data and tells it to the user based on location.',
      'HACK:NOW (CALHACKS AND MLH): Voiceflow Award, Top 30 Teams'
    ],
    description: [],
    logos: [covtell],
    tech: [],
    icon: 'bi bi-virus2'
  },
  tracov: {
    name: 'TraCov',
    position: 'Hackathon lead',
    location: 'Remote',
    time: '04/2020',
    resumedetails: [
      'A website that calculates an approximate risk score for an individual based on their age, sex, location, and preexisting conditions.',
      'HTHS:HACKS: TraCov: Domain.com Award'
    ],
    description: [],
    logos: [covtell],
    tech: [],
    icon: 'bi bi-virus'
  }
};
