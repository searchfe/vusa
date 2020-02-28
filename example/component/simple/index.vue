<template>
  <div class="wrapper" :class="[{node: 1}, 'a']">
    Hello, {{ name }}! {{ message }}
    <p v-for="(item, index) in loop" :key="index">{{ item }}</p>
    <p v-for="n in 5">{{ n }}</p>
    <div style="color:red" :style="[{'font-size': '16px'}]" v-show="false"></div>
    <child />
  </div>
</template>

<script>
import Child from './child';

export default {
    props: {
        message: String
    },
    data() {
        return {
            name: 'tom',
            loop: [1, 2]
        };
    },
    components: {
        Child
    }
};
</script>