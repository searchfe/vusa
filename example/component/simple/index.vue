<template>
  <div class="wrapper" :class="[{node: 1, [name]: 1}, 'a']">
    Hello, {{ name }}! {{ message }}
    <span v-for="(item, index) in loop" :key="index">{{ item }}</span>
    <span v-for="n in 5">{{ n }}</span>
    <div style="color:red" :style="[{'font-size': '16px'}]" v-show="false"></div>
    <component :is="name ? 'div' : 'a'" @click="onClick">aaa</component>
    <div v-if="!name">no name</div>
    <div @click="onClickMixin">
        点击执行mixin，mixin值 {{ changeMixin }}
    </div>
    <child />
    <child :name="name" />
    <ref />
    <bool bool />
  </div>
</template>

<script>
import Child from './child';
import Ref from './ref';
import mixin from '../mixin';
import mixin1 from '../mixin1';
import Bool from './bool';

export default {
    props: {
        message: {
            type: String,
            default: 'default'
        }
    },
    mounted(){
        console.log('index vue mounted');
    },
    created(){
        console.log('index vue created');
    },
    mixins: [mixin, mixin1],
    data() {
        return {
            name: 'tom',
            loop: [1, 2],
            changeMixin: false,
            testMixinData: '123'
        };
    },
    components: {
        Child,
        Ref,
        Bool
    },
    methods: {
        onClick(e) {
            this.data.set('name', '');
        },
        onClickMixin() {
            this.testMixin();
        },
        testMixin() {
            console.log('this is index.vue testMixin');
        }
    }
};
</script>