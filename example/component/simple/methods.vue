<template>
  <div>
	  <div>methods-data: {{a.age.msg}}</div>
	  <button @click="changeDataFn">改变data</button>
	  <button @click="delDataFn">删除data</button>
	  <button @click="showDataFn">查看data</button>
  </div>
</template>

<script>
export default {
	data() {
		return {
			a: {
				age: {
					name: 'weiran'
				}
			}
		}
	},
	watch: {
		'a.age': {
			handler(newValue, oldValue) {
				console.log('watch-change:', newValue, oldValue);
			},
			immediate: true
		},
		'a.age.name': {
			handler: 'setWatch'
		}
	},
	methods: {
		setWatch(oldValue, newValue) {
			console.log('进入监听', oldValue, newValue);
		},
		changeDataFn() {
			this.$set(this.a.age, 'name', 'hello');
		},
		delDataFn() {
			this.$delete(this.a.age, 'msg');
		},
		showDataFn() {
			console.log(this.a);
		}
	}
}
</script>