import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  submitDataHandler = event => {
    this.props.createEvent(this.state);
  };

  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { cancelEventForm } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.submitDataHandler} autoComplete="off">
          <Form.Field>
            <label>Event Title</label>
            <input
              placeholder="First Name"
              onChange={this.onChangeHandler}
              value={title}
              name="title"
            />
          </Form.Field>
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
          <Button type="button" onClick={cancelEventForm}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
