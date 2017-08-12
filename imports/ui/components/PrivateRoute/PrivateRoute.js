import React from 'react';
import { connect } from 'react-redux';
import {
    Route,
    Redirect
} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            (Meteor.userId())
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
        )}
    />
);

export default PrivateRoute;
