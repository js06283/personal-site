import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import FadeInEntrance from '../../components/fadeInEntrance';
import { OwnProps, ReduxConnectedProps } from './index';
import { Experience } from '../../components/Experience';
import { engineering } from '../../data/engineering'; 
import { Button } from 'reactstrap'; 

import 'bootstrap-icons/font/bootstrap-icons.css';


// #region types
export type Props = RouteComponentProps & ReduxConnectedProps & OwnProps;
// #endregion


function Engineering() {
  
  return (
    <FadeInEntrance>
      <Experience
        data={engineering} />
    </FadeInEntrance>
  );
}

Engineering.displayName = 'Engineering';

export default withRouter(Engineering);
