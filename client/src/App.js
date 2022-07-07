import React from 'react';

import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import './App.css';
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/chat" element={<Chat></Chat>}/>
        <Route exact path="/" element={<Join></Join>}/>
        </Routes>
          
        
      </Router>
    </div>
  );
}

export default App;
