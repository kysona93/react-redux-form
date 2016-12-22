import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./app/components/app";
import Home from './app/components/home/home';
import NotFound from './app/components/commons/NotFound';
import UserSignin from './app/components/signin/user_signin';
import ForgetPassword from './app/components/signin/component/forget_password';
import SetNewPassword from './app/components/signin/component/set_new_password';

const router = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="/">
            <IndexRoute component={Home} />
            <Route path="app" component={App} />
            <Route path="/signin" component={UserSignin} />
            <Route path="/forget-password" component={ForgetPassword} />
            <Route path="/set-new-password" component={SetNewPassword} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

export { router };