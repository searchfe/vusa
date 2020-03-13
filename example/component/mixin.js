/**
 * @file mixin.js
 * @author donghualei
 */

export default {
    methods: {
        testMixin() {
            this.data.set('changeMixin', !this.data.get().changeMixin);
        }
    },
    mounted() {
        console.log('mixin created');
    },
    created() {
        console.log('mixin created');
    }
};
