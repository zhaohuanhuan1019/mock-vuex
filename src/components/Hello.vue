<template>
  <div class="hello">
    <div class="vuex-warpper">
        <div>{{count}}</div><hr/>
        <button @click="add">在组件中提交 Mutations增加1</button><hr/>
        <div>{{countAlias}}</div><hr/>
        <div>{{countPlusLocalState}}</div> <hr/>
        <div>{{count2}}</div> <hr/>
        <div>{{doneTodos}}</div><hr/>
        <div>{{listDone}}</div><hr/>
        <button @click="add2">在组件中分发 Action添加2</button><hr/>
        <button @click="add3">组合 Actions添加3</button><hr/>
        <div class="color">{{data}}</div><hr/>
        <button @click="get_name">get_name</button><hr/>
    </div>
   
  </div>
</template>

<script>
import mock from './mock'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'


export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      localCount:'好风景'
    }
  },
  computed:{
    //(组件仍然保有局部状态)使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。
    ...mapState({
      count: state => state.a.count, // 箭头函数可使代码更简练,等同于‘count(state){return state.count;}’这种写法
      countAlias: state => state.a.count, // 传字符串参数 'count' 等同于 `state => state.count`
      countPlusLocalState (state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        return state.b.data + "====" +this.localCount
      },
      data: state => state.a.data,
    }),
    ...mapGetters([
      'doneTodos',
      'listDone'
      // ...
    ]),
    count2(){
      return '我是count2的数据'
    }
  },
  methods:{
    ...mapMutations({
      add: 'INCREMENT',
      get_name: 'GET_NAME'
    }),
    ...mapActions({
      add2: 'increment', // 映射 this.add() 为 this.$store.dispatch('increment')
      add3: 'actionA',
      // get_name: 'getname_action'
    })
  },
  mounted(){
    // this.$store.dispatch('increment')
    // console.log(this.$store.mutations.a.GET_NAME)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }
}

.vuex-warpper{
  width: 500px;
  height: 500px;
  border:1px solid red;
  margin: 0 auto;
  .color{
    color:#ccc;
  }
}


</style>
