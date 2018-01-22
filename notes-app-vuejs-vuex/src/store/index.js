import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var notesData = []
var store = new Vuex.Store({
  state: {
    notesData,
    when_content: '',
    preview: 'all',
    choose_id: '',
    count: 0,
    oldID: 0,
    title: '',
    format (data) {
      return data > 9 ? data : '0' + data
    }
  },
  mutations: {
    change_like (state, payLoad) {
      var dates = state.notesData.find(items => items.id === payLoad.id)
      if (dates.favorite) {
        dates.favorite = false
      } else {
        dates.favorite = true
      }
    },
    show_full_content (state, payLoad) {
      var choose = state.notesData.find(items => items.id === payLoad.id)
      state.when_content = choose.content
      state.title = choose.title
      state.choose_id = payLoad.id
      state.oldID = payLoad.id
    },
    change_preview (state, payLoad) {
      state.preview = payLoad.view
    },
    del (state, payLoad) {
      var datas = state.notesData
      if (datas.length === 1) {
        state.choose_id = ''
        state.when_content = ''
        state.title = ''
        state.oldID = 0
      }
      datas.forEach((e, index) => {
        if (e.id === payLoad.id) {
          state.notesData.splice(index, 1)
          return false
        }
      })
    },
    add (state, payLoad) {
      var datas = state.notesData
      var NowDate = new Date()
      var time = NowDate.getFullYear() + '-' + state.format(NowDate.getMonth() + 1) + '-' + state.format(NowDate.getDate()) + ' ' + state.format(NowDate.getHours()) + ':' + state.format(NowDate.getMinutes()) + ':' + state.format(NowDate.getSeconds())
      datas.forEach((e) => {
        e.choose = false
      })
      var len = state.count += 1
      state.notesData.push({
        id: len,
        title: 'Unnamed title',
        content: 'New Notes',
        favorite: false,
        time: time
      })
      state.when_content = 'New Notes'
      state.choose_id = len
      state.title = 'Unnamed title'
      state.oldID = len
    },
    change_content (state, payLoad) {
      console.log(state.oldID + ' ' + payLoad.id)
      console.log(state.oldID === payLoad.id)
      if (state.oldID === payLoad.id) {
        var datas = state.notesData
        var NowDate = new Date()
        var time = NowDate.getFullYear() + '-' + state.format(NowDate.getMonth() + 1) + '-' + state.format(NowDate.getDate()) + ' ' + state.format(NowDate.getHours()) + ':' + state.format(NowDate.getMinutes()) + ':' + state.format(NowDate.getSeconds())
        datas.forEach((e) => {
          if (e.id === payLoad.id) {
            e.content = payLoad.content
            e.title = payLoad.title
            e.time = time
            return false
          }
        })
        state.oldID = payLoad.id
      }
    }
  }
})

export default store
