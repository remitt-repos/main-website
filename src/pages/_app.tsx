import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { initGA, logPageView } from '../analytics';
import { useEffect } from "react";
import Router from "next/router";

function RemittApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <Component {...pageProps} />
}

export default RemittApp
