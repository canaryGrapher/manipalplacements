import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "antd/dist/antd.css";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "3efdd127-f8a3-42d3-84a4-caa7dd5ed089",
        safari_web_id:
          "web.onesignal.auto.5f83a190-684a-4c4c-a875-2ee8aa7bf929",
        notifyButton: {
          enable: true,
        },
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);
  return (
    <React.Fragment>
      <Head>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
