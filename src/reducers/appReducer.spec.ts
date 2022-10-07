import reducer, { INITAL_STATE } from '@src/reducers/appReducer'
import { initAction, demoActionSuccess } from '@src/actions'

describe('appReducer', () => {
  it('shoudl handle initAction', () => {
    expect(reducer(INITAL_STATE, initAction)).toEqual({
      ...INITAL_STATE,
      ready: true
    })
  })
  it('shoudl handle demoActionSuccess', () => {
    expect(reducer(INITAL_STATE, demoActionSuccess(2))).toEqual({
      ...INITAL_STATE,
      demoValue: 2
    })
  })
})
