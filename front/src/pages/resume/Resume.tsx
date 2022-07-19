import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import FadeInEntrance from '../../components/fadeInEntrance';
import { OwnProps, ReduxConnectedProps } from '.';
import { education } from '../../data/resume'

// #region types
export type Props = RouteComponentProps & ReduxConnectedProps & OwnProps;
// #endregion

function getDetails(details: string[]) {
  let detailList: JSX.Element[] = []; 
  details.forEach(e => {
    detailList.push(
      <li>{e}</li>
    )
  })
  return detailList; 
}

let eduList: JSX.Element[] =[];
education.forEach(e=>{
  eduList.push(
    <div>
      <h1>{e.schoolName}</h1>
      <h2>{e.info}</h2>
      <ul>
        {getDetails(e.details)}
      </ul>
      <p></p>
    </div>
  )
})

function Resume() {
  return (
    <FadeInEntrance>
        <ul>
          {eduList}
        </ul>
    </FadeInEntrance>
  );
}

Resume.displayName = 'Resume';

export default withRouter(Resume);
