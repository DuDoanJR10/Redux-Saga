import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/Common/PrivateRoute/PrivateRoute";
import { NotFound } from "./components/Common/NotFound/NotFound";
import { Admin } from "./components/Layout/Admin";
import LoginPage from "./features/auth/pages/LoginPage";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <PrivateRoute path="/admin">
                    <Admin />
                </PrivateRoute>

                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </>
    );
}

export default App;
