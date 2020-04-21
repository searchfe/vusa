/**
 * @file aNode test case
 * @author cxtom(cxtom2008@gmail.com)
 */

/* eslint-disable max-len */

import {compile} from '../../src/compiler/index';

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
            <p :class="dataA"></p>
            <p class="static"></p>
        </div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div class="{{ _mc(\'wrapper\', [\'other\']) }}"><p class="{{ _mc(\'\', dataA) }}"></p><p class="static"></p></div>');
    });

    it('merge style', async () => {
        const source = `
        <div style="color:red" v-bind:style="{'font-size': '12px'}">
            <p :style="dataA"></p>
            <p style="color:blue"></p>
        </div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div style="{{ _ms({\'color\':\'red\'}, {\'font-size\':\'12px\'} ) }}"><p style="{{ _ms(\'\', dataA) }}"></p><p style="color:blue"></p></div>');
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

    it('v-on & @', async () => {
        const source = `
        <div @click="onClick" v-on:touchstart.native="onTouchStart">
            <p @touchstop.stop.native="onTouchStop"></p>
        </div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div on-click="onClick" on-touchstart="native:onTouchStart"><p on-touchstop="stop:native:onTouchStop"></p></div>');
    });

    it('v-html', async () => {
        const source = `<div v-html="html"></div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div s-html="{{ html }}"></div>');
    });

    it('v-safe-html', async () => {
        const source = `<div v-safe-html="html"></div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div s-html="{{ _sf(html) }}"></div>');
    });

    it('v-dangerous-html', async () => {
        const source = `<div v-dangerous-html="html"></div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div s-html="{{ html }}"></div>');
    });

    it('v-text', async () => {
        const source = `<div v-text="text"></div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div>{{ text }}</div>');
    });

    it('atom', async () => {
        const source = `<div a-html="html"></div>`;
        const result = await compile(source, {atom: true});
        expect(result.template).toBe('<div s-html="{{ html }}"></div>');
    });

    it('ref', async () => {
        const source = `<div ref="root"></div>`;
        const result = await compile(source);
        expect(result.template).toBe('<div s-ref="root"></div>');
    });

    it(':ref', async () => {
        const source = `<div :ref="'root' + i"></div>`;
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
        const source = `<component :is="url ? 'a' : 'div'" :href="url"></component>`;
        const result = await compile(source);
        expect(result.template).toBe('<a href="{{ url }}" s-if="url"></a><div href="{{ url }}" s-else></div>');
    });

});

