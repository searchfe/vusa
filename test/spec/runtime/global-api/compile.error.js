import Vue from '../../../helpers/vue';

describe('Global API: compile', () => {
  it('should compile render functions', () => {
    const res = Vue.compile('<div><span>{{ msg }}</span></div>')
    const vm = new Vue({
      data: {
        msg: 'hello'
      },
      render: res.render,
      staticRenderFns: res.staticRenderFns
    }).$mount()
    expect(vm.$el.innerHTML).toContain('<span>hello</span>')
  })
})
