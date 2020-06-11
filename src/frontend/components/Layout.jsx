import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.styl';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />

  </>
);

export default Layout;
