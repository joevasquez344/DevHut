import React, {useEffect} from 'react';

import {Switch, Link, HashRouter, useHistory} from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Layout = (props) => {
  const history = useHistory();

  useEffect(() => {
    history.push('/#/teams')
  }, [])
  return (
    <HashRouter>
      <div className="layout">
        <Navbar {...props} />
        <Sidebar />
        <Content />
      </div>
    </HashRouter>
  );
};


export default Layout;
