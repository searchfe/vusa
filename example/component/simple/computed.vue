<template>
    <div>
        <span>{{msg1}}</span>
        <span>{{msg2}}</span>
    </div>
</template>

<script>
export default {
    created() {
        this.a = 'created';
    },
    computed: {
        msg2: function() {
            if (this.msg1) {
                return 'computed msg2';
            }
            return '我是computed msg2';
        },
        msg1: function() {
            return '我是computed msg1';
        }
    }
}
</script>