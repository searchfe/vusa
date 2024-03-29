// import {parse} from 'compiler/parser/index';
// import {optimize} from 'compiler/optimizer';
// import {generate} from 'compiler/codegen';
// // import {isObject} from 'shared/util';
// import {isReservedTag} from 'web/util/index';
// import {baseOptions} from 'web/compiler/index';
// import {isObject,isReservedTag} from '../../../../src/shared/util';
// // import { Observer } from 'core/observer/index'
// // import { isNative, isObject, hasOwn } from 'core/util/index'

// function assertCodegen(template, generatedCode, ...args) {
//     let staticRenderFnCodes = [];
//     let generateOptions = baseOptions;
//     let proc = null;
//     let len = args.length;
//     while (len--) {
//         const arg = args[len];
//         if (Array.isArray(arg)) {
//             staticRenderFnCodes = arg;
//         }
//         else if (isObject(arg)) {
//             generateOptions = arg;
//         }
//         else if (typeof arg === 'function') {
//             proc = arg;
//         }
//     }
//     const ast = parse(template, baseOptions);
//     optimize(ast, baseOptions);
//     proc && proc(ast);
//     const res = generate(ast, generateOptions);
//     expect(res.render).toBe(generatedCode);
//     expect(res.staticRenderFns).toEqual(staticRenderFnCodes);
// }

// /* eslint-disable quotes, max-len */
// describe('codegen', () => {
//     it('generate directive', () => {
//         assertCodegen(
//             '<p a-custom1:arg1.modifier="value1" a-custom2></p>',
//             `with(this){return _c('p',{directives:[{name:"custom1",rawName:"a-custom1:arg1.modifier",value:(value1),expression:"value1",arg:"arg1",modifiers:{"modifier":true}},{name:"custom2",rawName:"a-custom2"}]})}`
//         );
//     });

//     it('generate filters', () => {
//         assertCodegen(
//             '<div :id="a | b | c">{{ d | e | f }}</div>',
//             `with(this){return _c('div',{attrs:{"id":_f("c")(_f("b")(a))}},[_v(_s(_f("f")(_f("e")(d))))])}`
//         );
//     });

//     it('generate a-for directive', () => {
//         assertCodegen(
//             '<div><li a-for="item in items" :key="item.uid"></li></div>',
//             `with(this){return _c('div',_l((items),function(item){return _c('li',{key:item.uid})}))}`
//         );
//         // iterator syntax
//         assertCodegen(
//             '<div><li a-for="(item, i) in items"></li></div>',
//             `with(this){return _c('div',_l((items),function(item,i){return _c('li')}))}`
//         );
//         assertCodegen(
//             '<div><li a-for="(item, key, index) in items"></li></div>',
//             `with(this){return _c('div',_l((items),function(item,key,index){return _c('li')}))}`
//         );
//         // destructuring
//         assertCodegen(
//             '<div><li a-for="{ a, b } in items"></li></div>',
//             `with(this){return _c('div',_l((items),function({ a, b }){return _c('li')}))}`
//         );
//         assertCodegen(
//             '<div><li a-for="({ a, b }, key, index) in items"></li></div>',
//             `with(this){return _c('div',_l((items),function({ a, b },key,index){return _c('li')}))}`
//         );
//         // a-for with extra element
//         assertCodegen(
//             '<div><p></p><li a-for="item in items"></li></div>',
//             `with(this){return _c('div',[_c('p'),_l((items),function(item){return _c('li')})],2)}`
//         );
//     });

//     it('generate a-if directive', () => {
//         assertCodegen(
//             '<p a-if="show">hello</p>',
//             `with(this){return (show)?(_c('p',[_v("hello")])):(_e())}`
//         );
//     });

//     it('generate a-else directive', () => {
//         assertCodegen(
//             '<div><p a-if="show">hello</p><p a-else>world</p></div>',
//             `with(this){return _c('div',[(show)?(_c('p',[_v("hello")])):(_c('p',[_v("world")]))])}`
//         );
//     });

