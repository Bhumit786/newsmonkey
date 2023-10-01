import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = ()=>{
  const [progress, setProgress] = useState(0)
  const [apikey] = useState(process.env.REACT_APP_API_KEY)
    return (
      <>
        <Router>
          <div>
            <Navbar />
            <div>
              <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
              />
            </div>
            <Routes>
              <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country="in" category="general" />} />
              <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} pageSize={5} country="in" category="entertainment" />} />
              <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={5} country="in" category="business" />} />
              <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={5} country="in" category="sports" />} />
              <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={5} country="in" category="health" />} />
              <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={5} country="in" category="science" />} />
              <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={5} country="in" category="technology" />} />
              <Route exact path='/general' element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={5} country="in" category="general" />} />

            </Routes>
          </div>
        </Router>
      </>
    )
  }

  export default App;
