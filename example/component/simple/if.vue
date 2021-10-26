<template>
  <div @click="onClickWrap">
    <div v-if="ok">1</div>
    <div v-if="!ok">2</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data: {
      ok: true
 }
//  () {
//         return {
//             ok: true
//         };
//     },
  created() {
    this.a = 'created';
  },
  methods: {
      onClickWrap() {
          this.ok = !this.ok;
      }
  }
}
</script>