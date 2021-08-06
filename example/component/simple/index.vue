<template>
  <div class="wrapper" :class="[{node: 1, [name]: 1}, 'a']">
    Hello, {{ name }}! {{ message }}
    <span v-for="(item, index) in loop" :key="index">{{ item }}</span>
    <span v-for="n in 5">{{ n }}</span>
    <div style="color:red" :style="[{'font-size': '16px'}]" v-show="false"></div>
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
    },
    methods: {
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