import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import City from './city';
// import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
// import NotFound from './NotFound';
// import * as serviceWorker from './serviceWorker';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<City />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
const citysearch = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/city">Users</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/city" component={City}/>
                <Route component={NotFound} />
            </Switch>
        </div>
        
    </Router>
    
    )


ReactDOM.render(citysearch, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

*/