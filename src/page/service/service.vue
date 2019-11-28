<template>
  <div class="service">
    <div class="banner">
      <div class="wrap-top">
        <div class="logo-box">
          <img src="../../assets/images/home/L&OLOGO.png">
        </div>
      </div>
    </div>
    <ul class="service-uls">
      <li class="service-list wow slideInUp">
        <div class="img-box">
          <img src="../../assets/images/service/1.jpg" alt="">
        </div>
        <div class="list-content">
          <h3 class="title-item">Asset Management</h3>
          <p class="text">In response to the heavy demand for City of London real estate, UK education assets, and UK technology companies, especially from East Asia, London & Oxford Group has built significant experience in this area. We now manage a growing portfolio of City of London properties, school assets.</p>
          <!--<div class="more">LEARN MORE</div>-->
        </div>
      </li>
      <li class="service-list wow slideInUp">
        <div class="img-box">
          <img src="../../assets/images/service/2.jpg" alt="">
        </div>
        <div class="list-content">
          <h3 class="title-item">Wealth Management</h3>
          <p class="text">London & Oxford Group manages clients with discretionary and non-discretionary accounts. One focus is on high net-worth individuals from East Asia. Our Client Manager is on hand to provide you with the necessary documents and guidance to enable you to open an account.</p>
          <!--<div class="more">LEARN MORE</div>-->
        </div>
      </li>
      <li class="service-list wow slideInUp">
        <div class="img-box">
          <img src="../../assets/images/service/3.jpg" alt="">
        </div>
        <div class="list-content">
          <h3 class="title-item">Euro-Asia M&A Advisory</h3>
          <p class="text">London & Oxford Group has significant cross-border M&A advisory experience. Our current focus is on facilitating cross-border M&A advisory, inbound to Europe for East Asian clients.</p>
          <!--<div class="more">LEARN MORE</div>-->
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {WOW} from 'wowjs'
export default {
  data() {
    return {}
  },
  mounted () {
    this.$nextTick(() => {
      var wow = new WOW({
        live: false
      })
      wow.init()
    })
  }
}
</script>

<style lang="less" scoped>
.service{
  .banner{
    background-image: url("../../assets/images/service/banner.jpg");
    @media screen and (max-width: 1930px) {
      height: 700px;
    }
    @media screen and (max-width: 1700px) {
      height: 600px;
    }
    @media screen and (max-width: 1500px) {
      height: 500px;
    }
    @media screen and (max-width: 1024px) {
      height: 400px;
    }
  }
  .service-uls{
    display: flex;
    font-family: Open Sans;
    @media screen and (max-width: 750px) {
      flex-direction: column;
    }
    .service-list{
      flex: 1;
      background-color: #3c475c;
      color: #fff;
      display: flex;
      flex-direction: column;
      &:nth-child(2){
        background-color: #343e50;
      }
      .img-box{
        width: 100%;
        img{
          width: 100%;
          display: block;
        }
      }
      .list-content{
        padding: 54px 80px;
        flex: 1;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1300px) {
          padding: 20px;
        }
      }
      .title-item{
        font-size: 20px;
        margin-bottom: 30px;
      }
      .text{
        font-size: 15px;
        line-height: 1.5;
        flex: 1;
        margin-bottom: 40px;
      }
      .more{
        color: #C4B57A;
        font-size: 20px;
      }
    }
  }
}
</style>
