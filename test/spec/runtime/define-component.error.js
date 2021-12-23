/**
 * @file define-component spec
 * @author Sheeta(wuhayao@gmail.com)
 */

import san from 'san';
import define from '../../../src/runtime/define-component';

describe('pure san component in vusa', function () {
    it('no child', function () {
        const state = {};
        let count = {attached: 0};
        const PureSan = define({
            template: '<div>parent</div>',
            created() {
                state.created = 1;
            },
            attached() {
                state.attached = 1;
                count.attached++;
            },
            mounted() {
                state.mounted = 1;
                count.attached++;

            },
        });

        const wrap = document.createElement('div');
        document.body.appendChild(wrap);
        const pureSan = new PureSan({
            el: wrap,
        });

        expect(state.created).toBe(1);
        expect(state.attached).toBe(1);
        expect(state.mounted).toBe(1);
        expect(count.attached).toBe(2);
    });

    it('san component with san child', function () {
        const state = {
            parent: {},
            child: {},
        };
        const PureSanParent = san.defineComponent({
            template: '<div>parent</div>',
            created() {
                state.parent.created = 1;
            },
        });
        const PureSanChild = define({
            template: '<div><x-parent></x-parent>child</div>',
            components: {
                'x-parent': PureSanParent,
            },
            created() {
                state.child.created = 1;
            },
        });

        const wrap = document.createElement('div');
        document.body.appendChild(wrap);
        const pureSan = new PureSanChild({
            el: wrap,
        });

        expect(state.parent.created).toBe(1);
        expect(state.child.created).toBe(1);
    });
});
