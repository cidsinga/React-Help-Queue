import React from "react";
import Ticket from "./Ticket"

var masterTicketList = [
  {
    names: "Casey & Tyler" ,
    location: "7B",
    issue: "all your bases are belong to me"
  },
  {
    names: 'Thanos & Gamorrah',
    location: '3A',
    issue: 'The Avengers'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying'
  },
]


function TicketList(){
  var listStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  }
  return (
      <div style={listStyle}>

        {masterTicketList.map((ticket, index) =>
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue} />
        )}
      </div>
    );
  }

  export default TicketList;
