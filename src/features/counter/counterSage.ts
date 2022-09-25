import { takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

export function* log(action: PayloadAction){
    console.log('log',action);
}

export default function* counterSaga(){
    console.log('counnter');
    yield takeEvery('counter/increment',log);
    
}