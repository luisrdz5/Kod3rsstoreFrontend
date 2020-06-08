import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.styl';
import '../styles/Variables.styl';

const Layout = ({ children }) => (
  <div className="Layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;