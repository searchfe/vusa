<template>
  <div>
	  <div>methods-on: {{a}}</div>
	  <button @click="emitFn">触发emit</button>
  </div>
</template>

<script>
export default {
	data() {
		return {
			a: {}
		}
	},
	methods: {
		emitFn() {
			this.$emit('change-data', 'ngaiwe', 'ngaiwe2');
		}
	}
}
</script>