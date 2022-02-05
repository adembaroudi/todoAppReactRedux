import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reduxSlicer'

const store = configureStore({ reducer: rootReducer });

export default store;