import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PublicLayout from './Layout/PublicLayout';
import rootReducer from './Component/Reducers/Index';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
  render() {
    return(
      <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" component={PublicLayout} />
            </Switch>
          </Router>
      </Provider>
      )
  }
}
export default App; 