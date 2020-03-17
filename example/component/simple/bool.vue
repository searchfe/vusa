<template>
  <div><span v-if="bool">是true</span></div>
</template>

<script>
export default {
    props: {
        bool: Boolean
    },
    mounted() {
        console.log(this.bool);
    }
}
</script>
