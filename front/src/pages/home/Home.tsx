import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import FadeInEntrance from '../../components/fadeInEntrance';
import HomeInfo from './styled/HomeInfo';
import MainTitle from './styled/MainTitle';
import { ReduxConnectedProps, OwnProps } from './index';
import {
  CodeSquare,
  ClipboardData,
  FileEarmarkPerson,
  Camera,
} from 'react-bootstrap-icons';
import { Media } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import Ripples from 'react-ripples';

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
                  I'm a junior at Columbia studying Operations Research and
                  minoring in Economics and Computer Science. I've worked as a
                  software engineer at the US Census Bureau and Microsoft, and
                  I've been involved in research at Columbia University and the
                  Mailman School of Public Health.
                </p>
                <br></br>
                <p>
                  I'm interested in pursuing a graduate degree in Operations
                  Research or working in the tech or finance space. Currently,
                  I'm looking for opportunities for Summer 2023.
                </p>
                <div className="dflex flex-row">
                  <Link
                    className="btn btn-dark btn-lg mr-2"
                    to={'/jessica-shi/engineering'}
                  >
                    <CodeSquare />
                    &nbsp; Engineering
                  </Link>

                  <Link
                    className="btn btn-dark btn-lg"
                    to={'/jessica-shi/research'}
                  >
                    <ClipboardData />
                    &nbsp; Research
                  </Link>
                </div>
                <div className="dflex flex-row mt-2">
                  <Link
                    className="btn btn-dark btn-lg mr-2"
                    to={'/jessica-shi/resume'}
                  >
                    <FileEarmarkPerson />
                    &nbsp; Resume
                  </Link>

                  <Link className="btn btn-dark btn-lg" to={'/jessica-shi/art'}>
                    <Camera />
                    &nbsp; Art
                  </Link>
                </div>
                <div className="dflex flex-row mt-2">
                  <SocialIcon
                    url="https://www.instagram.com/jessica_shii/"
                    className="mr-2"
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/in/jessicashi605/"
                    className="mr-2"
                  />
                  <SocialIcon url="https://github.com/js06283" />
                </div>
              </div>
              <div className="col">
                <Media
                  object
                  src={headshot}
                  alt="headshot"
                  style={{ width: '75%' }}
                />
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
