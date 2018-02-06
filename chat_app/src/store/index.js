import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let chatData = [
  {
    contact_id: 232,
    contact_name: 'dsda',
    last_chat: '你的：dasd大萨达打豆豆撒多所大奥',
    unread: {
      state: true,
      num: 70
    }
  },
  {
    contact_id: 321,
    contact_name: '大萨达撒',
    last_chat: '你的：大的负担',
    unread: {
      state: false,
      num: 0
    }
  },
  {
    contact_id: 23,
    contact_name: '发的发生发的',
    last_chat: '你的：讽德诵功ff的撒旦撒ddds',
    unread: {
      state: true,
      num: 100
    }
  }
]

let store = new Vuex.Store({
  state: {
    'chatData': chatData
  }
})

export default store
