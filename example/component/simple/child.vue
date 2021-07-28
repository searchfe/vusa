<template>
  <div>child {{ name }} {{ a }} {{ $root.message }}</div>
</template>

<script>
export default {
  props: {
    name: String
  },
  created() {
    this.a = 'created';
  }
}
</script>