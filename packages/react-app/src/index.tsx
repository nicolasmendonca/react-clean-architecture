import * as React from "react";
import { render } from "react-dom";

import App from "./App";
import { store } from "./reduxStore";

const rootElement = document.getElementById("root");
render(<App store={store} />, rootElement);
