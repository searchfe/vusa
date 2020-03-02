/**
 * @file aNode test case
 * @author cxtom(cxtom2008@gmail.com)
 */

/* eslint-disable max-len */

import parseTemplate from 'san/src/parser/parse-template';
import compile from '../../src/compiler/index';
import { isExportDeclaration } from 'typescript';

function print(node) {
    console.log(JSON.stringify(node, null, 2));
}

describe('compiler', function () {

    it('simple', async () => {
        const source = `
        <div>Hello World!</div>`;
        const result = await compile(source);
        expect(result.code).toBe('<div>Hello World!</div>');
    });

    it('merge class', async () => {
        const source = `
        <div class="wrapper" v-bind:class="['other']">
            <p :class="dataA"></p>
            <p class="static"></p>
        </div>`;
        const result = await compile(source);
        expect(result.code).toBe('<div class="{{ _mc(\'wrapper\', [\'other\']) }}"><p class="{{ _mc(\'\', dataA) }}"></p><p class="static"></p></div>');
    });

    it('merge style', async () => {
        const source = `
        <div style="color:red" v-bind:style="{'font-size': '12px'}">
            <p :style="dataA"></p>
            <p style="color:blue"></p>
        </div>`;
        const result = await compile(source);
        expect(result.code).toBe('<div style="{{ _ms({\'color\':\'red\'}, {\'font-size\': \'12px\'}) }}"><p style="{{ _ms(\'\', dataA) }}"></p><p style="color:blue"></p></div>');
    });

    it('merge bind', async () => {
        const source = `
        <div style="color:red" v-bind:data-click="dataA">
            <p data-click="a" :data-click="dataB + 'a'"></p>
            <p v-bind="objB"></p>
        </div>`;
        const result = await compile(source);
        expect(result.code).toBe('<div style="color:red" data-click="{{ dataA }}"><p data-click="{{ dataB + \'a\' }}"></p><p s-bind="{{ objB }}"></p></div>');
    });

    it('v-if', async () => {
        const source = `
        <div>
            <p v-if="a < 0">1</p>
            <p v-else-if="a >= 0">1</p>
            <p v-else>4</p>
        </div>`;
        const result = await compile(source);
        expect(result.code).toBe('<div><p s-if="a < 0">1</p><p s-else-if="a >= 0">1</p><p s-else>4</p></div>');
    });

    it('v-on & @', async () => {
        const source = `
        <div @click="onClick" v-on:touchstart.native="onTouchStart">
            <p @touchstop.stop.native="onTouchStop"></p>
        </div>`;
        const result = await compile(source);
        expect(result.code).toBe('<div on-click=":onClick" on-touchstart="native:onTouchStart"><p on-touchstop="stop:native:onTouchStop"></p></div>');
    });

});

