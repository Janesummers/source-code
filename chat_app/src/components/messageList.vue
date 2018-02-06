<template>
  <div class="messageList">
    <div class="search_box">
      <span class="iconfont icon-sousuo"></span>
      <input type="search" placeholder="  搜索联系人" />
      <span class="cancel">取消</span>
    </div>
    <ul class="contact_list">
    	  <li @click="choose_chat(item.contact_id)" v-for="item in chatData" v-bind:key="item.contact_id">
    	    <span class="img_box contact_headPortrait">
          <img src="../assets/img/my_headPortrait.jpg"/>
        </span>
        <span class="contact_name">{{item.contact_name}}</span>
        <span class="last_chat">{{item.last_chat}}</span>
        <span class="unread" v-show="item.unread.state" :class="{'unread_max': item.unread.num > 9}">{{item.unread.num <= 99 ? item.unread.num : '99+'}}</span>
    	  </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    chatData () {
      return this.$store.state.chatData
    }
  },
  methods: {
    choose_chat (id) {
      console.log(id)
    }
  }
}
</script>

<style>
.messageList{
  width: 320px;
    height: 100%;
    float: left;
    position: relative;
    overflow: hidden;
    padding-top: 56px;
    padding-left: 20px;
}
.messageList .search_box{
        position: fixed;
    width: 300px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    margin-top: -40px;
}
.messageList .search_box input{
      height: 40px;
    float: left;
    line-height: 40px;
    font-size: 18px;
        width: 208px;
    padding-right: 20px;
}
.messageList .search_box .cancel{
  color: #9F9F9F;
}
.messageList .search_box .iconfont{
      font-size: 18px;
    display: inline-block;
    float: left;
    line-height: 43px;
    color: #9F9F9F;
        margin: 0 5px 0 10px;
}
.messageList .contact_list{
  overflow: hidden;
  width: 300px;
}
.messageList .contact_list li{
  overflow: hidden;
  padding: 10px 0 10px 8px;
  position: relative;
  border-radius: 5px;
}
.messageList .contact_list li:active{
      background: #f4f4f4;
}
.messageList .contact_headPortrait{
  width: 44px;
  height: 44px;
      float: left;
}
.messageList .contact_list .contact_name{
    display: inline-block;
    width: 178px;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 20px;
    float: left;
    margin-top: 4px;
}
.messageList .contact_list .last_chat{
        display: inline-block;
    width: 178px;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 20px;
    color: #9F9F9F;
    float: left;
}
.messageList .contact_list .unread{
   position: absolute;
    bottom: 10px;
    height: 20px;
    width: 20px;
    background: red;
    color: #fff;
    border-radius: 20px;
    text-align: center;
    line-height: 21px;
    font-weight: 700;
    right: 10px;
        font-size: 14px;
}
.messageList .contact_list .unread_max{
  width: 36px;
}
</style>
