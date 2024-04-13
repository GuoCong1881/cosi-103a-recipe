import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

describe('NavbarElements', () => {
  test('renders Nav component without crashing', () => {
    render(<Nav />);
  });

  test('renders NavLink component without crashing', () => {
    render(<Router><NavLink to="/"></NavLink></Router>);
  });

  test('renders Bars component without crashing', () => {
    render(<Bars />);
  });

  test('renders NavMenu component without crashing', () => {
    render(<NavMenu />);
  });

  test('renders NavBtn component without crashing', () => {
    render(<NavBtn />);
  });

  test('renders NavBtnLink component without crashing', () => {
    render(<Router><NavBtnLink to="/"></NavBtnLink></Router>);
  });
});