<template>
    <div id="demo">
        <button @click="onClick">
            动画
        </button>
        <transition name="fade" @enter="onEnter">
            <p v-if="show">hello</p>
        </transition>
        <transition name="fade" @enter="onEnter">
            <child v-if="!show"></child>
        </transition>
    </div>
</template>

<script>
import Child from './child';

export default {
    data() {
        return {
            show: true
        };
    },
    components: {
        Child
    },
    methods: {
        onClick() {
            console.log(this);
            this.show = !this.show;
        },
        onEnter() {

        }
    }
};
</script>