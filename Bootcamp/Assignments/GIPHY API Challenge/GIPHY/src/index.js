import React from 'react';
import ReactDOM from 'react-dom';
// import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
// import Trending from './Trending';
// import Random from './Random';
// import Regular from './Regular';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
const giphysearch = (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Regular">Search</Link></li>
                <li><Link to="/Trending">Trending</Link></li>
                <li><Link to="/Random">Random</Link></li>
            </ul>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Regular" component={Regular} />
            <Route path="/Trending" component={Trending} />
            <Route path="/Random" component={Random} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(giphysearch, document.getElementById('root'));

*/