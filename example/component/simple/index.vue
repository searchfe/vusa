<template>
  <div class="wrapper">
    Hello, {{ name }}! {{ message }}
    <span v-for="(item, index) in loop" :key="index">{{ item }}</span>
    <span v-for="n in 5">{{ n }}</span>
    <div style="color:red" :style="[{'font-size': '16px'}]" v-show="false">11</div>
    <div style="color:green" :style="[{'font-size': '16px'}]" v-show="true">11</div>
    <component :is="name ? 'button' : 'a'" @click="onClick">aaa</component>
    <div v-if="!name">no name</div>
    <div @click="onClickMixin">
        点击执行mixin，mixin值 {{ changeMixin }}
    </div>
    <child />
    <child :name="name" />
    <ref />
    <bool bool />
    <reactive />
    <ssolt></ssolt>
    <ssolt>default slot in main</ssolt>
    <ssolt><span slot="x">slot x in main</span>default</ssolt>
    <ssolt><child slot="y" name="slot y"></child></ssolt>
    <wrapper></wrapper>
    <e-trans></e-trans>
    <e-trans-group></e-trans-group>
    <el-trans-object></el-trans-object>
    <a-sync :name="'async'"></a-sync>
    <methods/>
    <methods-on @change-data="changeDataA"/>
    <computed></computed>
  </div>
</template>

<script>
import Child from './child';
import Ref from './ref';
import mixin from '../mixin';
import mixin1 from '../mixin1';
import Bool from './bool';
import Reactive from './reactive';
import Slot from './slot';
import Transition from './transition';
import TransitionGroup from './transition-group';
import Methods from './methods'
import MethodsOn from './methods-on'
import TransitionObject from './transition-object';
import Computed from './computed';

export default {
    props: {
        message: {
            type: String,
            default: 'default'
        }
    },
    mounted() {
        console.log('index vue mounted');
        console.log(this);
    },
    created() {
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
        Bool,
        Reactive,
        ssolt: Slot,
        'e-trans': Transition,
        'e-trans-group': TransitionGroup,
        'a-sync': function (resolve) {
            import('./async.vue').then(c => resolve(c.default));
        },
        Methods,
        MethodsOn,
        computed: Computed,
        'el-trans-object': TransitionObject
    },
    methods: {
        changeDataA(value1, value2) {
            console.log('收到emit', value1, value2)
        },
        onClick(e) {
            this.name = '';
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