//     it('generate a-else-if directive', () => {
//         assertCodegen(
//             '<div><p a-if="show">hello</p><p a-else-if="hide">world</p></div>',
//             `with(this){return _c('div',[(show)?(_c('p',[_v("hello")])):((hide)?(_c('p',[_v("world")])):(_e()))])}`
//         );
//     });

//     it('generate a-else-if with a-else directive', () => {
//         assertCodegen(
//             '<div><p a-if="show">hello</p><p a-else-if="hide">world</p><p a-else>bye</p></div>',
//             `with(this){return _c('div',[(show)?(_c('p',[_v("hello")])):((hide)?(_c('p',[_v("world")])):(_c('p',[_v("bye")])))])}`
//         );
//     });

//     it('generate multi a-else-if with a-else directive', () => {
//         assertCodegen(
//             '<div><p a-if="show">hello</p><p a-else-if="hide">world</p><p a-else-if="3">elseif</p><p a-else>bye</p></div>',
//             `with(this){return _c('div',[(show)?(_c('p',[_v("hello")])):((hide)?(_c('p',[_v("world")])):((3)?(_c('p',[_v("elseif")])):(_c('p',[_v("bye")]))))])}`
//         );
//     });

//     it('generate ref', () => {
//         assertCodegen(
//             '<p ref="component1"></p>',
//             `with(this){return _c('p',{ref:"component1"})}`
//         );
//     });

//     it('generate ref on a-for', () => {
//         assertCodegen(
//             '<ul><li a-for="item in items" ref="component1"></li></ul>',
//             `with(this){return _c('ul',_l((items),function(item){return _c('li',{ref:"component1",refInFor:true})}))}`
//         );
//     });

//     it('generate a-bind directive', () => {
//         assertCodegen(
//             '<p a-bind="test"></p>',
//             `with(this){return _c('p',_b({},'p',test))}`
//         );
//     });

//     it('generate template tag', () => {
//         assertCodegen(
//             '<div><template><p>{{hello}}</p></template></div>',
//             `with(this){return _c('div',[[_c('p',[_v(_s(hello))])]],2)}`
//         );
//     });

//     it('generate single slot', () => {
//         assertCodegen(
//             '<div><slot></slot></div>',
//             `with(this){return _c('div',[_t("default")],2)}`
//         );
//     });

//     it('generate named slot', () => {
//         assertCodegen(
//             '<div><slot name="one"></slot></div>',
//             `with(this){return _c('div',[_t("one")],2)}`
//         );
//     });

//     it('generate slot fallback content', () => {
//         assertCodegen(
//             '<div><slot><div>hi</div></slot></div>',
//             `with(this){return _c('div',[_t("default",[_c('div',[_v("hi")])])],2)}`
//         );
//     });

//     it('generate slot target', () => {
//         assertCodegen(
//             '<p slot="one">hello world</p>',
//             `with(this){return _c('p',{slot:"one"},[_v("hello world")])}`
//         );
//     });

//     it('generate class binding', () => {
//     // static
//         assertCodegen(
//             '<p class="class1">hello world</p>',
//             `with(this){return _c('p',{staticClass:"class1"},[_v("hello world")])}`
//         );
//         // dynamic
//         assertCodegen(
//             '<p :class="class1">hello world</p>',
//             `with(this){return _c('p',{class:class1},[_v("hello world")])}`
//         );
//     });

//     it('generate style binding', () => {
//         assertCodegen(
//             '<p :style="error">hello world</p>',
//             `with(this){return _c('p',{style:(error)},[_v("hello world")])}`
//         );
//     });

//     it('generate a-show directive', () => {
//         assertCodegen(
//             '<p a-show="shown">hello world</p>',
//             `with(this){return _c('p',{directives:[{name:"show",rawName:"a-show",value:(shown),expression:"shown"}]},[_v("hello world")])}`
//         );
//     });

