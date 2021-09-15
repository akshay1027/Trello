import React, { useState, useEffect, Suspense, lazy } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
    Box, LinearProgress,
    createStyles, makeStyles,
    Theme
} from '@material-ui/core';

import setAuthHeader from './utils/authHeader';
// import individualBoard from './screens/individualBoard';

const HomeScreen = lazy(() => import('./screens/homeScreen'));
const SignUpScreen = lazy(() => import('./screens/signUpScreen'));
const SignInScreen = lazy(() => import('./screens/signInscreen'));
const AllBoardsScreen = lazy(() => import('./screens/allBoardsScreen'));
const IndividualBoard = lazy(() => import('./screens/individualBoard'));

// if (localStorage.trelloToken) {
//     setAuthHeader(localStorage.trelloToken);
// }

const App = () => {
    useEffect(() => {
        if (localStorage.getItem('trelloToken')) {
            setAuthHeader(localStorage.getItem('trelloToken'));
        }
    });
    return (
        <Router>
            <Switch>
                <Suspense fallback={<LinearProgress />}>
                    <Route exact path='/' component={HomeScreen} />
                    <Route path='/register' component={SignUpScreen} />
                    <Route path='/login' component={SignInScreen} />
                    <Route path='/boards' component={AllBoardsScreen} />
                    <Route exact path='/board/:boardId' component={IndividualBoard} />
                </Suspense>
            </Switch>
        </Router>
    );
};

export default App;
