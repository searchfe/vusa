<template>
  <div>child {{ name }} {{ a }}</div>
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