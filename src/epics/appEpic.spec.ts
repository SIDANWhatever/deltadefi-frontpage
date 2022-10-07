import { demoAction, demoActionSuccess } from '@src/actions'
import { StateObservable } from 'redux-observable'
import { Subject, of } from 'rxjs'
import { toArray } from 'rxjs/operators'
import { appInitEpic } from '@src/epics/appEpic'
import { InitalState } from '@src/types/app'

const state: InitalState = {
  ready: false,
  demoValue: 0
}

describe('appEpic', () => {
  describe('appInitEpic', () => {
    it('should dispatch demoActionSuccess', (done) => {
      const source = demoAction(2)
      const action$ = of(source)
      const state$ = new StateObservable<InitalState>(new Subject(), state)

      appInitEpic(action$, state$)
        .pipe(toArray())
        .subscribe((actions) => {
          expect(actions).toEqual([demoActionSuccess(2)])
          done()
        })
    })
  })
})