//     it('generate DOM props with a-bind directive', () => {
//     // input + value
//         assertCodegen(
//             '<input :value="msg">',
//             `with(this){return _c('input',{domProps:{"value":msg}})}`
//         );
//         // non input
//         assertCodegen(
//             '<p :value="msg"/>',
//             `with(this){return _c('p',{attrs:{"value":msg}})}`
//         );
//     });

//     it('generate attrs with a-bind directive', () => {
//         assertCodegen(
//             '<input :name="field1">',
//             `with(this){return _c('input',{attrs:{"name":field1}})}`
//         );
//     });

//     it('generate static attrs', () => {
//         assertCodegen(
//             '<input name="field1">',
//             `with(this){return _c('input',{attrs:{"name":"field1"}})}`
//         );
//     });

//     it('generate events with a-on directive', () => {
//         assertCodegen(
//             '<input @input="onInput">',
//             `with(this){return _c('input',{on:{"input":onInput}})}`
//         );
//     });

//     it('generate events with keycode', () => {
//         assertCodegen(
//             '<input @input.enter="onInput">',
//             `with(this){return _c('input',{on:{"input":function($event){if(!('button' in $event)&&_k($event.keyCode,"enter",13))return null;onInput($event)}}})}`
//         );
//         // multiple keycodes (delete)
//         assertCodegen(
//             '<input @input.delete="onInput">',
//             `with(this){return _c('input',{on:{"input":function($event){if(!('button' in $event)&&_k($event.keyCode,"delete",[8,46]))return null;onInput($event)}}})}`
//         );
//         // multiple keycodes (chained)
//         assertCodegen(
//             '<input @keydown.enter.delete="onInput">',
//             `with(this){return _c('input',{on:{"keydown":function($event){if(!('button' in $event)&&_k($event.keyCode,"enter",13)&&_k($event.keyCode,"delete",[8,46]))return null;onInput($event)}}})}`
//         );
//         // number keycode
//         assertCodegen(
//             '<input @input.13="onInput">',
//             `with(this){return _c('input',{on:{"input":function($event){if(!('button' in $event)&&$event.keyCode!==13)return null;onInput($event)}}})}`
//         );
//         // custom keycode
//         assertCodegen(
//             '<input @input.custom="onInput">',
//             `with(this){return _c('input',{on:{"input":function($event){if(!('button' in $event)&&_k($event.keyCode,"custom"))return null;onInput($event)}}})}`
//         );
//     });

//     it('generate events with generic modifiers', () => {
//         assertCodegen(
//             '<input @input.stop="onInput">',
//             `with(this){return _c('input',{on:{"input":function($event){$event.stopPropagation();onInput($event)}}})}`
//         );
//         assertCodegen(
//             '<input @input.prevent="onInput">',
//             `with(this){return _c('input',{on:{"input":function($event){$event.preventDefault();onInput($event)}}})}`
//         );
//         assertCodegen(
//             '<input @input.self="onInput">',
//             `with(this){return _c('input',{on:{"input":function($event){if($event.target !== $event.currentTarget)return null;onInput($event)}}})}`
//         );
//     });

//     // Github Issues #5146
//     it('generate events with generic modifiers and keycode correct order', () => {
//         assertCodegen(
//             '<input @keydown.enter.prevent="onInput">',
//             `with(this){return _c('input',{on:{"keydown":function($event){if(!('button' in $event)&&_k($event.keyCode,"enter",13))return null;$event.preventDefault();onInput($event)}}})}`
//         );

//         assertCodegen(
//             '<input @keydown.enter.stop="onInput">',
//             `with(this){return _c('input',{on:{"keydown":function($event){if(!('button' in $event)&&_k($event.keyCode,"enter",13))return null;$event.stopPropagation();onInput($event)}}})}`
//         );
//     });

