import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from "./App/App";

import GlobalStyle from "./globalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<App />
		</Provider>
	</React.StrictMode>,
);
