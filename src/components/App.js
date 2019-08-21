import React from "react";
import ReactDOM from "react-dom";
import Home from './Home';
import Header from './Header';
// import Resume from './Resume';
import Footer from './Footer';
import Contacts from './Contacts';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/contacts" component={Contacts} />
            <Footer />
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));