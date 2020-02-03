import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

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
        <NavItem className={active}>
          <NavLink to={to}>
            {' '}
            {label}
            {' '}
          </NavLink>
        </NavItem>
      );
    }}
  />
);

const showMenu = (menus) => {
  if (menus.length > 0) {
    return (
      menus.map((item, index) => (
        <MenuLink
          label={item.name}
          key={index}
          to={item.to}
          activeOnlyWhenExact={item.exact}
        />
      ))
    );
  }
};

export default function Menu() {
  return (
    <Navbar color="light" light expand="md">
      <Collapse navbar>
        <Nav className="mr-auto" navbar>
          {showMenu(menu)}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
