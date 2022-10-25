import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
    try {
        yield delay(1000);
        localStorage.setItem("access_token", "fake_token");
        yield put(
            authActions.loginSuccess({
                id: 1,
                name: "Du Doan JR 10",
            }),
        );
        yield put(push("/admin/dashboard"));
    } catch (error) {
        yield put(authActions.loginFailed("Error"));
    }
}

function* handleLogout() {
    yield delay(500);
    localStorage.removeItem("access_token");
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem("access_token"));
        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(
                authActions.login.type,
            );
            yield fork(handleLogin, action.payload);
        }

        yield take(authActions.logout.type);
        yield call(handleLogout);
        yield put(push("/login"));
    }
}

export default function* authSaga() {
    console.log("Auth Saga");
    yield fork(watchLoginFlow);
}
