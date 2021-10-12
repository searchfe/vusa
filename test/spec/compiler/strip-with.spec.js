import {default as compile} from '../../../src/compiler/strip-with';

describe('strip with', function () {
    it('simple', function () {
        const res = compile(`function a() {
            with (this) {
                focus = true;
            }
        }`);
        expect(res).toBe(`function a() {
  var _me = this;

  _me.focus = true;
}`);
    });

    it('function params', function () {
        const res = compile(`function a(b) {
            with (this) {
                initFocus(b, focus)
            }
        }`);
        expect(res).toBe(`function a(b) {
  var _me = this;

  _me.initFocus(b, _me.focus);
}`);
    });

    it('object property', function () {
        const res = compile(`function h(b) {
            with (this) {
                a = {c: b, d: e};
            }
        }`);
        expect(res).toBe(`function h(b) {
  var _me = this;

  _me.a = {
    c: b,
    d: _me.e
  };
}`);
    });

    it('member expression', function () {
        const res = compile(`function h(b) {
            with (this) {
                a.c = x.a.c
            }
        }`);
        expect(res).toBe(`function h(b) {
  var _me = this;

  _me.a.c = _me.x.a.c;
}`);
    });
});