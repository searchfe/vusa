/**
 * @file aNode test case
 * @author cxtom(cxtom2008@gmail.com)
 */

/* eslint-disable max-len */

import {compile} from '../../../src/compiler/index';

describe('compiler', function () {

    it('simple', async () => {
        const source = `
        <div>Hello World!</div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div>Hello World!</div>');
    });

    it('merge class', async () => {
        const source = `
        <div class="wrapper" v-bind:class="['other']">
            <p :class="dataA | aa"></p>
            <p class="static"></p>
        </div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div class="{{ [\'other\'] | _mc(\'wrapper\') }}"><p class="{{ dataA | aa | _mc(\'\') }}"></p><p class="static"></p></div>');
    });

    it('merge style', async () => {
        const source = `
        <div style="color:red" v-bind:style="{'font-size': '12px'}">
            <p :style="dataA | aa"></p>
            <p style="color:blue"></p>
        </div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div style="{{ {\'font-size\':\'12px\'} | _ms({\'color\':\'red\'}) }}"><p style="{{ dataA | aa | _ms(\'\') }}"></p><p style="color:blue"></p></div>');
    });

    it('merge bind', async () => {
        const source = `
        <div style="color:red" v-bind:data-click="dataA">
            <p data-click="a" :data-click="dataB + 'a'"></p>
            <p v-bind="objB"></p>
        </div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div style="color:red" data-click="{{ dataA }}"><p data-click="{{ dataB+\'a\' }}"></p><p s-bind="{{ objB }}"></p></div>');
    });

    it('v-if', async () => {
        const source = `
        <div>
            <p v-if="a < 0">1</p>
            <p v-else-if="a >= 0">1</p>
            <p v-else>4</p>
        </div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div><p s-if="a<0">1</p><p s-else-if="a>=0">1</p><p s-else>4</p></div>');
    });

    it('v-for', async () => {
        const source = `
        <div>
            <p v-for="(item, index) in list" :key="index">1</p>
        </div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div><p s-for="item,index in _l(list) trackBy index">1</p></div>');
    });

    it('css modules', async () => {
        const source = '<div class="cls"></div>';
        const result = await compile(source, {
            cssModules: {
                $style: {
                    cls: 'cls_xxx',
                },
            },
        });
        expect(result.template).toBe('<div class="cls_xxx"></div>');
    });

    describe('v-on & @', () => {
        it('empty value', async () => {
            const source = '<div @click=""></div>';
            const result = await compile(source);
            expect(result.template).toBe('<div></div>');

        });

        it('event value is method', async () => {
            const source = `
            <div @click="onClick" v-on:touchstart.native="onTouchStart">
                <p @touchstop.stop.native="onTouchStop"></p>
            </div>`;
            const result = await compile(source);
            expect(result.template).toBe('<div on-click="onClick" on-touchstart="native:onTouchStart"><p on-touchstop="stop:native:onTouchStop"></p></div>');
            expect(result.injectScript).toEqual({});
        });

        it('event value is inline statement', async () => {
            const source = '<div @focus="focus = true" @blur.native="focus = false"></div>';
            const result = await compile(source);
            expect(result.template).toMatch(/<div on-focus="[A-Za-z_]{4}\(\$event\)" on-blur="native:[A-Za-z_]{4}\(\$event\)"><\/div>/);
            expect(Object.keys(result.injectScript)).toEqual(['methods']);
            expect(result.injectScript.methods.length).toBe(2);
            expect(result.injectScript.methods[0]).toMatch(/[A-Za-z_]{4}\(\$event\) {with\(this\){focus = true}}/);
            expect(result.injectScript.methods[1]).toMatch(/[A-Za-z_]{4}\(\$event\) {with\(this\){focus = false}}/);
        });

        it('event value is inline statement, strip with', async () => {
            const source = '<div @focus="focus = true" @blur.native="focus = false"></div>';
            const result = await compile(source, {
                stripWith: true,
            });
            expect(result.template).toMatch(/<div on-focus="[A-Za-z_]{4}\(\$event\)" on-blur="native:[A-Za-z_]{4}\(\$event\)"><\/div>/);
            expect(Object.keys(result.injectScript)).toEqual(['methods']);
            expect(result.injectScript.methods.length).toBe(2);
            expect(result.injectScript.methods[0]).toContain('_me.focus = true;');
            expect(result.injectScript.methods[1]).toContain('_me.focus = false;');
            expect(result.injectScript.methods[1]).not.toContain('with');
        });
    });

    it('v-html', async () => {
        const source = '<div v-html="html"></div>';
        const result = await compile(source);
        expect(result.template).toBe('<div s-html="{{ _h(html) }}"></div>');
    });

    it('v-safe-html', async () => {
        const source = '<div v-safe-html="html"></div>';
        const result = await compile(source);
        expect(result.template).toBe('<div s-html="{{ _sf(html) }}"></div>');
    });

    it('v-dangerous-html', async () => {
        const source = '<div v-dangerous-html="html"></div>';
        const result = await compile(source);
        expect(result.template).toBe('<div s-html="{{ _h(html) }}"></div>');
    });

    it('v-text', async () => {
        const source = '<div v-text="text"></div>';
        const result = await compile(source);
        expect(result.template).toBe('<div>{{ text }}</div>');
    });

    it('atom', async () => {
        const source = '<div a-html="html"></div>';
        const result = await compile(source, {atom: true});
        expect(result.template).toBe('<div s-html="{{ _h(html) }}"></div>');
    });

    it('ref', async () => {
        const source = '<div ref="root"></div>';
        const result = await compile(source);
        expect(result.template).toBe('<div s-ref="root"></div>');
    });

    it(':ref', async () => {
        const source = '<div :ref="\'root\' + i"></div>';
        const result = await compile(source);
        expect(result.template).toBe('<div s-ref="{{ \'root\' + i }}"></div>');
    });

    it('strip static attr', async () => {
        const source = `<div class="a
            p"></div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div class="a p"></div>');
    });

    it('dynamic component', async () => {
        const source = '<component :is="url ? \'a\' : \'div\'" :href="url"></component>';
        const result = await compile(source);
        expect(result.template).toBe('<component href=\"{{ url }}\" s-is=\"url?\'a\':\'div\'\"></component>');
    });

    it('template', async () => {
        const source = '<template><div></div></template>';
        const result = await compile(source);
        expect(result.template).toBe('<fragment><div></div></fragment>');
    });

    it('transition', async () => {
        const source = '<transition name="fade"><div v-if="ok"></div></transition>';
        const result = await compile(source);
        expect(result.template).toBe('<fragment><div s-if="ok" s-transition=\"_t({name:\'fade\'})\"></div></fragment>');
    });

    it('combine text', async () => {
        const source = '<div>{{ a }}xx{{ b + \'a\' }}<span></span>112\'323{{ c }}</div>';
        const result = await compile(source);
        expect(result.template).toBe('<div>{{ a | _cat(\'xx\') | _cat(b + \'a\') }}<span></span>{{ \'112\\\'323\' | _cat(c) }}</div>');
    });

});
