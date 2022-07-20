import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import FadeInEntrance from '../../components/fadeInEntrance';
import HomeInfo from './styled/HomeInfo';
import MainTitle from './styled/MainTitle';
import { ReduxConnectedProps, OwnProps } from './index';
import { CodeSquare, ClipboardData, FileEarmarkPerson, Camera } from 'react-bootstrap-icons';
import { Media } from 'reactstrap';
import Ripples  from 'react-ripples';

// #region  types
export type Props = RouteComponentProps & ReduxConnectedProps & OwnProps;
// #endregion 

const headshot = require('../../../../assets/headshot.png');

function Home() {
  return (
    <FadeInEntrance>
      <Jumbotron>
        <HomeInfo>
          <div className="container">
            <div className="row">
            <div className="col">
                <MainTitle>Jessica Shi</MainTitle>
                <p>
                  I'm a junior at Columbia studying Operations Research and minoring in 
                  Economics and Computer Science. I've worked as a software developer at the 
                  US Census Bureau and Microsoft. 
                </p>
              <div className="dflex flex-row">
                <Link className="btn btn-dark btn-lg mr-2" to={'/engineering'}>
                  <CodeSquare />
                  &nbsp; Engineering
                </Link>

                <Link className="btn btn-dark btn-lg" to={'/research'}>
                  <ClipboardData />
                  &nbsp; Research
                </Link>
                </div> 
                <div className="dflex flex-row mt-2">
                <Link className="btn btn-dark btn-lg mr-2" to={'/resume'}>
                  <FileEarmarkPerson />
                  &nbsp; Resume
                </Link>

                <Link className="btn btn-dark btn-lg" to={'/art'}>
                  <Camera />
                  &nbsp; Art
                </Link>
              </div> 
            </div>
              <div className="col">
          
                  <Media object src={headshot} alt="headshot" style={{ width: '75%' }} />
            
              </div>
            </div>
          </div>
        </HomeInfo>
      </Jumbotron>
    </FadeInEntrance>
  );
}

Home.displayName = 'Home';

export default withRouter(Home);
