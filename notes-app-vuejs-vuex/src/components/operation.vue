<template>
  <div class="left-control">
    <p class="title">NOTES</p>
    <ul class="choose_btns">
      <li class="noselect" :class="{active: preview === 'all'}" @click="change_preview('all')">
        <span>All Notes</span>
        <span class="num" v-show="datas.length > 0" :class="{num2: datas.length > 9}">{{datas.length}}</span>
      </li>
      <li class="noselect" :class="{active: preview === 'favorite'}" @click="change_preview('favorite')">
        <span>Favorites</span>
        <span class="num" v-show="favoriteLen > 0" :class="{num2: favoriteLen > 9}">{{favoriteLen}}</span>
      </li>
    </ul>
    <NotesList :data="previews"></NotesList>
    <span title="添加" class="iconfont icon-tianjia add" @click="add"></span>
  </div>
</template>

<script>
import NotesList from '@/components/notesList'
var filter = {
  all (list) {
    return list
  },
  favorite (list) {
    return list.filter((items) => {
      return items.favorite
    })
  }
}
export default {
  name: 'operation',
  components: {
    NotesList
  },
  computed: {
    previews () {
      return filter[this.preview] ? filter[this.preview](this.datas) : this.datas
    },
    preview () {
      return this.$store.state.preview
    },
    datas () {
      return this.$store.state.notesData
    },
    allLen () {
      if (this.$store.state.notesData.length < 99) {
        return this.$store.state.notesData.length
      } else {
        return '99+'
      }
    },
    favoriteLen () {
      var list = this.datas
      var count = 0
      list.filter((items) => {
        if (items.favorite) {
          count += 1
        }
      })
      if (count < 99) {
        return count
      } else {
        return '99+'
      }
    }
  },
  methods: {
    change_preview (view) {
      this.$store.commit('change_preview', {
        view: view
      })
    },
    add () {
      this.$store.commit('add')
    }
  }
}
</script>

<style>
</style>
