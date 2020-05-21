import { call, put } from 'redux-saga/effects';
import { services } from '../services';
import { Creators as BuscarActions } from '../actions/buscar';

const genericImg = 'https://ciberduvidas.iscte-iul.pt/assets/static/img/2016/11/21/1479704586564_error.png'

export function* getImageRequest(action) {
  try {
    const img = yield call(services.getImages, action.searchTherm);
    yield put(BuscarActions.getImageSuccess(action.searchTherm, img))
  } catch(err) {
    console.log(err);
    yield put(BuscarActions.getImageFailure(action.searchTherm, genericImg))
  }
}