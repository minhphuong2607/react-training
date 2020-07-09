import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
          <div>
            { this.showContentMenus(routes) }
          </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((route, index) =>{
      return (<Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}/>);
      });
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
