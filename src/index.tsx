import * as React from "react";
import { render } from "react-dom";

import App from "./react/App";
import { store } from "./react/reduxStore";

const rootElement = document.getElementById("root");
render(<App store={store} />, rootElement);
