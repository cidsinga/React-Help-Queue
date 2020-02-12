import React from "react";
import { Link } from 'react-router-dom';
function Header(){
  return (
    <div>
    <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    <h1> Help Queue! </h1>
    <hr/>
    </div>
  );
}

export default Header;
