// import {parse} from 'compiler/parser/index';
// import {optimize} from 'compiler/optimizer';
// import {baseOptions} from 'web/compiler/index';

// describe('optimizer', () => {
//     it('simple', () => {
//         const ast = parse('<h1 id="section1"><span>hello world</span></h1>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(true); // h1
//         expect(ast.staticRoot).toBe(true);
//         expect(ast.children[0].static).toBe(true); // span
//     });

//     it('skip simple nodes', () => {
//         const ast = parse('<h1 id="section1">hello</h1>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(true);
//         expect(ast.staticRoot).toBe(false); // this is too simple to warrant a static tree
//     });

//     it('interpolation', () => {
//         const ast = parse('<h1>{{msg}}</h1>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false); // h1
//         expect(ast.children[0].static).toBe(false); // text node with interpolation
//     });

//     it('nested elements', () => {
//         const ast = parse('<ul><li>hello</li><li>world</li></ul>', baseOptions);
//         optimize(ast, baseOptions);
//         // ul
//         expect(ast.static).toBe(true);
//         expect(ast.staticRoot).toBe(true);
//         // li
//         expect(ast.children[0].static).toBe(true); // first
//         expect(ast.children[1].static).toBe(true); // second
//         // text node inside li
//         expect(ast.children[0].children[0].static).toBe(true); // first
//         expect(ast.children[1].children[0].static).toBe(true); // second
//     });

//     it('nested complex elements', () => {
//         const ast = parse('<ul><li>{{msg1}}</li><li>---</li><li>{{msg2}}</li></ul>', baseOptions);
//         optimize(ast, baseOptions);
//         // ul
//         expect(ast.static).toBe(false); // ul
//         // li
//         expect(ast.children[0].static).toBe(false); // first
//         expect(ast.children[1].static).toBe(true); // second
//         expect(ast.children[2].static).toBe(false); // third
//         // text node inside li
//         expect(ast.children[0].children[0].static).toBe(false); // first
//         expect(ast.children[1].children[0].static).toBe(true); // second
//         expect(ast.children[2].children[0].static).toBe(false); // third
//     });

//     it('a-if directive', () => {
//         const ast = parse('<h1 id="section1" a-if="show">hello world</h1>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false);
//         expect(ast.children[0].static).toBe(true);
//     });

//     it('a-else directive', () => {
//         const ast = parse('<div><p a-if="show">hello world</p><p a-else>foo bar</p></div>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false);
//         expect(ast.children[0].static).toBe(false);
//         expect(ast.children[0].ifConditions[1].block.static).toBeUndefined();
//     });

//     it('a-pre directive', () => {
//         const ast = parse('<ul a-pre><li>{{msg}}</li><li>world</li></ul>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(true);
//         expect(ast.staticRoot).toBe(true);
//         expect(ast.children[0].static).toBe(true);
//         expect(ast.children[1].static).toBe(true);
//         expect(ast.children[0].children[0].static).toBe(true);
//         expect(ast.children[1].children[0].static).toBe(true);
//     });

//     it('a-for directive', () => {
//         const ast = parse('<ul><li a-for="item in items">hello world {{$index}}</li></ul>', baseOptions);
//         optimize(ast, baseOptions);
//         // ul
//         expect(ast.static).toBe(false);
//         // li with a-for
//         expect(ast.children[0].static).toBe(false);
//         expect(ast.children[0].children[0].static).toBe(false);
//     });

//     it('a-once directive', () => {
//         const ast = parse('<p a-once>{{msg}}</p>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false); // p
//         expect(ast.children[0].static).toBe(false); // text node
//     });

//     it('single slot', () => {
//         const ast = parse('<div><slot>hello</slot></div>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.children[0].static).toBe(false); // slot
//         expect(ast.children[0].children[0].static).toBe(true); // text node
//     });

//     it('named slot', () => {
//         const ast = parse('<div><slot name="one">hello world</slot></div>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.children[0].static).toBe(false); // slot
//         expect(ast.children[0].children[0].static).toBe(true); // text node
//     });

//     it('slot target', () => {
//         const ast = parse('<p slot="one">hello world</p>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false); // slot
//         expect(ast.children[0].static).toBe(true); // text node
//     });

