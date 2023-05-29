import { AppProps } from 'next/app';
import React, { Fragment, ReactNode } from 'react';

export interface props {
  children?: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return <div>{children}</div>;
};

export default Layout;
