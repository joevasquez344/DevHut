import React, {useEffect} from 'react';
import './Layout.css';

import {Switch, Link, HashRouter, useHistory} from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Layout = (props) => {
  const history = useHistory();

  useEffect(() => {
    // history.push('/#/teams')
  }, []);
  return (
    <HashRouter>
      <div className="layout">
        <div className="layout__left">
          <Sidebar />
        </div>
        <div className="layout__right">
          <Navbar {...props} />
          <Content />
        </div>
      </div>
    </HashRouter>
  );
};

export default Layout;
