import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Router, Route, Switch, HashRouter } from 'react-router-dom';

import HomePage from './components/HomePage';
import Layout from './components/Layout';
import About from './components/About';

ReactDOM.render(
      <BrowserRouter>
          <Layout>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={About} />
          </Layout>
      </BrowserRouter>
  ,
  document.getElementById('root'));
registerServiceWorker();
