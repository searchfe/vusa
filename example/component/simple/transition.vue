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
        <!-- <transition>
            <div v-if="ok" class="test">
                foo
            </div>
        </transition> -->
    </div>
</template>

<script>
import Child from './child';

export default {
    data() {
        return {
            show: true,
            ok: true
        };
    },
    components: {
        Child
    },
    methods: {
        onClick() {
            this.ok = !this.ok;
            this.show = !this.show;
        },
        onEnter() {

        }
    }
};
</script>

<style lang="stylus">
.test {
    -webkit-transition: opacity 5000ms ease;
    transition: opacity 5000ms ease;
}

.group-move {
    -webkit-transition: -webkit-transform 5000ms ease;
    transition: transform 5000ms ease;
}

.a-appear, .v-enter, .v-leave-active,
.test-appear, .test-enter, .test-leave-active,
.hello, .bye.active,
.changed-enter {
    opacity: 0;
}
.test-anim-enter-active {
    animation: test-enter 5000ms;
    -webkit-animation: test-enter 5000ms;
}
.test-anim-leave-active {
    animation: test-leave 5000ms;
    -webkit-animation: test-leave 5000ms;
}
.test-anim-long-enter-active {
    animation: test-enter 10000ms;
    -webkit-animation: test-enter 10000ms;
}
.test-anim-long-leave-active {
    animation: test-leave 10000ms;
    -webkit-animation: test-leave 10000ms;
}
@keyframes test-enter {
    from { opacity: 0 }
    to { opacity: 1 }
}
@-webkit-keyframes test-enter {
    from { opacity: 0 }
    to { opacity: 1 }
}
@keyframes test-leave {
    from { opacity: 1 }
    to { opacity: 0 }
}
@-webkit-keyframes test-leave {
    from { opacity: 1 }
    to { opacity: 0 }
}
</style>