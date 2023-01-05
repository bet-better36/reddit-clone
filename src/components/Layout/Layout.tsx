import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
