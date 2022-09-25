import {all} from 'redux-saga/effects';
import counterSaga from 'features/counter/counterSage';

function* helloSage(){
    console.log('hello')
} 

export default function* rootSaga(){
    console.log('Root saga');
    yield all([helloSage(),counterSaga()])
}