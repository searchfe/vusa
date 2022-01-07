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
                <div class="test">
                </div>
            </div>
        `;
        const result = await compile(source);
        expect(result.methodsList).toEqual(['aHighlight']);
    });
});
