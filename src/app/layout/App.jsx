import React, { Component, Fragment } from 'react';
import Navbar from '../../features/nav/Navbar/Navbar';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import { Route } from 'react-router-dom';
import HomePage from './../../features/event/home/HomePage';
import EventDetailedPage from './../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from './../../features/user/PeopleDashboard/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from './../../features/user/PeopleDashboard/UserDetailed/UserDetailedPage';
import SettingsDashboard from './../../features/user/PeopleDashboard/Settings/SettingsDashboard';
import EventForm from './../../features/event/EventForm/EventForm';
import TestAreaComponent from '../../features/testarea/TestAreaComponent';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <Navbar />

              <Container className='main'>
                {' '}
                <Route path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/people/:id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
                <Route path='/test' component={TestAreaComponent} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
