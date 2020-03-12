<template>
  <div>child {{ name }}</div>
</template>

<script>
export default {
  props: {
    name: String
  },
  beforeMount() {
    console.log(this);
  }
}
</script>