import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Axios from 'axios';
import Cookies from 'js-cookie';
import registerServiceWorker from './registerServiceWorker';
import App from './pages/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import reducers from './reducers/index';
import authGuard from './components/HOCs/authGuard';
ReactDOM.render(
    <Provider store={createStore(reducers, {
        auth: {
            token: Cookies.get('jwt'),
            isAuthenticated: Cookies.get('jwt') ? true : false
        }
    }, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <App >

                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/SignIn" component={SignIn} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
//...
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();