import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "antd/dist/antd.css";
import React from "react";
import Head from "next/head";
import OneSignal from "react-onesignal";

function MyApp({ Component, pageProps }) {
  const [initialized, setInitialized] = React.useState(false);
  OneSignal.init({
    appId: "3efdd127-f8a3-42d3-84a4-caa7dd5ed089",
    notifyButton: { enable: true },
  }).then(() => {
    setInitialized(true);
    OneSignal.showSlidedownPrompt().then(() => {
      // do other stuff
    });
  });
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
