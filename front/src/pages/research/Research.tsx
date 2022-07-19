import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import FadeInEntrance from '../../components/fadeInEntrance';
import { OwnProps, ReduxConnectedProps } from './index';
import { Experience } from '../../components/Experience';
import { research } from '../../data/research'; 

import 'bootstrap-icons/font/bootstrap-icons.css';

// #region types
export type Props = RouteComponentProps & ReduxConnectedProps & OwnProps;
// #endregion

function Research() {
  return (
    <FadeInEntrance>
      <Experience
        data={research}
      />
    </FadeInEntrance>
  );
}

Research.displayName = 'About';

export default withRouter(Research);
