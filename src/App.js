import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./profile";
import img from "./profile.png";


function App() {
  let person={

    photo: img,
  
    Name:{firstName:"abir", lastName:"khiari"},
  
    profileLink:"https://www.google.fr"}
  
  
   return (<div>
     <Profile person={person} />
   </div>
    
  )
}

export default App;
