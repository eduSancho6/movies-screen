import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Header from '../components/ui/Header/Header';
import routes from './routes';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((r) => {
          return (
            <Route key={r.path} path={r.path} element={r.component}></Route>
          );
        })}
      </Routes>
    </Router>
  );
};

export default Routing;
