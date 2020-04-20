/**
 * @file aNode test case
 * @author cxtom(cxtom2008@gmail.com)
 */

/* eslint-disable max-len */

import transform from '../../src/compiler/expression-transformer';
import {parseExpr} from 'san';

describe('compiler', function () {

    it('filter', () => {
        expect(transform('a | b').code).toBe('a | b');
        expect(transform('a | b(1,a)').code).toBe('a | b(1, a)');
        expect(transform('a | b(c) | d').code).toBe('a | b(c) | d');
    });

    it('member', () => {
        expect(transform('a.b').code).toBe('a.b');
        expect(transform('a.b[1]').code).toBe('a.b[1]');
        expect(transform('a.b[\'c\']').code).toBe('a.b[\'c\']');
        expect(transform('"22".length').code).toBe('2');
    });

    it('binary & logical & unary', () => {
        expect(transform('a + 1').code).toBe('a+1');
        expect(transform('(a + 1) * 3').code).toBe('(a+1)*3');
        expect(transform('(a + 1) * (3 + b)').code).toBe('(a+1)*(3+b)');
        expect(transform('a && (b || c)').code).toBe('a&&(b||c)');
        expect(transform('!a').code).toBe('!a');
        expect(transform('6 + 1').code).toBe('7');
        expect(transform('1 && 0').code).toBe('0');
        expect(transform('-9 + 1').code).toBe('-8');
    });

    it('conditional', () => {
        expect(transform('a ? b : c').code).toBe('a?b:c');
        expect(transform('a ? b : (c + d)').code).toBe('a?b:(c+d)');
        expect(transform('false ? a : b').code).toBe('b');
    });

    it('call', () => {
        expect(transform('_mc(\'a\')').code).toBe('_mc(\'a\')');
        expect(transform('_ms()').code).toBe('_ms()');
        expect(transform('_ms(\'a\', {a: 1})').code).toBe('_ms(\'a\', {a:1} )');
    });

    it('array', () => {
        expect(transform('[]').code).toBe('[]');
        expect(transform('[f,g]').code).toBe('[f, g]');
    });

    it('template string', () => {
        expect(transform('`a${c}d`').code).toBe('(\'a\'+c+\'d\')');
        expect(transform('`a${c+1}d`').code).toBe('(\'a\'+(c+1)+\'d\')');
    });

    it('object', () => {
        expect(transform('{a: 1,\n\'b\': 2}').code).toBe('{a:1,\'b\':2} ');
        let source = `{
            a: 1,
            d: 2,
            [b]: c === 0,
            [a+1]: d
        }`;
        expect(transform(source).code).toBe('_ex({a:1,d:2},_ocp([{k:b,v:c===0},{k:a+1,v:d}]))');
        source = `{
            [b]: c === 0,
            [a+1]: d,
            a: 1,
            d: 2
        }`;
        expect(transform(source).code).toBe('_ex(_ocp([{k:b,v:c===0},{k:a+1,v:d}]),{a:1,d:2})');
        source = `{
            [b]: c === 0,
            a: 1,
            [a+1]: d,
            d: 2
        }`;
        expect(transform(source).code).toBe('_ex(_ocp([{k:b,v:c===0}]),{a:1},_ocp([{k:a+1,v:d}]),{d:2})');
        source = `{
            a: 1,
            [a+1]: d,
            d: 2,
            [b]: c === 0
        }`;
        expect(transform(source).code).toBe('_ex({a:1},_ocp([{k:a+1,v:d}]),{d:2},_ocp([{k:b,v:c===0}]))');

        source = `{
            aa
        }`;
        expect(transform(source).code).toBe('{aa:aa} ');

        source = `a({
            aa
        })`;
        expect(transform(source).code).toBe('a({aa:aa} )');
    });

});

