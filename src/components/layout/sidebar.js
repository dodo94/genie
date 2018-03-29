import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Trang chủ',
    to: '/',
    icon: 'fa-home',
    exact: true
  },
  {
    name: 'Quản lý người sử dụng',
    to: '/product-list',
    icon: 'fa-users',
    exact: false
  },
  {
    name: 'Quản lý nhóm quyền',
    to: '/provider-list',
    icon: 'fa-sort-amount-asc',
    exact: false
  }
];

const MenuLink = ({label, icon, to, activeOnlyWhenExact}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}>
              <i className={`menu-icon fa ${icon}`}></i>
              <span className="menu-text"> {label} </span>
            </Link>

            <b className="arrow"></b>
          </li>
        );
      }}
    />
  );
};

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className="sidebar responsive ace-save-state">
        <div className="sidebar-shortcuts" id="sidebar-shortcuts">
          <div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
            <button className="btn btn-success">
              <i className="ace-icon fa fa-signal"></i>
            </button>

            <button className="btn btn-info">
              <i className="ace-icon fa fa-pencil"></i>
            </button>

            <button className="btn btn-warning">
              <i className="ace-icon fa fa-users"></i>
            </button>

            <button className="btn btn-danger">
              <i className="ace-icon fa fa-cogs"></i>
            </button>
          </div>

          <div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
            <span className="btn btn-success"></span>

            <span className="btn btn-info"></span>

            <span className="btn btn-warning"></span>

            <span className="btn btn-danger"></span>
          </div>
        </div>

        <ul className="nav nav-list">
          {this.showMenus(menus)}
        </ul>

        <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
          <i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
        </div>
      </div>
    );
  }

  showMenus = (menus) => {
    
    var result = null;

    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            icon={menu.icon}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }

    return result;
  };
}

export default Sidebar;
