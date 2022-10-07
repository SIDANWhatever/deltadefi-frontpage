import type { Action } from '@reduxjs/toolkit'
import type { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { demoAction, demoActionSuccess } from '@src/actions'
import { combineEpics, ofType } from 'redux-observable'
import { InitalState } from '@src/types/app'

export const appInitEpic = (actions$: Observable<Action>, state$: Observable<InitalState>) =>
  actions$.pipe(
    ofType(demoAction),
    map((action, payload) => {
      console.log(action.type, payload)
      console.log(state$)
      // action.payload can be safely used as number here (and will also be correctly inferred by TypeScript)
      // ...
      return demoActionSuccess(2)
    })
  )

export default combineEpics(appInitEpic)
