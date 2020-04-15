<template>
  <div class="container">
      <div>
          <button @click="onClick(1)">修改根节点数据</button>
          <span>{{ a }}</span>
      </div>
      <div>
          <button @click="onClick(2)">数组函数 arr.push</button>
          <span>数组长度：{{ b.length }}</span>
      </div>
      <div>
          <button @click="onClick(4)">对象内key赋值</button>
          <span>{{ d.a }}</span>
      </div>
      <div>
          <button @click="onClick(3)">数组内对象赋值</button>
          <span>{{ c[0].a }}</span>
      </div>
      <div>
          <span>{{ e }}</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            a:  'hello!',
            b: [1],
            c: [{
                a: 1
            }],
            d: {
                a: 1
            }
        }
    },
    computed: {
        e() {
            console.log(this.a);
            return this.a + ' computed';
        }
    },
    mounted() {
        console.log(this.c);
    },
    methods: {
        onClick(type) {
            if (type === 1) {
                this.a = 'updated';
            }
            if (type === 2) {
                this.b.push(1);
            }
            if (type === 3) {
                this.c[0].a++;
            }
            if (type === 4) {
                this.d.a++;
            }
        }
    }
};
</script>

<style scoped lang="stylus">
.container
    margin: 10px 0
button
    margin-right: 10px
</style>