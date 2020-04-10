import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateEvent, createEvent } from "./../eventActions";
import cuid from "cuid";
import { reduxForm, Field } from "redux-form";

class EventForm extends Component {
  state = { ...this.props.event };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      });
    }
  }

  submitDataHandler = event => {
    event.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { title, date, city, venue, hostedBy } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.submitDataHandler} autoComplete="off">
          {/* <Form.Field>
            <label>Event Title</label>
            <input
              placeholder="First Name"
              onChange={this.onChangeHandler}
              value={title}
              name="title"
            />
          </Form.Field> */}
          <label>Event Title</label>
          <Field name="title" component="input" placeholder="Event Title" />

          <Form.Field>
            <label>Event Date</label>
            <input
              type="date"
              placeholder="Event Date"
              onChange={this.onChangeHandler}
              value={date}
              name="date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="City event is taking place"
              onChange={this.onChangeHandler}
              value={city}
              name="city"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              placeholder="Enter the Venue of the event"
              onChange={this.onChangeHandler}
              value={venue}
              name="venue"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              placeholder="Enter the name of person hosting"
              onChange={this.onChangeHandler}
              value={hostedBy}
              name="hostedBy"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={this.props.history.goBack}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = { title: "", date: "", city: "", venue: "", hostedBy: "" };
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event
  };
};

const mapDispatchToProps = {
  updateEvent,
  createEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "eventForm" })(EventForm));
