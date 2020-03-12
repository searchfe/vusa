/**
 * @file mixin1.js
 * @author donghualei
 */

export default {
    created() {
        console.log('mixin1 created');
    },
    mounted() {
        console.log('mixin1 mounted');
    },
    methods: {
        testMixin() {
            console.log('this is mixin1.js testMixin');
        }
    }
};
