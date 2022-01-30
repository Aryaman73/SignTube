import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from "./pages/Main/Main"
import SignUp from "./pages/SignUp/SignUp"
import React from 'react';
import ReactDOM from 'react';


function App() {

  return (
  <>
   <Router>    
      <Route path = '/Main' exact component = {Main} /> 
      <Route path = '/' exact component = {SignUp} /> 
   </Router>

   </>
  );
}



export default App;
