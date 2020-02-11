import React from "react";
import './App.css'
import Header from "./Header";
import TicketList from "./TicketList"
import Footer from "./Footer"


function App(){
  var allStyle = {
    backgroundColor: '#13B7FF',
    fontFamily: "'Nosifer', cursive",
    color: '#BD0000',
    textAlign: 'center'
 }
  return (
    <div style={allStyle}>
      <Header/>
      <TicketList/>
      <Footer/>

    </div>
  );
}

export default App;
