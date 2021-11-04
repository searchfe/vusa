/**
 * @file init unit test
 * @author huangxingyuan
 */

import Vue from '../../../helpers/vue';

describe('Initialization', () => {
  it('without new', () => {
    try { Vue() } catch (e) {
      const errMessage = "Class constructor Vue cannot be invoked without 'new'"
      expect(e.message).toEqual(errMessage)
    }
  })

  it('with new', () => {
    const instance =  new Vue({
      template: '<div>with new</div>'
    })
    expect(instance instanceof Vue ).toBe(true)
  })
})
