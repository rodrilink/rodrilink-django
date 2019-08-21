import React from "react";
import Home from './Home';
import Header from './Header';
// import Resume from './Resume';
import Footer from './Footer';
import Contacts from './Contacts';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contacts" component={Contacts} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default App;