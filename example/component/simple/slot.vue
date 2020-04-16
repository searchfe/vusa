<template>
  <div>
      <slot name="x">slot x</slot>
      <slot>default slot</slot>
      <slot v-for="n in 2" name="y"></slot>
  </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots, this);
    }
};
</script>