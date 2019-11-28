<template>
  <div class="contact">
    <div class="banner">
      <div class="wrap-top">
        <div class="logo-box">
          <img src="../../assets/images/home/L&OLOGO.png">
        </div>
      </div>
      <div class="common-bottom">
        <div class="bottom-content-d LightItalic  wow slideInUp">{{$t('contact.text1')}}</div>
      </div>
    </div>
    <div class="footer">
      <h2 class="page-text LightItalic wow slideInUp">{{$t('contact.text2')}}</h2>
      <div class="map-w wow slideInUp">
        <div class="left Regular">
          <p>{{$t('contact.text3')}}</p>
          <p>{{$t('contact.text4')}}</p>
          <p>{{$t('contact.text5')}}</p>
        </div>
        <div class="right-map">
          <img src="../../assets/images/contact/map.png" alt="">
        </div>
      </div>
      <ul class="footer-nav" style="display: none">
        <router-link to="team" class="footer-list">
          <div class="img-box">
            <img src="../../assets/images/common/footer_team.png" alt="">
          </div>
          <p class="title LightItalic">Team</p>
        </router-link>
        <router-link to="solutions" class="footer-list">
          <div class="img-box">
            <img src="../../assets/images/common/footer_solution.jpg" alt="">
          </div>
          <p class="title LightItalic">Solutions</p>
        </router-link>
        <router-link to="news" class="footer-list">
          <div class="img-box">
            <img src="../../assets/images/common/footer_home.png" alt="">
          </div>
          <p class="title LightItalic">News</p>
        </router-link>
      </ul>
      <div class="copyright-w" style="display: none">
        <div class="left">
          <h3 class="title Light">London & Oxford group</h3>
          <p class="desc Light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </div>
        <div class="right">
          <h3 class="title Light">London & Oxford group</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {WOW} from 'wowjs'
export default {
  data () {
    return {
    }
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
.contact{
  .banner{
    background: url("../../assets/images/accounts/banner.jpg") no-repeat center / cover;
    .bottom-content-d{
      font-size: 43px;
      color: #C4B57A;
      max-width: 1200px;
      height: 100%;
      margin: 0  auto;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1200px) {
        font-size: 26px;
      }
      @media screen and (max-width: 750px) {
        font-size: 16px;
      }
    }
  }
  .wrap-bottom{
    height: 254px;
    display: flex;
    align-items: center;
    justify-content: center;
    .text{
      width: 60%;
      margin: 0 auto;
      font-size: 43px;
      color: #C4B57A;
    }
  }
  .footer{
    padding: 220px 0 194px;
    @media screen and (max-width: 1200px){
      padding: 50px 0;
    }
    .contact-w{
      margin-top: 71px;
      margin-bottom: 0;
    }
    .page-text{
      width: 1014px;
      margin: 0 auto 40px;
      text-align: left;
      font-size: 50px;
      color: #C4B57A;
      @media screen and (max-width: 1200px) {
        width: 100%;
        padding-left: 30px;
        font-size: 30px;
      }
    }
    .map-w{
      display: flex;
      justify-content: space-between;
      width: 1014px;
      margin: 0 auto;
      @media screen and (max-width: 1200px) {
        width: 100%;
        padding: 0 10px;
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
      .left{
        font-size: 20px;
        color: #78735E;
        width: 248px;
        height: 155px;
        padding: 26px 0 0 30px;
        background-color: #3F4A5D;
        @media screen and (max-width: 1200px) {
          width: auto;
          padding: 20px;
        }
        @media screen and (max-width: 768px) {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
        }
        p{
          line-height: 1.5;
          color: #fff;
        }
      }
      .right-map{
        width: 704px;
        @media screen and (max-width: 1200px) {
          flex: 1;
        }
        @media screen and (max-width: 750px) {
          flex: 1;
          width: 100%;
        }
      }
    }
    .copyright-w{
      margin-top: 176px;
      @media screen and (max-width: 1200px) {
        margin-top: 50px;
      }
    }
  }
}
</style>
