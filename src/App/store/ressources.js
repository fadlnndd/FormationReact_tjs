import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RESSOURCES_NAME, REST_ADDR } from '../config/config';

// const baseImageData = JSON.parse('[{"id":0,"titre":"react\'n roll","url":"https://t4.ftcdn.net/jpg/02/24/11/57/240_F_224115780_2ssvcCoTfQrx68Qsl5NxtVIDFWKtAgq2.jpg","w":543,"h":240},{"id":1,"titre":"deformed","url":"https://wallpapers.com/images/featured/r8l2gifvpdd0kt25.jpg","w":1125,"h":900},{"id":2,"titre":"Not work","url":"https://t3.ftcdn.net/jpg/00/08/59/86/240_F_8598647_6ULL8YFqpJoX6XCuFCVKsWRf1QP1CeK8.jpg","w":336,"h":240},{"id":3,"titre":"Wait long time","url":"https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3756616.jpg&fm=jpg","w":4067,"h":6100},{"id":4,"titre":"old dog","url":"https://i.insider.com/5e74de0b235c1801f042b048?width=750&format=jpeg&auto=webp","w":750,"h":562}]')

const initialState = {
  memes: [],
  images: [],
}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    fillImages: (state, action) => {
      state.images.splice(0);
      state.images.push(...action.payload)
    },
    pushImage: (state, action) => {
      state.images.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase('ressources/fetchImages/fulfilled', (s, a) => {
      s.images.splice(0);
      s.images.push(...a.payload.images);
      s.memes.splice(0);
      s.memes.push(...a.payload.memes);
    })
  }
});

export const { fillImages, pushImage } = ressources.actions
export const loadImages = createAsyncThunk(
  'ressources/fetchImages',
  async () => {
    const pr2 = await Promise.all([
      await fetch(`${REST_ADDR}${RESSOURCES_NAME.images}`),
      await fetch(`${REST_ADDR}${RESSOURCES_NAME.memes}`)
    ])
    const [pri, prm] = pr2;
    return { images: await pri.json(), memes: await prm.json() }
  }
)
const ressourceReducer = ressources.reducer
export default ressourceReducer