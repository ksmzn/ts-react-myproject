import * as React from "react";
import { render } from "react-dom";
import App from "./App";

const __DEV__ = process.env.NODE_ENV === "development";
const root = document.getElementById("container");

if (__DEV__) {
  // tslint:disable-next-line:no-var-requires
  const RedBox = require("redbox-react").default;
  try {
    render(<App />, root);
  } catch (e) {
    render(<RedBox error={e} />, root);
  }
} else {
  render(<App />, root);
}
