import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Outlet /> {/* Renders the current page here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
