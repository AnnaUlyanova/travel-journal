import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Layout from './components/Layout';
import About from './components/About';
import Admin from './components/Admin';

ReactDOM.render(
      <BrowserRouter>
          <Layout>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={About} />
              <Route path="/admin" component={Admin} />
          </Layout>
      </BrowserRouter>
  ,
  document.getElementById('root'));
registerServiceWorker();
