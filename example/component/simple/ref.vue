<template>
  <div ref="wrapper">
      <p ref="line">一句话。</p>
      <span v-for="n in 3" :key="n" ref="loop">{{ n }}</span>
  </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$refs.wrapper);
        console.log(this.$refs.line);
        console.log(this.$refs.loop);
    }
};
</script>