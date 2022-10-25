import config from '@src/config'
// import epics from '@src/epics'
import reducers from '@src/reducers'
import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'

const { NODE_ENV } = config

const persistConfig = {
  key: 'root',
  storage
}

const epicMiddleware = createEpicMiddleware()
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger, epicMiddleware),
  devTools: NODE_ENV !== 'production'
})
// epicMiddleware.run(epics)
const persistor = persistStore(store)

export default store
export { persistor }
