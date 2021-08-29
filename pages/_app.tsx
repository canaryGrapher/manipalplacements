import React from "react";
import Layout from "../components/Layout";
import { firebaseCloudMessaging } from "utils/webPush";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    firebaseCloudMessaging.init();
  }, []);
  return (
    <React.Fragment>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
