import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import eventsFromDashboard from "../../../api/eventsFromDashboard";
import cuid from "cuid";

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false
  };

  openFormHandler = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  handleCreateEvent = newEvent => {
    debugger;
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpen: false
    }));
  };

  render() {
    const { events, isOpen } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList events={events} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              positive
              content="Create Event"
              onClick={this.openFormHandler}
            />
            {isOpen && (
              <EventForm
                cancelEventForm={this.openFormHandler}
                createEvent={this.handleCreateEvent}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
