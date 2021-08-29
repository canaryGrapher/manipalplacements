import React from "react";
import Layout from "../components/Layout";
import { firebaseCloudMessaging } from "utils/webPush";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    firebaseCloudMessaging.init();
  }, []);
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
