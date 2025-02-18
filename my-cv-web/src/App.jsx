import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (

  
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div style={{ width: '200px',textAlign: 'left'  }}>
        <div>
        
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h2>Shengyu Liu</h2>
        <h2>刘 胜禹</h2>

        <div className="card">
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      <div  style={{ flex: 1 }}>
        <h1>My CV</h1>
        <h2>Introduction</h2>
        
        <p>
           Random info: I am a software engineer with 10 years of experience in web development.   

        </p>
      </div>




    </div>
    
  )
}

export default App
