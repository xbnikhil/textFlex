
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:  message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'light'){ 
      setMode('dark')
      document.body.style.backgroundColor = '#373b3e';  
      document.body.style.color = 'black';
      showAlert("Dark Mode has been enabled", "success");

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }

  }

  return (
    // if you want to add multiple tags inside a JSX you have to use following empty tag
    <> 
      {/* below is the example of props. i.e. properties  */}
      <Router>
      <Navbar title="TextFLex" aboutText = 'About Us' mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
        {/* components/home --> component 1
            components/home/user --> component 2  */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">   
            <TextForm showAlert={showAlert} Heading="Enter text here to Convert" mode={mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}
export default App;
 