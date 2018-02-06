<template>
  <div class="nav">
    <div class="img_box my_headPortrait">
      <img src="../assets/img/my_headPortrait.jpg"/>
    </div>
    <ul class="nav_list">
      <router-link tag="li" to="/" exact>
        <span class="iconfont icon-xiaoxi"></span>
        <span class="text">消息</span>
      </router-link>
      <router-link tag="li" to="/contact">
        <span class="iconfont icon-lianxirenweixuanzhong"></span>
        <span class="text">联系人</span>
      </router-link>
      <router-link tag="li" to="/dynamic">
        <span class="iconfont icon-dongtai"></span>
        <span class="text">动态</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
