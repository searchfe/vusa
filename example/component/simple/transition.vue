<template>
    <div id="demo">
        <button @click="onClick">
            Toggle
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
            this.show = !this.show;
        },
        onEnter() {

        }
    }
};
</script>