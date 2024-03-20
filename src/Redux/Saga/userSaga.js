import { call, put, takeEvery } from "redux-saga/effects";
import { FETCHUSER, SUCCESS } from "../Actions/userAction";
import { fetchTeamMembersData } from "../../ApiHandeller/UserApis";





function*userFetchHandeller(){
    try{
       let data= yield call(fetchTeamMembersData)
        yield put(SUCCESS,data)

    }catch(error){
        yield put("FAILURE")

    }
}

export function* watchUserFetch(){
    try {
        yield takeEvery(FETCHUSER,userFetchHandeller)
    } catch (error) {
        
    }
}