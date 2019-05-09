import React from 'react';
import './index.css';
import App from './App';
import { Route, 
         BrowserRouter as Router, 
         Switch 
       } from 'react-router-dom'
import NotFound from './views/NotFound'

export const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}