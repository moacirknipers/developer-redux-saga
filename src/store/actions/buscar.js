export const Types = { 
  GET_IMAGE: 'buscar/GET_IMAGE',
  GET_IMAGE_SUCCESS: 'buscar/GET_IMAGE_SUCCESS',
  GET_IMAGE_FAILURE: 'buscar/GET_IMAGE_FAILURE',
}

export const Creators = { 
  getImage: (searchTherm) => ({
    type: Types.GET_IMAGE,
    searchTherm,
  }),
  getImageSuccess: (searchTherm, img) => ({
    type: Types.GET_IMAGE_SUCCESS,
    searchTherm,
    img,
  }),
  getImageFailure: (searchTherm, img) => ({
    type: Types.GET_IMAGE_FAILURE,
    searchTherm,
    img,
  })
}
