import React from 'react';
import Sidebar from '@/components/sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="viewer">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
