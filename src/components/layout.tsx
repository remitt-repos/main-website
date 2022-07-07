/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

// @ts-ignore
export function Layout({ children }) {

  return (
    <React.Fragment>
        <Header className={'unSticky'} />
      <main
        id="content"
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
