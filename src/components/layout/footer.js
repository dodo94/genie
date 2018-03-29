import React, { Component } from 'react';

class Footer extends Component {

  render() {

    return (
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-content">
            <span className="bigger-120">
              <span className="blue bolder">GENIE </span>
              Application &copy; 2017-2018
            </span>
            &nbsp; &nbsp;
            <span className="action-buttons">
              <a href="javascript:;">
                <i className="ace-icon fa fa-twitter-square light-blue bigger-150"></i>
              </a>

              <a href="javascript:;">
                <i className="ace-icon fa fa-facebook-square text-primary bigger-150"></i>
              </a>

              <a href="javascript:;">
                <i className="ace-icon fa fa-rss-square orange bigger-150"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
