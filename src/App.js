import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Home/HomePage';
import LoginForm from './components/Login/LoginForm';
import LogOut from './components/Login/LogOut';
import ResetPassword from './components/Login/ResetPassword';
import SignUpForm from './components/Login/SignUpForm';
import Favorites from './components/Profile/Favorites';
import Profile from './components/Profile/Profile';
import Listings from './components/Listings/Listings';
import SendMessage from './components/Profile/SendMessage';

function App() {
  const [favoriteList, setFavoriteList] = useState(['Property One', 'Property Two']);

  const addToFavoriteList = listing => {
    const present = favoriteList.find(el => el.title === listing.title)
    if (!present) {
      setFavoriteList( [...favoriteList, listing] );
    } 
  };

  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/listings' component={Listings} />
      <Route path='/login' component={LoginForm} />
      <Route path='/logout' component={LogOut} />
      <Route path='/profile' component={Profile} />
      <Route path='/sendmessage' component={SendMessage} />
      <Route path='/signup' component={SignUpForm} />
      <Route path='/favorites' render={props => <Favorites {...props} addToFavoriteList={addToFavoriteList} favoriteList={favoriteList} />} />
    </Switch>
    </>
  );
}

export default App;