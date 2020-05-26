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
          <span>{{ d.a }}</span><child :name="x.name" /><span>{{ xName }}</span>
      </div>
      <div>
          <button @click="onClick(3)">数组内对象赋值</button>
          <span>{{ c[0].a }}</span>
      </div>
      <div>
          <span>computed: {{ e }}</span>
      </div>
      <div>
          <span>computed: {{ f }}</span>
      </div>
      <div>
          <span>computed: {{ g }}</span>
      </div>
      <div>
          <span>computed: {{ h }}</span>
      </div>
  </div>
</template>

<script>
import Child from './child';

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
            },
            x: {
                name: 'xxx'
            }
        }
    },
    components: {
        Child
    },
    computed: {
        e() {
            return this.a;
        },
        f() {
            return this.b.length;
        },
        g() {
            return this.d.a;
        },
        h() {
            return this.c[0].a;
        },
        xName() {
            return this.x.name;
        }
    },
    mounted() {
        // console.log(this.c);
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
                this.x.name = 'xxx' + this.d.a;
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