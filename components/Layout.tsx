import React, { ReactNode } from "react";
import Head from "next/head";

import { PageHeader } from "antd";

// type Props = {
//   children?: ReactNode;
//   title?: string;
// };

const Layout = ({ children, title = "Placement Bulletin" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.png"></link>
      </Head>
      <PageHeader
        className="site-page-header shadow-lg w-full"
        style={{ position: "fixed", backgroundColor: "#fefefe", zIndex: 300 }}
        title="Placement Bulletin"
        subTitle="Manipal"
      />
      <main className="min-h-screen">{children}</main>
      <footer className="w-100 bg-gray-600 text-white h-20 text-center flex flex-col justify-center">
        <span>
          Created by a{" "}
          <a href="https://yasharyan.com" className="text-blue-400 font-bold">
            frustrated student
          </a>
        </span>
        <a
          href="https://github.com/canaryGrapher/manipalplacements"
          className="text-white"
        >
          Report bugs and suggest improvements on this project
        </a>
      </footer>
    </div>
  );
};

export default Layout;
