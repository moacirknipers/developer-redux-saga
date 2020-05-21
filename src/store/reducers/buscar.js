import { Types } from '../actions/buscar';

const initialState = {
  searchTherm: '',
  images: [],
}
export default function list(state=initialState, action) {
  switch(action.type) {  
    case Types.GET_IMAGE: 
      return {
        ...state,
        keyword: action.searchTherm      
    };
    case Types.GET_IMAGE_SUCCESS:
    case Types.GET_IMAGE_FAILURE:
      return {
        ...state,
        images: [
          ...state.images,
          {
            img: action.img,
          }
        ]
      }
    default: 
      return state;
  }
 }