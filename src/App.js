import React, { Fragment } from 'react';
import './App.css';
import { ClientTemplate } from './Templates/Client/ClientTemplate';
import { AdminTemplate } from './Templates/Admin/AdminTemplate';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer/Footer';
import Home from './Screens/Home/Home';
import SignIn from './Screens/SignIn/SignIn';
import SignUp from './Screens/SignUp/SignUp';
import Course from './Screens/Courses/Courses';
import AdminCourse from './Screens/Admin/AdCourse/Adcourse';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Router, Route, Switch, withRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <ClientTemplate exact path='/home' component={Home} />
        <ClientTemplate exact path='/signin' component={SignIn} />
        <ClientTemplate exact path='/signup' component={SignUp} />
        <ClientTemplate exact path='/course' component={Course} />
        <ClientTemplate exact path='/' component={Home} />
      </Switch>
      <Footer />
      {/* <Fragment>
        <Router>
          <Switch>
            <Route exact path='/AdCourse' component={AdminCourse} />
          </Switch>
        </Router>
      </Fragment> */}
      <Router>
        <Switch>
          <AdminTemplate exact path='/AdCourse' component={AdminCourse} />
        </Switch>
      </Router>

    </BrowserRouter>

  );
}

export default App;
