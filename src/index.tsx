import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { history } from "./utils/history";
import { ErrorBoundary } from "react-error-boundary";
import { ConnectedRouter } from "connected-react-router";
import ReactDOM from "react-dom";
import CatchError from "./components/Common/CatchError/CatchError";

const theme = createTheme();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary FallbackComponent={CatchError}>
                <ConnectedRouter history={history}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <App />
                    </ThemeProvider>
                </ConnectedRouter>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
