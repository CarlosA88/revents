import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import eventsFromDashboard from '../../../api/eventsFromDashboard';
import cuid from 'cuid';

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false,
    selectedEvent: null
  };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';

    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpen: false
    }));
  };

  handleSelectedEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleUpdateEvent = updEvent => {
    this.setState(({ events }) => ({
      events: events.map(event => {
        if (event.id === updEvent.id) {
          return { ...updEvent };
        } else {
          return event;
        }
      }),
      isOpen: false
    }));
  };

  handleDeleteEvent = id => {
    this.setState(({ events }) => ({
      events: events.filter(event => event.id !== id)
    }));
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;

    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList
              events={events}
              selectedEvent={this.handleSelectedEvent}
              deleteEvent={this.handleDeleteEvent}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              positive
              content="Create Event"
              onClick={this.handleCreateFormOpen}
            />
            {isOpen && (
              <EventForm
                key={selectedEvent ? selectedEvent.id : 0}
                cancelEventForm={this.handleFormCancel}
                createEvent={this.handleCreateEvent}
                selectedEvent={selectedEvent}
                updateEvent={this.handleUpdateEvent}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
