import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "CPB | Campus Placement Bulletin",
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="w-full h-16 pl-5 bg-white text-black flex flex-col justify-center border-b border-black fixed z-50">
      <nav className="flex flex-row">
        <Link href="/">
          <a>
            <div className="flex flex-row">
              <span className="my-auto pl-4 font-medium text-blue-500 text-xl">
                Campus Placement Bulletin
              </span>
            </div>
          </a>
        </Link>
      </nav>
    </header>
    <main className="min-h-screen mx-10 py-16">{children}</main>
    <footer className="w-100 bg-white text-black h-20 text-center flex flex-col justify-center border-t border-black">
      <span>
        Created by a{" "}
        <a href="https://yasharyan.com" className="text-blue-400 font-bold">
          frustrated student
        </a>
      </span>
    </footer>
  </div>
);

export default Layout;
