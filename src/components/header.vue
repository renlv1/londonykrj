<template>
  <div class="header-w">
    <div class="header">
      <h1 class="logo">
        <router-link to="/home"></router-link>
      </h1>
      <div class="nav-uls">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/service">Service</router-link>
        <router-link to="/team">Team</router-link>
        <!--<router-link to="/accounts">Accounts</router-link>-->
        <router-link to="/contacts">Contact</router-link>
      </div>
    </div>
    <div class="mobile">
      <div class="nav-img" @click="toggleNav">
        <img src="../assets/images/common/app-nav.png" alt="" class="app-nav" v-show="!isShow">
        <img src="../assets/images/common/close.png" alt="" class="close" v-show="isShow">
      </div>
      <div class="nav-uls" :class="{'show-nav': isShow}">
        <router-link to="/home" @click.native="gotoPage">Home</router-link>
        <router-link to="/about" @click.native="gotoPage">About</router-link>
        <router-link to="/service" @click.native="gotoPage">Service</router-link>
        <router-link to="/team" @click.native="gotoPage">Team</router-link>
        <router-link to="/contacts" @click.native="gotoPage">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    toggleNav () {
      this.isShow = !this.isShow
    },
    gotoPage () {
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.header-w{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #2E3748;
  height: 100px;
  @media screen and (max-width: 1200px) {
    height: 60px;
  }
  .mobile{
    @media screen and (max-width: 1200px) {
      display: block;
    }
    @media screen and (min-width: 1200px) {
      display: none;
    }
    .nav-img{
      cursor: pointer;
      @media screen and (max-width: 1200px) {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        .app-nav{
          width: 35px;
          display: block;
        }
        .close{
          width: 20px;
          display: block;
        }
      }
    }
    .nav-uls{
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #2E3748;
      max-height: 0;
      overflow: hidden;
      transition: max-height .3s linear;
      font-family: Open Sans;
      &.show-nav{
        max-height: 240px;
      }
      a{
        display: block;
        width: 100%;
        line-height: 40px;
        color: #fff;
        font-size: 16px;
        padding-left: 20px;
        &:hover,&.is-active{
          color: #C4B57A;
        }
      }
    }
  }
}
.header{
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px 0 60px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  .logo{
    font-size: 30px;
    background-color: #fff;
  }
  .nav-uls{
    display: flex;
    align-items: center;
    height: 100%;
    font-family: Open Sans;
    a{
      margin: 0 42px;
      width: 100%;
      height: 100%;
      font-size: 20px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color .25s;
      &:hover,&.is-active{
        color: #C4B57A;
      }
    }
  }
}
</style>
