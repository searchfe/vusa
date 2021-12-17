/* eslint-disable no-undef */

import Vue from '../../../helpers/vue';

describe('activated and deactivated', () => {
    it('works', done => {

        const activatedSpy = jasmine.createSpy();
        const deactivatedSpy = jasmine.createSpy();
        const childDeactivatedSpy = jasmine.createSpy();
        const child2ActivatedSpy = jasmine.createSpy();
        const vm = new Vue({
            template: `
                <div>
                    <child1></child1>
                    <child2></child2>
                </div>
            `,
            components: {
                child1: {
                    data() {},
                    template: '<div>child1</div>',
                    deactivated: childDeactivatedSpy,
                },
                child2: {
                    data() {},
                    template: '<div>child2</div>',
                    activated: child2ActivatedSpy,
                },
            },
            activated: activatedSpy,
            deactivated: deactivatedSpy,
        }).$mount();
        vm.$deactivate(true);
        waitForUpdate(() => {
            expect(deactivatedSpy).toHaveBeenCalled();
            expect(childDeactivatedSpy).toHaveBeenCalled();
            vm.$activate(true);
        }).then(() => {
            expect(activatedSpy).toHaveBeenCalled();
            expect(child2ActivatedSpy).toHaveBeenCalled();
        }).then(done);
    });

    it('activated child and parent', done => {
        const activatedSpy = jasmine.createSpy();
        const deactivatedSpy = jasmine.createSpy();
        const childDeactivatedSpy = jasmine.createSpy();
        const childActivatedSpy = jasmine.createSpy();

        const vm = new Vue({
            template: `
                <div>
                    <child1></child1>
                </div>
            `,
            components: {
                child1: {
                    data() {},
                    template: '<div>child1</div>',
                    deactivated: childDeactivatedSpy,
                    activated: childActivatedSpy,
                },
            },
            activated: activatedSpy,
            deactivated: deactivatedSpy,
        }).$mount();
        vm.$deactivate(true);
        vm.$children[0].$deactivate(true);
        waitForUpdate(() => {
            expect(childDeactivatedSpy).toHaveBeenCalled();
            expect(childDeactivatedSpy.calls.count()).toBe(1);
            vm.$deactivate(true);
        }).then(() => {
            expect(childDeactivatedSpy.calls.count()).toBe(1);
            vm.$activate(true);
        }).then(() => {
            vm.$children[0].$activate(true);
        }).then(() => {
            expect(childActivatedSpy.calls.count()).toBe(1);
            expect(activatedSpy.calls.count()).toBe(1);
        }).then(done);
    });

    it('activated child and parent', done => {
        const activatedSpy = jasmine.createSpy();
        const deactivatedSpy = jasmine.createSpy();
        const childDeactivatedSpy = jasmine.createSpy();
        const childActivatedSpy = jasmine.createSpy();

        const vm = new Vue({
            template: `
                <div>
                    <child1></child1>
                </div>
            `,
            components: {
                child1: {
                    data() {},
                    template: '<div>child1</div>',
                    deactivated: childDeactivatedSpy,
                    activated: childActivatedSpy,
                },
            },
            activated: activatedSpy,
            deactivated: deactivatedSpy,
        }).$mount();
        vm.$activate(true);
        vm.$children[0].$activate(true);
        waitForUpdate(() => {
            expect(activatedSpy).toHaveBeenCalled();
            expect(activatedSpy.calls.count()).toBe(1);
            vm.$deactivate(true);
        }).then(() => {
            expect(deactivatedSpy.calls.count()).toBe(1);
            expect(childDeactivatedSpy.calls.count()).toBe(1);
            vm.$children[0].$activate(true);
        }).then(() => {
            expect(activatedSpy.calls.count()).toBe(1);
        }).then(done);
    });
});