//     it('component', () => {
//         const ast = parse('<my-component></my-component>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false); // component
//     });

//     it('component for inline-template', () => {
//         const ast = parse('<my-component inline-template><p>hello world</p><p>{{msg}}</p></my-component>', baseOptions);
//         optimize(ast, baseOptions);
//         // component
//         expect(ast.static).toBe(false); // component
//         // p
//         expect(ast.children[0].static).toBe(true); // first
//         expect(ast.children[1].static).toBe(false); // second
//         // text node inside p
//         expect(ast.children[0].children[0].static).toBe(true); // first
//         expect(ast.children[1].children[0].static).toBe(false); // second
//     });

//     it('class binding', () => {
//         const ast = parse('<p :class="class1">hello world</p>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false);
//         expect(ast.children[0].static).toBe(true);
//     });

//     it('style binding', () => {
//         const ast = parse('<p :style="error">{{msg}}</p>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false);
//         expect(ast.children[0].static).toBe(false);
//     });

//     it('key', () => {
//         const ast = parse('<p key="foo">hello world</p>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false);
//         expect(ast.children[0].static).toBe(true);
//     });

//     it('ref', () => {
//         const ast = parse('<p ref="foo">hello world</p>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false);
//         expect(ast.children[0].static).toBe(true);
//     });

//     it('transition', () => {
//         const ast = parse('<p a-if="show" transition="expand">hello world</p>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false);
//         expect(ast.children[0].static).toBe(true);
//     });

//     it('a-bind directive', () => {
//         const ast = parse('<input type="text" name="field1" :value="msg">', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false);
//     });

//     it('a-on directive', () => {
//         const ast = parse('<input type="text" name="field1" :value="msg" @input="onInput">', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false);
//     });

//     it('custom directive', () => {
//         const ast = parse('<form><input type="text" name="field1" :value="msg" a-validate:field1="required"></form>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.static).toBe(false);
//         expect(ast.children[0].static).toBe(false);
//     });

//     it('not root ast', () => {
//         const ast = null;
//         optimize(ast, baseOptions);
//         expect(ast).toBe(null);
//     });

//     it('not specified isReservedTag option', () => {
//         const ast = parse('<h1 id="section1">hello world</h1>', baseOptions);
//         optimize(ast, {});
//         expect(ast.static).toBe(false);
//     });

//     it('mark static trees inside a-for', () => {
//         const ast = parse('<div><div a-for="i in 10"><p><span>hi</span></p></div></div>', baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.children[0].children[0].staticRoot).toBe(true);
//         expect(ast.children[0].children[0].staticInFor).toBe(true);
//     });

//     it('mark static trees inside a-for with nested a-else and a-once', () => {
//         const ast = parse(`
//       <div a-if="1"></div>
//       <div a-else-if="2">
//         <div a-for="i in 10" :key="i">
//           <div a-if="1">{{ i }}</div>
//           <div a-else-if="2" a-once>{{ i }}</div>
//           <div a-else a-once>{{ i }}</div>
//         </div>
//       </div>
//       <div a-else>
//         <div a-for="i in 10" :key="i">
//           <div a-if="1">{{ i }}</div>
//           <div a-else a-once>{{ i }}</div>
//         </div>
//       </div>
//       `, baseOptions);
//         optimize(ast, baseOptions);
//         expect(ast.ifConditions[1].block.children[0].children[0].ifConditions[1].block.staticRoot).toBe(false);
//         expect(ast.ifConditions[1].block.children[0].children[0].ifConditions[1].block.staticInFor).toBe(true);

//         expect(ast.ifConditions[1].block.children[0].children[0].ifConditions[2].block.staticRoot).toBe(false);
//         expect(ast.ifConditions[1].block.children[0].children[0].ifConditions[2].block.staticInFor).toBe(true);

//         expect(ast.ifConditions[2].block.children[0].children[0].ifConditions[1].block.staticRoot).toBe(false);
//         expect(ast.ifConditions[2].block.children[0].children[0].ifConditions[1].block.staticInFor).toBe(true);
//     });
// });
