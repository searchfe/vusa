import Vue from '../../../helpers/vue';
import * as Vusa from '../../../../src/runtime/index';

describe('Options data', () => {
  it('should proxy and be reactive', done => {
    const data = { msg: 'foo' }
    const vm = new Vue({
      data,
      template: '<div>{{ msg }}</div>'
    }).$mount()
    expect(vm.$data).toMatchObject({ msg: 'foo' })
	  expect(vm.$data).toMatchObject(data)
	  // 不支持直接赋值 需要VUSA实现
    // data.msg = 'bar'
    // 支持this.msg赋值
    vm.msg = 'bar'
    waitForUpdate(() => {
      expect(vm.$el.textContent).toBe('bar')
    }).then(done)
  })

  it('computed data change', done => {
    const data = {
      first: 'Jay',
      last: 'Chou',
    };
    const vm = new Vue({
        template: '<div>{{ name }}</div>',
        data,
        computed: {
            // case 中 computed 必须依赖大于一个 data，覆盖 calc-computed.js 的 bug
            name() {
                return this.first + ' ' + this.last;
            },
        },
    }).$mount();
    waitForUpdate(() => {
        expect(vm.$el.textContent).toBe('Jay Chou');
        vm.last = 'Lee';
    }).thenWaitFor(100).then(() => {
        expect(vm.name).toBe('Jay Lee');
        expect(vm.$el.textContent).toBe('Jay Lee');
    }).then(done);
});

  // 不支持extend，所以用defineComponent模拟
  it('should merge data properly', () => {
    const Test = Vusa.defineComponent({
      data () {
        return { a: 1 }
      }
    })
    let vm = new Test({
      data: { b: 2 }
    })
    expect(vm.a).toBe(1)
    // data被合并，新实例data属性没有挂接到自身

    // expect(vm.b).toBe(2)
    // no instance data
    // vm = new Test()
    // expect(vm.a).toBe(1)
    // no child-val
    // const Extended = Test.extend({})
    // vm = new Extended()
    // expect(vm.a).toBe(1)
    // recursively merge objects
    // const WithObject = Vue.extend({
    //   data () {
    //     return {
    //       obj: {
    //         a: 1
    //       }
    //     }
    //   }
    // })
    // vm = new WithObject({
    //   data: {
    //     obj: {
    //       b: 2
    //     }
    //   }
    // })
    // expect(vm.obj.a).toBe(1)
    // expect(vm.obj.b).toBe(2)
  })

  // 不支持warning处理
  // it('should warn non-function during extend', () => {
  //   Vue.extend({
  //     data: { msg: 'foo' }
  //   })
  //   expect('The "data" option should be a function').toHaveBeenWarned()
  // })
  // 不支持warning处理
  // it('should warn non object return', () => {
  //   new Vue({
  //     data () {}
  //   })
  //   expect('data functions should return an object').toHaveBeenWarned()
  // })
  // 不支持warning处理
  // it('should warn replacing root $data', () => {
  //   const vm = new Vue({
  //     data: {}
  //   })
  //   vm.$data = {}
  //   expect('Avoid replacing instance root $data').toHaveBeenWarned()
  // })
// 不通过待解决
  // it('should have access to props', () => {
  //   const Test = {
  //     data () {
  //       return {
  //         b: this.a
  //       }
	//   },
	//   template: '<div>{{a}}</div>'
  //   }
  //   const vm = new Vue({
  //     template: `<div><test s-ref="test" a="{{123}}"></test></div>`,
  //     components: { Test }
  //   }).$mount()
  //   expect(vm.ref('test')).toBe(1)
  // })

  // 不支持根节点绑定获取到children
  // it('props should not be reactive', done => {
  //   let calls = 0
  //   const vm = new Vue({
  //     template: `<child :msg="msg"></child>`,
  //     data: {
  //       msg: 'hello'
  //     },
  //     beforeUpdate () { calls++ },
  //     components: {
  //       child: {
  //         template: `<span>{{ localMsg }}</span>`,
  //         props: ['msg'],
  //         data () {
  //           return { localMsg: this.msg }
  //         },
  //         computed: {
  //           computedMsg () {
  //             return this.msg + ' world'
  //           }
  //         }
  //       }
  //     }
  //   }).$mount()
  //   const child = vm.$children[0]
  //   vm.msg = 'hi'
  //   waitForUpdate(() => {
  //     expect(child.localMsg).toBe('hello')
  //     expect(child.computedMsg).toBe('hi world')
  //     expect(calls).toBe(1)
  //   }).then(done)
  // })

// 不支持data中调用methods中函数直接返回值
//   it('should have access to methods', () => {
//     const vm = new Vue({
//       methods: {
//         get () {
//           return { a: 1 }
//         }
//       },
//       data () {
//         return this.get()
//       }
//     })
//     expect(vm.a).toBe(1)
//   })

// San不支持provide透传 需要VUSA支持
//   it('should be called with this', () => {
//     const vm = new Vue({
//       template: '<div><child></child></div>',
//       provide: { foo: 1 },
//       components: {
//         child: {
//           template: '<span>{{bar}}</span>',
//           inject: ['foo'],
//           data ({ foo }) {
//             return { bar: 'foo:' + foo }
//           }
//         }
//       }
//     }).$mount()
//     expect(vm.$el.innerHTML).toBe('<span>foo:1</span>')
//   })

// San不支持provide透传 需要VUSA支持
//   it('should be called with vm as first argument when merged', () => {
//     const superComponent = {
//       data: ({ foo }) => ({ ext: 'ext:' + foo })
//     }
//     const mixins = [
//       {
//         data: ({ foo }) => ({ mixin1: 'm1:' + foo })
//       },
//       {
//         data: ({ foo }) => ({ mixin2: 'm2:' + foo })
//       }
//     ]
//     const vm = new Vue({
//       template: '<div><child></child></div>',
//       provide: { foo: 1 },
//       components: {
//         child: {
//           extends: superComponent,
//           mixins,
//           template: '<span>{{bar}}-{{ext}}-{{mixin1}}-{{mixin2}}</span>',
//           inject: ['foo'],
//           data: ({ foo }) => ({ bar: 'foo:' + foo })
//         }
//       }
//     }).$mount()
//     expect(vm.$el.innerHTML).toBe('<span>foo:1-ext:1-m1:1-m2:1</span>')
//   })
})
