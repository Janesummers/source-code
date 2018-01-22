<template>
  <ul class="notesList">
    <li class="clearFix" v-for="item in data" :key="item.id" :class="{active: choose_index === item.id}">
      <span class="title" @click="choose_this(item.id)">{{item.title}}</span>
      <span class="content_box" @click="choose_this(item.id)">
        <span class="partial_content noselect">{{item.content}}</span>
      </span>
      <span class="time" @click="choose_this(item.id)">{{item.time}}</span>
      <span class="option">
        <span
          class="iconfont icon-aixin love noselect"
          :title="item.favorite ? '取消喜欢' : '添加到喜欢'"
          :class="{active: item.favorite}"
          @click="change_like(item.id)"
        >
        </span>
        <span class="iconfont icon-shanchu del noselect" title="删除" @click="del(item.id)"></span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'notesList',
  props: ['data'],
  methods: {
    change_like (id) {
      this.$store.commit('change_like', {
        id: id
      })
    },
    choose_this (id) {
      this.$store.commit('show_full_content', {
        id: id
      })
    },
    del (id) {
      this.$store.commit('del', {
        id: id
      })
    }
  },
  computed: {
    choose_index () {
      return this.$store.state.choose_id
    }
  }
}
</script>

<style>
</style>
