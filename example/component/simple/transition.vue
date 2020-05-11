<template>
    <div id="demo">
        <button @click="onClick">
            Toggle
        </button>
        <transition name="fade" @enter="onEnter">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        };
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