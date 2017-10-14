import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Timeline from './components/Timeline';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/timeline" component={Timeline} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
