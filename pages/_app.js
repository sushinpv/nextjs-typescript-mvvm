import App from "next/app";
import React from "react";

import wrapper from "../src/store/configureStore";

export default wrapper.withRedux(
  class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props;
      return <Component {...pageProps} />;
    }
  }
);