//     it('generate events with mouse event modifiers', () => {
//         assertCodegen(
//             '<input @click.ctrl="onClick">',
//             `with(this){return _c('input',{on:{"click":function($event){if(!$event.ctrlKey)return null;onClick($event)}}})}`
//         );
//         assertCodegen(
//             '<input @click.shift="onClick">',
//             `with(this){return _c('input',{on:{"click":function($event){if(!$event.shiftKey)return null;onClick($event)}}})}`
//         );
//         assertCodegen(
//             '<input @click.alt="onClick">',
//             `with(this){return _c('input',{on:{"click":function($event){if(!$event.altKey)return null;onClick($event)}}})}`
//         );
//         assertCodegen(
//             '<input @click.meta="onClick">',
//             `with(this){return _c('input',{on:{"click":function($event){if(!$event.metaKey)return null;onClick($event)}}})}`
//         );
//     });

//     it('generate events with multiple modifiers', () => {
//         assertCodegen(
//             '<input @input.stop.prevent.self="onInput">',
//             `with(this){return _c('input',{on:{"input":function($event){$event.stopPropagation();$event.preventDefault();if($event.target !== $event.currentTarget)return null;onInput($event)}}})}`
//         );
//     });

//     it('generate events with capture modifier', () => {
//         assertCodegen(
//             '<input @input.capture="onInput">',
//             `with(this){return _c('input',{on:{"!input":function($event){onInput($event)}}})}`
//         );
//     });

//     it('generate events with once modifier', () => {
//         assertCodegen(
//             '<input @input.once="onInput">',
//             `with(this){return _c('input',{on:{"~input":function($event){onInput($event)}}})}`
//         );
//     });

//     it('generate events with capture and once modifier', () => {
//         assertCodegen(
//             '<input @input.capture.once="onInput">',
//             `with(this){return _c('input',{on:{"~!input":function($event){onInput($event)}}})}`
//         );
//     });

//     it('generate events with once and capture modifier', () => {
//         assertCodegen(
//             '<input @input.once.capture="onInput">',
//             `with(this){return _c('input',{on:{"~!input":function($event){onInput($event)}}})}`
//         );
//     });

//     it('generate events with inline statement', () => {
//         assertCodegen(
//             '<input @input="current++">',
//             `with(this){return _c('input',{on:{"input":function($event){current++}}})}`
//         );
//     });

//     it('generate events with inline function expression', () => {
//     // normal function
//         assertCodegen(
//             '<input @input="function () { current++ }">',
//             `with(this){return _c('input',{on:{"input":function () { current++ }}})}`
//         );
//         // arrow with no args
//         assertCodegen(
//             '<input @input="()=>current++">',
//             `with(this){return _c('input',{on:{"input":()=>current++}})}`
//         );
//         // arrow with parens, single arg
//         assertCodegen(
//             '<input @input="(e) => current++">',
//             `with(this){return _c('input',{on:{"input":(e) => current++}})}`
//         );
//         // arrow with parens, multi args
//         assertCodegen(
//             '<input @input="(a, b, c) => current++">',
//             `with(this){return _c('input',{on:{"input":(a, b, c) => current++}})}`
//         );
//         // arrow with destructuring
//         assertCodegen(
//             '<input @input="({ a, b }) => current++">',
//             `with(this){return _c('input',{on:{"input":({ a, b }) => current++}})}`
//         );
//         // arrow single arg no parens
//         assertCodegen(
//             '<input @input="e=>current++">',
//             `with(this){return _c('input',{on:{"input":e=>current++}})}`
//         );
//         // with modifiers
//         assertCodegen(
//             `<input @keyup.enter="e=>current++">`,
//             `with(this){return _c('input',{on:{"keyup":function($event){if(!('button' in $event)&&_k($event.keyCode,"enter",13))return null;(e=>current++)($event)}}})}`
//         );
//     });

//     // #3893
//     it('should not treat handler with unexpected whitespace as inline statement', () => {
//         assertCodegen(
//             '<input @input=" onInput ">',
//             `with(this){return _c('input',{on:{"input": onInput }})}`
//         );
//     });

