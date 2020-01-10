import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";
import { connect } from "react-redux";

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events } = this.props;

    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList events={events} deleteEvent={this.handleDeleteEvent} />
          </Grid.Column>
          <Grid.Column width={6}>
            <h2>Activities feed</h2>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = {
  createEvent,
  updateEvent,
  deleteEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
