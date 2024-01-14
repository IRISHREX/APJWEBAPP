import { all } from "redux-saga/effects";
import { watchUserFetch } from "./userSaga";





export default function* rootSaga(){
    yield all([
        watchUserFetch
    ])
}