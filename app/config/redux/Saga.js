import { all } from 'redux-saga/effects';

const watcherList =  [
  
]

export default function* allSaga(){
  yield all(watcherList)
}