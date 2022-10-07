import { InitalState } from '@src/types/app'
import { createReducer, isAnyOf } from '@reduxjs/toolkit'
import { initAction, demoActionSuccess } from '@src/actions'

export const INITAL_STATE: InitalState = {
  ready: false,
  demoValue: 0
}

const appReducer = createReducer(INITAL_STATE, (builder) => {
  builder.addMatcher(isAnyOf(initAction), (state) => {
    state.ready = true
  })
  builder.addMatcher(isAnyOf(demoActionSuccess), (state, action) => {
    state.demoValue += action.payload
  })
})

export default appReducer
