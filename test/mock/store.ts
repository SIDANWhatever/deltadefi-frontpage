import { Middleware, Dispatch, AnyAction } from '@reduxjs/toolkit'
import configureMockStore from 'redux-mock-store'

const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = []
export const mockStore = configureMockStore(middlewares)
