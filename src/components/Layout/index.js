import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = props => ({
  render() {
    return (
      <div>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    );
  }
});

export default Layout;