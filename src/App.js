import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  render() {

    return (

      <Router>
        
        <div className="no-skin">
        
          {/*navbar component*/}
          <Navbar />

          <div className="main-container ace-save-state" id="main-container">

            {/*sidebar component*/}
            <Sidebar />

            {/*content*/}
            <div className="main-content">
              { this.showContentMenu(routes) }
            </div>

            {/*footer component*/}
            <Footer />

            {/*button back-to-top*/}
            <a href="javascript:;" id="btn-scroll-up" className="btn-scroll-up btn btn-sm btn-inverse">
              <i className="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
            </a>

          </div>

        </div>

      </Router>

    );
  }

  showContentMenu = (routes) => {

    var result = null;

    if(routes.length > 0) {

      result = routes.map((route, index) => {
        return (
          <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
    }

    return <Switch>{result}</Switch>
  }
}

export default App;
