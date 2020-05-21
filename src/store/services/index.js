import axios from 'axios';

export const services = {
  getImages: (product) => {
    const params = {
      key: 'AIzaSyDHHOUkcMfEXehTtC8z9f-MD-U6y9Etjsg',
      cx: '011803404611172774197:9rntqtxfani',
      searchType: 'image',
      lr: 'lang_pt',
      num: 1,
      q: product,
    }
    return axios.get('https://www.googleapis.com/customsearch/v1', { params })
      .then(resp => resp.data.items[0].link)
      .catch(err=> err);
  }
}