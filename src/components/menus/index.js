import React from 'react';
import { Route, Link } from 'react-router-dom';

const menu = [
  {
    name: 'Home',
    to: '/',
    exact: true,
  },
  {
    name: 'About',
    to: '/about',
    exact: false,
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => {
      const active = match ? 'active' : '';
      return (
        <li className={active}>
          <Link to={to}>
            {' '}
            {label}
            {' '}
          </Link>
        </li>
      );
    }}
  />
);

const showMenu = (menus) => {
  let result = null;
  if (menus.length > 0) {
    result = menus.map((item, index) => (
      <MenuLink
        label={item.name}
        key={index}
        to={item.to}
        activeOnlyWhenExact={item.exact}
      />
    ));
  }
  return result;
};

export default function Menus() {
  return (
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        {showMenu(menu)}
      </ul>
    </nav>
  );
}
