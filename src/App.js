import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main"
import SignUp from "./pages/SignUp/SignUp"
import React from 'react';
import ReactDOM from 'react';


function App() {

  return (
  <>
  <Router>
   <Routes>    
      <Route path = '/Main' exact element={<Main />} /> 
      <Route path = '/' exact element={<SignUp />} /> 
   </Routes>
   </Router>

   </>
  );
}



export default App;
