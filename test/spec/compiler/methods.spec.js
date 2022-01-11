/**
 * @file compiler methods
 * @author donghualei
 */

/* eslint-disable max-len */

import {compile} from '../../../src/compiler/index';

describe('compiler', function () {

    it('event value is method', async () => {
        const source = `
            <div>
                <div a-html="aHighlight('摘要')">
                </div>
                <div class="test c-color" :style="{width}" @click="handleClick" foo="bar">
                </div>
                <component a-if="flag" :is="getName()"></component>
                <div a-for="(item, index) in list" :key="index"></div>
                <div @click.native="miniLoaded = 3"></div>
            </div>
        `;
        const result = await compile(source, {atom: true});
        // TODO: 内联函数不识别，没有括号的函数不识别
        expect(result.methodsList).toEqual(['aHighlight', 'getName']);
    });
});
