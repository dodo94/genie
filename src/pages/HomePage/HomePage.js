import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className="main-content-inner">
        <div className="breadcrumbs ace-save-state" id="breadcrumbs">
          <ul className="breadcrumb">
            <li>
              <i className="ace-icon fa fa-home home-icon"></i>
              <a>Trang chủ</a>
            </li>
          </ul>

          <div className="nav-search" id="nav-search">
            <form className="form-search">
              <span className="input-icon">
                <input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" />
                <i className="ace-icon fa fa-search nav-search-icon"></i>
              </span>
            </form>
          </div>
        </div>

        <div className="page-content">
          <div className="row">
            <div className="col-xs-12">
              <h1>Trang chủ</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
