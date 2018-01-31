import React, { PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App'
import App from './components/home/HomePage'
import App from './components/about/AboutPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage}>
    </Route>
);