<template>
  <div id="list-demo">
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
        {{ item }}
        </span>
    </transition-group>
    <button v-on:click="shuffle">Shuffle</button>
    <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item">
        {{ item }}
        </li>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
    data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10
        };
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.items.length)
        },
        add() {
            const rn = this.randomIndex();
            this.items.splice(rn, 0, this.nextNum++)
            console.log(this.items);
        },
        remove() {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle() {
            this.items = _.shuffle(this.items)
        }
    }
};
</script>

<style lang="stylus">
.list-item {
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}
.flip-list-move {
  transition: transform 1s;
}
</style>