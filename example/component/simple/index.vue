<template>
  <div class="wrapper" :class="[{node: 1}, 'a']">
    Hello, {{ name }}! {{ message }}
    <p v-for="(item, index) in loop" :key="index">{{ item }}</p>
    <p v-for="n in 5">{{ n }}</p>
    <div style="color:red" :style="[{'font-size': '16px'}]" v-show="false"></div>
    <c-component :is="name ? 'div' : 'a'" @click="onClick">aaa</c-component>
    <div v-if="!name">no name</div>
    <child />
    <ui-ref />
  </div>
</template>

<script>
import Child from './child';
import Ref from './ref';

export default {
    props: {
        message: {
            type: String,
            default: 'default'
        }
    },
    data() {
        return {
            name: 'tom',
            loop: [1, 2]
        };
    },
    components: {
        Child,
        'ui-ref': Ref
    },
    methods: {
        onClick(e) {
            this.data.set('name', '');
        }
    }
};
</script>