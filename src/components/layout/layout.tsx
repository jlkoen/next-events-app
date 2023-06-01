import { AppProps } from 'next/app';
import React, { Fragment, ReactNode } from 'react';
import Header from '../header/header';

export interface props {
  children?: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <Fragment>
      <Header />
      <div>{children}</div>
    </Fragment>
  );
};

export default Layout;
