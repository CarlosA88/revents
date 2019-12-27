import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SingedInMenu from './menus/SingedInMenu';
import SingedOutMenu from './menus/SingedOutMenu';

class Navbar extends Component {
  state = {
    Auth: false
  };

  handleSingIn = () => this.setState({ Auth: true });
  handleSingOut = () => {
    this.setState({ Auth: false });
    this.props.history.push('/events');
  };

  render() {
    const { Auth } = this.state;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='/assets/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item name='Events' as={NavLink} to='/events' />
          <Menu.Item name='People' as={NavLink} to='/people' />
          <Menu.Item>
            <Button
              as={Link}
              to='createEvent'
              floated='right'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
          {Auth ? (
            <SingedInMenu singOut={this.handleSingOut} />
          ) : (
            <SingedOutMenu singIn={this.handleSingIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(Navbar);
