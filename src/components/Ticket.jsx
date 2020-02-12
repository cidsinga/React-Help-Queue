import React from "react";
import PropTypes from "prop-types";


function Ticket(props){
  var ticketStyle = {
    textAlign: 'right',
    textDecoration: 'underline',
  }
  return (
    <div style={ticketStyle}>
    <h3>{props.location} - {props.names}</h3>
    <p><em>{props.issue}</em></p>
    <hr/>
    </div>

  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string

};


export default Ticket;
