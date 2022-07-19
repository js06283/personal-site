import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import FadeInEntrance from '../../components/fadeInEntrance';
import { OwnProps, ReduxConnectedProps } from '.';
import { education } from '../../data/resume';
import { engineering } from '../../data/engineering';
import { research } from '../../data/research';
// #region types
export type Props = RouteComponentProps & ReduxConnectedProps & OwnProps;
// #endregion

const styles = {
  title: {
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '25px',
  },
  company: {
    fontSize: '20px',
  },
  place: {
    fontStyle: 'italic'
  },
};

function getDetails(details: string[]) {
  let detailList: JSX.Element[] = [];
  details.forEach((e) => {
    detailList.push(<li>{e}</li>);
  });
  return detailList;
}

function getCoursework(coursework: { category: string, courses: string[] }[]) {
  let courseList: JSX.Element[] = [];
  coursework.forEach((e) => {
    courseList.push(<li>{e.category}</li>)
    // let nestedList: JSX.Element[] = [];
    // e.courses.forEach((c) => {
    //   nestedList.push({c})
    // })
    courseList.push(
      <div >
        {e.courses.join(', ')}
      </div>
    )
  })
  return(courseList)
}

let eduList: JSX.Element[] = [];
education.forEach((e) => {
  eduList.push(
    <div>
      <div style={styles.company}>{e.schoolName}</div>
      <div style={styles.place}>{e.info}</div>
      <ul>{getDetails(e.details)}</ul>
      <ul>{getCoursework(e.coursework)}</ul>
    </div>,
  );
});

let engList: JSX.Element[] = [];
Object.keys(engineering).forEach((e) => {
  var exp = engineering[e];
  engList.push(
    <div>
      <div style={styles.company}>{exp.name}</div>
      <div style={styles.place}>{exp.location}</div>
      <ul>{getDetails(exp.resumedetails)}</ul>
      <p></p>
    </div>,
  );
});

let researchList: JSX.Element[] = [];
Object.keys(research).forEach((e) => {
  var exp = research[e];
  researchList.push(
    <div>
      <div style={styles.company}>{exp.name}</div>
      <div style={styles.place}>{exp.location}</div>
      <ul>{getDetails(exp.resumedetails)}</ul>
      <p></p>
    </div>,
  );
});

function Resume() {
  return (
    <FadeInEntrance>
      <br />
      <h1 style={{textAlign: 'center'}}>Resume</h1>
      <div className={'container'} style={{}}>
      <div style={styles.subtitle}>Education</div>
        <ul>{eduList}</ul>
        <div style={styles.subtitle}>Engineering</div>
        <ul>{engList}</ul>
        <div style={styles.subtitle}>Research</div>
        <ul>{researchList}</ul>
      </div>
    </FadeInEntrance>
  );
}

Resume.displayName = 'Resume';

export default withRouter(Resume);
