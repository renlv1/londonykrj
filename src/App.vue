<template>
  <div id="app">
    <input type="text" name="username" style="display:none;">
    <input type="checkbox" style="display:none;">
    <input type="password" name="password" style="display:none;">
    <v-header></v-header>
    <router-view class="main-container"/>
    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
export default {
  components: {
    vHeader: resolve => require(['./components/header.vue'], resolve),
    vFooter: resolve => require(['./components/footer.vue'], resolve)
  }
}
</script>

<style lang="less">
@import "assets/css/reset.css";
@import "assets/css/common";
@import "assets/css/footer";

#app{
  min-height: 100vh;
  height: auto;
  background-color: #2E3748;
  .main-container{
    padding-top: 112px;
    @media screen and (max-width: 1200px) {
      padding-top: 60px;
    }
  }
}
</style>
