import cvphoto from './assets/cv_photo.jpg'
import './App.css'

function App() {
 
  return (

  
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div style={{ width: '500px',textAlign: 'center'  }}>
        
        <div>
        
            <img src={cvphoto} className="logo react" alt="React logo" />
 
        </div>
        <h2 style={{margin:0}}>Shengyu Liu</h2>
        <h3 style={{margin:0,color:"grey"}}>刘 胜禹</h3>

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
