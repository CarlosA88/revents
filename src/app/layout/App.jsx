import React, { Component } from "react";
import EventDashboard from "../../features/event/eventDashboard/eventDashboard";
import Navbar from "../../features/nav/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Re-vents</h1>
          <Navbar />
          <EventDashboard />

        </div>
      </div>
    );
  }
}

export default App;
