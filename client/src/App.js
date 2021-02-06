import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Activate from './pages/Activate';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Subscribe from './pages/Subscribe';
import Shop from './pages/Shop';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Blog from './pages/Blog';
import Readnore from './components/Readmore';
import Category from './components/Category';
import Authors from './pages/Authors';
import Profile from './components/Profile';
import Suggestions from './pages/Suggestions';
import PostSuggestion from './pages/PostSuggestion';
import Account from './pages/Account';
import ReadSuggestion from './components/ReadSuggestion';

import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import store from './redux/store';

import Layout from './components/Layout';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/reset_password' component={ResetPassword} />
          <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
          <Route exact path='/activate/:uid/:token' component={Activate} />
          <Route exact path='/cancel' component={Cancel} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/authors' component={Authors} />
          <PrivateRoute exact path='/account' component={Account} />
          <PrivateRoute exact path='/subscribe' component={Subscribe} />
          <PrivateRoute exact path='/shop' component={Shop} />
          <PrivateRoute exact path='/blog/:id' component={Readnore} />
          <PrivateRoute exact path='/suggestions/:id' component={ReadSuggestion} />
          <Route exact path='/category/:id' component={Category} />
          <PrivateRoute exact path='/authors/:id' component={Profile} />
          <PrivateRoute exact path='/suggestions' component={Suggestions} />
          <PrivateRoute exact path='/suggest' component={PostSuggestion} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
