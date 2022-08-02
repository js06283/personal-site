import { expProps } from '../components/Experience';

const grazing = require('../../../assets/grazing.png');
const schelling = require('../../../assets/schelling.png');
const gerrymandering = require('../../../assets/gerrymandering.png');
const antibiotics = require('../../../assets/antibiotics.png');

export const research: { [key: string]: expProps } = {
  mailman: {
    name: 'Urban Crash Risk',
    position:
      'Columbia University Research Assistant, Data Science Institute Scholar ',
    location: 'Mailman School of Public Health',
    time: 'Mar 2022 - Present',
    resumedetails: [
      'Assist Dr. Christopher Morrison on “Urban Design and Children’s Mobility and Crash Risks in US Cities”',
      'Utilize Python, ArcPy, and ArcGIS to extract features and compute network-level measures from OpenStreetMap vector data.',
    ],
    description: [],
    logos: [],
    tech: ['python', 'r'],
    icon: 'bi bi-hospital',
  },
  cris: {
    name: 'CRIS Lab',
    position: 'Columbia University Research Intern ',
    location: 'Remote',
    time: 'January 2021 - September 2021',
    resumedetails: [
      'Constructed mathematical models, programmed large agent-based simulations in NetLogo, and performed data analysis on the Schelling game. Co-author working paper “Statistical Teleodynamics Analysis of Emergent Equilibria in the Schelling Game”',
      'Selected for an oral and poster presentation at the Joint Mathematics Meeting 2022.',
    ],
    description: [],
    logos: [schelling],
    tech: [],
    icon: 'bi bi-people-fill',
  },
  grazing: {
    name: 'Rotational Grazing',
    position: '',
    location: 'Williamsburg, VA',
    time: ' September 2019-January 2020',
    resumedetails: [
      'Agent-based modeling and simulation in NetLogo was used in a computer simulation to show the dynamical change and interaction of  the cows and the grass in different paddock situations and rotation periods over time',
      'Presented at the Williamsburg James-City County Science Fair (1st place Environmental Management), Tidewater Science Fair (special award) and Information Systems Security Association meeting, and Joint Mathematics Meeting 2020 (Denver, CO).',
    ],
    description: [],
    logos: [grazing],
    tech: [],
    icon: 'bi bi-x-diamond',
  },
  gerrymandering: {
    name: 'Gerrymandering',
    position: '',
    location: 'Williamsburg, VA',
    time: ' September 2019-January 2020',
    resumedetails: [
      'Agent-based modeling and simulation in NetLogo was used in a computer simulation to show the dynamical change and interaction of  the cows and the grass in different paddock situations and rotation periods over time',
      'Presented at the Williamsburg James-City County Science Fair (1st place Environmental Management), Tidewater Science Fair (special award) and Information Systems Security Association meeting, and Joint Mathematics Meeting 2020 (Denver, CO).',
    ],
    description: [],
    logos: [gerrymandering],
    tech: [],
    icon: 'bi bi-bank',
  },
  antibiotics: {
    name: 'Antibiotics',
    position: '',
    location: 'Williamsburg, VA',
    time: '09/2019-01/2020',
    resumedetails: [
      'Used Wolfram Language to create a visualization of sequence alignments for easy comparison between several organisms/genes'
    ],
    description: [
      'This project investigates the effect of phage titer and pattern of phage introduction on the elimination of bacteria and biofilm in a controlled environment. A mathematical model of the interaction of phages, bacteria, and biofilm is constructed in NetLogo, a computer programming language for agent-based modeling, and data is pro- duced and analyzed in Wolfram Mathematica. It was concluded that a specific pattern and titer would optimize the elimination of bacteria and biofilm.',
      'Received Staff Pick designation as a featured contributor on Wolfram Community and the Best Newcomer and Honorable Mention for Best Function for the Wolfram Tech Conference Function Sprint',
    ],
    logos: [antibiotics],
    tech: [],
    icon: 'bi bi-virus2',
  },
};
