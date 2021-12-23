import { Fragment } from "react";
import MainHeader from "./main-header";
import Head from "next/head";

const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Checkout.com</title>
        <meta
          name="description"
          content="Checkout.com Customer Feedback Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
