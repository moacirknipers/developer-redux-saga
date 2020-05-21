import { takeLatest, all } from 'redux-saga/effects';
import { Types as BuscarTypes } from '../actions/buscar';
import { getImageRequest } from './buscar'

export default function* rootSaga() {
  return yield all([takeLatest(BuscarTypes.GET_IMAGE, getImageRequest)])  
}