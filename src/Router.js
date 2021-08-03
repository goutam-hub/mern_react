import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './components/Contact';

const Router = () => {
    return(
        <>
            <Header/>
            <Route exact path='/'><Home/></Route>
            <Route path='/about'><About/></Route>
            <Route path='/login'><Login/></Route>
            <Route path='/signup'><SignUp/></Route>
            <Route path='/contact'><Contact/></Route>
        </>
    );
}   

export default Router;