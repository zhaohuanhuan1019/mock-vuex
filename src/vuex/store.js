import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutation-types'
import { GET_NAME } from './mutation-types'

Vue.use(Vuex)

const moduleA = {
    state: { 
      count: 3,
      todos: [
        { id: 1, text: '张三', done: true },
        { id: 2, text: '李四', done: false }
      ],
      data:'我现在在等待异步获取的系统时间'
    },
    mutations: {
      [INCREMENT] (state,payload) {
        state.count+=1;
      },
      [GET_NAME] (state) {
        alert(state.todos[0].text);
      },
      gotData(state){
          state.data=new Date().toLocaleString();
      }
    },
    actions: {
      increment ({ commit }) {
        commit('INCREMENT')
      },
      incrementAsync ({ commit }) {
        setTimeout(() => {
          commit('INCREMENT')
        }, 1000)
      },
      getname_action({commit}) {
        commit ('GET_NAME')
      },
      async actionA ({ commit }) {
        commit('gotData', await getData())
      }
    },
    getters: {
      doneTodos: state => {
        return state.todos[0].text
      }
    }
}

const moduleB = {
  state: { 
      count: 0,
      list: [
        { id: 1, text: '王二', done: true },
        { id: 2, text: '麻子', done: false }
      ],
      data:'我是模块b的数据'
    },
    mutations: {
      [GET_NAME] (state) {
        alert(state.list[0].text);
      }
    },
    actions: {
      get ({ commit }) {
        setTimeout(() => {
          commit('GET_NAME')
        }, 1000)
      },
      getname_action({commit}) {
        commit ('GET_NAME')
      },
    },
    getters: {
      listDone: state => {
        return state.list[1].done;
      }
    }
}



// const state ={
//   count: 0,
//   todos: [
//     { id: 1, text: '张三', done: true },
//     { id: 2, text: '李四', done: false }
//   ],
//   data:'我现在在等待异步获取的系统时间'
// }
// const getters={
//   doneTodos: state => {
//     return state.todos.filter(todo => todo.done)
//   },
//   doneTodosCount: (state, getters) => {
//     return getters.doneTodos.length
//   }
// }
// const mutations={
//   // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
//     [INCREMENT] (state,payload) {
//       state.count+=1;
//     },
//     gotData(state){
//         state.data=new Date().toLocaleString();
//     }
// }
// const actions={
//   /*increment (context) {
//     context.commit('increment')
//   }*/

//   /* es6的写法 */
//   increment ({ commit }) {
//     commit('INCREMENT')
//   },
//   incrementAsync ({ commit }) {
//     setTimeout(() => {
//       commit('INCREMENT')
//     }, 1000)
//   },
//   async actionA ({ commit }) {
//     commit('gotData', await getData())
//   }
// }


function getData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('ok')
      resolve('ok')
    }, 1000)
  })
}
export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})