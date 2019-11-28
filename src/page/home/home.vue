<template>
  <div class="home">
    <div class="banner">
      <div class="wrap-top">
        <div class="logo-box">
          <img src="../../assets/images/home/L&OLOGO.png">
        </div>
      </div>
      <ul class="wrap-bottom wow slideInUp">
        <li class="first-li">
          <div class="li-title">1993</div>
          <div class="li-bottom"></div>
          <div class="li-text Light">Established in 1993</div>
        </li>
        <li class="second-title">
          <div class="li-title">FCA</div>
          <div class="li-bottom"></div>
          <div class="li-text Light">Fully authorised and regulated by the FCA</div>
        </li>
        <li >
          <div class="li-title li-title-3">UK-Asia<br>focused </div>
          <div class="li-bottom"></div>
          <div class="li-text Light">Established in 1993</div>
        </li>
      </ul>
    </div>
    <div class="content-one">
      <div class="wrap-content">
        <div  class="box-one wow slideInLeft">
          <div class="one-title LightItalic">Philosophy</div>
          <div class="one-text Light">
            The London & Oxford Group, founded in 1993. Our success is a product of hard work, profound professionalism and an earnest sense of service and integrity.
          </div>
        </div>
        <ul class="box-two">
          <li class="wow slideInLeft">
            <div class="li-title first-img">
              <img src="../../assets/images/home/workers-team.png" alt="">
            </div>
            <div class="li-text Light">We have a professional team with many years of experience in asset management and corporate advisory. </div>
          </li>
          <li class="wow slideInLeft">
            <div class="li-title secord-img">
              <img src="../../assets/images/home/business-cards.png" alt="">
            </div>
            <div class="li-text Light">
              We have extensive business contacts and the capacity to access high quality investment opportunities in the UK, continental Europe and China.
            </div>
          </li>
          <li class="wow slideInRight">
            <div class="li-title third-img">
              <img src="../../assets/images/home/icon.png" alt="">
            </div>
            <div class="li-text Light">We have in-depth knowledge of both primary and secondary capital markets.</div>
          </li>
        </ul>
        <ul class="box-three">
          <li class="wow slideInLeft">
            <div class="li-title forth-img">
              <img src="../../assets/images/home/document(1).png" alt="">
            </div>
            <div class="li-text Light">
              We are familiar with the regulatory and investment climate in the UK and overseas markets.
            </div>
          </li>
          <li class="wow slideInRight">
            <div class="li-title fifth-img">
              <img src="../../assets/images/home/global.png" alt="">
            </div>
            <div class="li-text Light">We have excellent communication links between offices located in London, Shanghai and Tokyo. </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {WOW} from 'wowjs'
export default {
  data () {
    return {
      textList: [
        {titel: '1993', text: 'Established in 1993'},
        {titel: 'FCA', text: 'Fully authorised and regulated by the FCA'},
        {titel: 'Global', text: 'Established in 1993'}
      ]
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
  @yellow:#C4B57A;
  .banner{
    background-image: url("../../assets/images/newTeams/HOME_banner.jpg");
  }
  .content-two{
    background-image: url("../../assets/images/home/Black&White2.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 490px;
    position: relative;
    @media screen and (max-width: 1200px) {
      height: 300px;
      background-size: cover;
      width: 100%;
    }
    .content-box{
      width: 100%;
      position: absolute;
      text-align: center;
      background:rgba(46,55,72,.7);
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      .top-title{
        padding: 40px 0;
        color: @yellow;
        font-size: 49px;
        @media screen and (max-width: 1200px) {
          padding: 0 5%;
          width: 100%;
          height: auto;
          margin: 20px 0;
          font-size: 26px;
        }
      }
    }
  }
  .content-three{
    .box-one{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 83px;
      @media screen and (max-width: 1200px) {
        margin-top: 30px;
      }
      .img-box{
        width: 248px;
        height: 266px;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .one-title{
        color: @yellow;
        font-size: 36px;
        margin-top: 28px;
        @media screen and (max-width: 1200px) {
          font-size: 24px;
          margin-top: 10px;
          text-align: center;
        }
      }
      .one-text{
        color: #fff;
        font-size: 20px;
        margin: 18px 0 28px;
        width: 71%;
        text-align: center;
        @media screen and (max-width: 1200px) {
          font-size: 16px;
          margin: 10px 0 10px;
          padding: 0 5%;
          width: 100%;
        }
      }
      .name-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 61px;
        @media screen and (max-width: 1200px) {
          margin-bottom: 30px;
        }
        .first-li{
          width: 132px;
          img{
            display: block;
            width: 100%;
          }
        }
        .second-li{
          margin-top: 16px;
          color: @yellow;
          font-size: 36px;
          @media screen and (max-width: 1200px) {
            font-size: 24px;
          }
        }
      }
      .box-two{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 120px;
        @media screen and (max-width: 1200px) {
          margin-bottom: 60px;
        }
        .two-title{
          color: @yellow;
          font-size: 49px;
          padding: 0 200px 20px;
          margin-bottom: 40px;
          border-bottom: 3px solid @yellow;
          @media screen and (max-width: 1200px) {
            font-size: 34px;
            padding: 0 10px 20px;
            margin-bottom: 40px;
          }
        }
        .two-text{
          width: 72%;
          color: #fff;
          font-size: 20px;
          text-align: center;
          @media screen and (max-width: 1200px) {
            width: 100%;
            font-size: 16px;
            padding: 0 5%;
          }
        }
      }
      .box-three{
        width: 1239px;
        margin: 0 auto;
        @media screen and (max-width: 1200px) {
          width: 100%;
          height: auto;
          padding: 0 5%;
        }
        img{
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>