//     it('generate unhandled events', () => {
//         assertCodegen(
//             '<input @input="current++">',
//             `with(this){return _c('input',{on:{"input":function(){}}})}`,
//             ast => {
//                 ast.events.input = undefined;
//             }
//         );
//     });

//     it('generate multiple event handlers', () => {
//         assertCodegen(
//             '<input @input="current++" @input.stop="onInput">',
//             `with(this){return _c('input',{on:{"input":[function($event){current++},function($event){$event.stopPropagation();onInput($event)}]}})}`
//         );
//     });

//     it('generate component', () => {
//         assertCodegen(
//             '<my-component name="mycomponent1" :msg="msg" @notify="onNotify"><div>hi</div></my-component>',
//             `with(this){return _c('my-component',{attrs:{"name":"mycomponent1","msg":msg},on:{"notify":onNotify}},[_c('div',[_v("hi")])])}`
//         );
//     });

//     it('generate svg component with children', () => {
//         assertCodegen(
//             '<svg><my-comp><circle :r="10"></circle></my-comp></svg>',
//             `with(this){return _c('svg',[_c('my-comp',[_c('circle',{attrs:{"r":10}})])],1)}`
//         );
//     });

//     it('generate is attribute', () => {
//         assertCodegen(
//             '<div is="component1"></div>',
//             `with(this){return _c("component1",{tag:"div"})}`
//         );
//         assertCodegen(
//             '<div :is="component1"></div>',
//             `with(this){return _c(component1,{tag:"div"})}`
//         );
//     });

//     it('generate component with inline-template', () => {
//     // have "inline-template'"
//         assertCodegen(
//             '<my-component inline-template><p><span>hello world</span></p></my-component>',
//             `with(this){return _c('my-component',{inlineTemplate:{render:function(){with(this){return _m(0)}},staticRenderFns:[function(){with(this){return _c('p',[_c('span',[_v("hello world")])])}}]}})}`
//         );
//         // "have inline-template attrs, but not having exactly one child element
//         assertCodegen(
//             '<my-component inline-template><hr><hr></my-component>',
//             `with(this){return _c('my-component',{inlineTemplate:{render:function(){with(this){return _c('hr')}},staticRenderFns:[]}})}`
//         );
//         expect('Inline-template components must have exactly one child element.').toHaveBeenWarned();
//     });

//     it('generate static trees inside a-for', () => {
//         assertCodegen(
//             `<div><div a-for="i in 10"><p><span></span></p></div></div>`,
//             `with(this){return _c('div',_l((10),function(i){return _c('div',[_m(0,true)])}))}`,
//             [`with(this){return _c('p',[_c('span')])}`]
//         );
//     });

//     it('generate component with a-for', () => {
//     // normalize type: 2
//         assertCodegen(
//             '<div><child></child><template a-for="item in list">{{ item }}</template></div>',
//             `with(this){return _c('div',[_c('child'),_l((list),function(item){return [_v(_s(item))]})],2)}`
//         );
//     });

//     it('not specified ast type', () => {
//         const res = generate(null, baseOptions);
//         expect(res.render).toBe(`with(this){return _c("div")}`);
//         expect(res.staticRenderFns).toEqual([]);
//     });

//     it('not specified directives option', () => {
//         assertCodegen(
//             '<p a-if="show">hello world</p>',
//             `with(this){return (show)?(_c('p',[_v("hello world")])):(_e())}`,
//             {isReservedTag}
//         );
//     });

//     it('raw attr', () => {
//         assertCodegen(
//             '<img :src.raw="show">',
//             `with(this){return _c('img',{attrs:{"src":show},rawAttrsMap:{"src":true}})}`
//         );
//     });

//     it('generate value for textarea with a-model', () => {
//         assertCodegen(
//             '<textarea a-model="text" />',
//             `with(this){return _c('textarea',{directives:[{name:"model",rawName:"a-model",value:(text),expression:"text"}],domProps:{"value":(text)},on:{"input":function($event){if($event.target.composing)return;text=$event.target.value}}})}`
//         );
//     });
// });
// /* eslint-enable quotes */
