import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import FadeInEntrance from '../../components/fadeInEntrance';
import { OwnProps, ReduxConnectedProps } from './index';

// #region types
export type Props = RouteComponentProps & ReduxConnectedProps & OwnProps;
// #endregion

function Art() {
  return (
    <FadeInEntrance>
      <h1>Engineering</h1>
    </FadeInEntrance>
  );
}

Art.displayName = 'Art';

export default withRouter(Art);
