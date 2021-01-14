import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Router,Switch } from 'react-router-dom';
import history from '../../history';
import Home from '../pages/Home/Home';
import ContactUs from '../pages/ContactUs/ContactUs';
import Fans from '../pages/Fans/Fans';
import DanceClass from '../pages/DanceClass/DanceClass';
import EventsWorkshops from '../pages/EventsWorkshops/EventsWorkshops';
import Collaborations from '../pages/Collaborations/Collaborations';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import About from '../pages/About/About';
import AdminLogin from '../pages/AdminLogin/AdminLogin';
import withAuth from '../commonComponent/Auth/Auth';

class Routes extends Component {
  constructor(props) {
    super(props);
  
  }

  
  render() {
    return (
      <>
      {/* socialMedia */}
        {/* <RoutesContainer headerHeight={this.state.changedHeaderHeight}> */}
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/contactUs' component={ContactUs} />
              <Route exact path='/fans' component={Fans} />
              <Route exact path='/danceClass' component={DanceClass} />
              <Route exact path='/eventsWorkshops' component={EventsWorkshops} />
              <Route exact path='/collaborations' component={Collaborations} />
              <Route exact path='/socialMedia' component={Collaborations} />
              <Route exact path='/about' component={About} />
              <Route exact path='/adminLogin' component={AdminLogin} />
              {/* <Route exact path='/adminDashBoard' component={withAuth(ContactUs)} /> */}
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        {/* </RoutesContainer> */}
      </>
    );
  }
}

export default Routes;
