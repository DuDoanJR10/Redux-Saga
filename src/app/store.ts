import createSagaMiddleware from "@redux-saga/core";
import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
} from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import authReducer from "../features/auth/authSlice";
import rootSaga from "./rootSaga";
import { history } from "../utils/history";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            sagaMiddleware,
            routerMiddleware(history),
        ),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
