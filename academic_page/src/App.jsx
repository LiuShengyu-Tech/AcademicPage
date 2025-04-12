import React, { useState, useEffect } from 'react';
import cvphoto from './assets/cv_photo.png'
import LogoLink from './components/LogoLink'
import ReactMarkdown from 'react-markdown';
import './App.css'

import campus_map from './assets/icons/campus_map.svg'
import location from './assets/icons/location.svg'
import email from './assets/icons/email.svg'
import phone from './assets/icons/phone.svg'  
import linkin from './assets/icons/linkin.svg'
import portfolio from './assets/icons/portfolio.svg'

function App() {
 
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch('markdown/file.md')
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);




  return (

    <div className="container">
    <div className="leftColumn">
      <img src={cvphoto} className="logo react" alt="React logo" />
      <h2 style={{margin:0}}>Shengyu Liu</h2>
      <h3 style={{margin:0,color:"grey"}}>刘 胜禹</h3>
      <p>
        Ph.D. Candidate, University of Twente | Faculty of Engineering Technology<br />
        Dept. of Design, Production & Management | Manufacturing Systems  
      </p>

      <div className="logoLinkWrapper">
        <div className="logoLinkInner">
          <LogoLink logo={location} text="Enschede, The Netherlands" />
          <LogoLink logo={email} text="Email" url="mailto:s.liu-4@utwente.nl" />
          <LogoLink logo={linkin} text="LinkedIn" url="https://www.linkedin.com/in/shengyu-liu-038502195/" />
          <LogoLink logo={portfolio} text="Portfolio" url="https://issuu.com/shengyuliu/docs/liushengyu_portfolio_2022_33mb_" />
        </div>
      </div>
    </div>

    <div className="rightColumn">
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  </div>
)
}


export default App
