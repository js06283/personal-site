import React from 'react';
import { Button } from 'reactstrap';
import { Media } from 'reactstrap/lib';

export interface expProps {
  name: string;
  position: string;
  location: string;
  time: string;
  resumedetails: string[];
  description: string[];
  logos: string[];
  tech: string[];
  icon: string;
}

const techLogo: { [key: string]:string} = {
  'npm': 'devicon-npm-original-wordmark colored',
  'react': 'devicon-react-original-wordmark colored',
  'vscode': "devicon-vscode-plain-wordmark colored", 
  'typescript': "devicon-typescript-plain colored",
  'csharp': "devicon-csharp-plain-wordmark colored",
  'html5': "devicon-html5-plain-wordmark colored",
  'css3': "devicon-css3-plain-wordmark colored"
}

function getDetails(resumedetails: string[], details: string[]) {
  let detailList: JSX.Element[] = []; 
  const alldetails = resumedetails.concat(details);
  if (alldetails) {
    alldetails.forEach(e => {
      detailList.push(
        <li>{e}</li>
      )
    })
  }
  return detailList; 
};

function getLogos(logos: string[] | undefined) {
  let logoList: JSX.Element[] = [];
  if (logos) {
    logos.forEach(logo => {
      
      logoList.push(
        <Media object src={logo} alt="logo" style={{ width: '15%', borderRadius: '10%', margin: '10px'}} />
      )
    })
  }
  return logoList; 
}

function getTech(tech: string[] | undefined) {
  let techList: JSX.Element[] = [];
  if (tech) {
    tech.forEach(t => {
      techList.push(
        <i className={techLogo[t]} style={{
          fontSize: '40px', margin: '10px'
       }} />
        
      )
    })
  }
  return techList; 
}

function getExp(i: string, data: { [key: string]: expProps }) {
  if (i in data) {
    var e:expProps = data[i];
    return(
      <div>
        <h1>{e.name}</h1>
        <h2>{e.position}</h2>
        <div style={{fontSize: '20px', fontStyle: 'italic'}}>{e.location}</div>
        <div style={{fontSize:'17px', fontStyle: 'italic'}}>{e.time}</div>
        <ul>
          {getDetails(e.resumedetails, e.description)}
        </ul>
        <div className='dflex flex-row'> 
          {getLogos(e.logos)}
        </div>
        <div>
          {getTech(e.tech)}
        </div>
        <p></p>
      </div>
    )
  }
  return <div></div>; 
}

interface ExperienceProps{
  data: {[key:string]: expProps},
}

export const Experience = ({ data }: ExperienceProps) => {
  
  var [expComp, setExpComp] = React.useState(Object.keys(data) ? getExp(Object.keys(data)[0],data) : undefined); 
  var buttonList: JSX.Element[] = [];
  Object.keys(data).forEach(e => {
    var exp = data[e]; 
    buttonList.push(
      <Button color="dark" size="md" onClick={() => setExpComp(getExp(e, data))} block>
        <i className={exp.icon}></i>
        &nbsp; {exp.name}
      </Button>
    )
  })

  return (
    <React.Fragment> 
      <div className="container" >
        <div className="row">
          <div className="col-lg-auto" style={{marginTop: '20px'}}>
            {buttonList}
          </div>
          <div className="col" style={{ margin: '10px', border: '1px solid', padding: '10px', borderRadius: '5%' }}>
              {expComp}
          </div>
        </div>
      </div> 
    </React.Fragment>
  )
}
