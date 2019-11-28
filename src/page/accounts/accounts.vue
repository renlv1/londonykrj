<template>
  <div class="account">
    <div class="banner">
      <div class="wrap-top">
        <div class="logo-box">
          <img src="../../assets/images/home/L&OLOGO.png">
        </div>
      </div>
      <div class="common-bottom">
        <div class="bottom-content-d LightItalic  wow slideInUp">{{$t('accounts.text1')}}</div>
      </div>
    </div>
    <div class="container-b">
      <h2 class="page-title LightItalic  wow slideInUp">{{$t('accounts.text2')}}</h2>
      <ul class="uls-w Light">
        <p class="title-a  wow slideInUp">{{$t('accounts.text3')}}</p>
        <li class="list  wow slideInUp">
          <p class="desc1">{{$t('accounts.text4')}}</p>
          <p class="desc1">{{$t('accounts.text5')}}</p>
          <div class="btn-box one-btn-b">
            <div class="btn">{{$t('accounts.text6')}}</div>
            <div class="btn">{{$t('accounts.text7')}}</div>
          </div>
        </li>
        <li class="list  wow slideInUp">
          <p class="desc1">{{$t('accounts.text8')}}</p>
          <div class="btn-box two-btn-b">
            <div class="btn">{{$t('accounts.text9')}}</div>
            <div class="btn">{{$t('accounts.text10')}}</div>
            <div class="btn last-btn">{{$t('accounts.text11')}}</div>
          </div>
        </li>
        <li class="list  wow slideInUp">
          <p class="desc1">{{$t('accounts.text12')}}</p>
          <div class="btn-box three-btn-b">
            <div class="btn">{{$t('accounts.text13')}}</div>
            <div class="btn ">{{$t('accounts.text14')}}</div>
          </div>
        </li>
        <li class="list  wow slideInUp">
          <p class="desc1 margin-desc">{{$t('accounts.text15')}}</p>
          <p class="desc1">{{$t('accounts.text16')}}</p>
        </li>
        <li class="list list-four  wow slideInUp">
          <p class="desc1">{{$t('accounts.text17')}}</p>
          <p class="desc1">{{$t('accounts.text18')}}</p>
          <div class="btn-box one-btn-b">
            <div class="btn Light">{{$t('accounts.text19')}}</div>
          </div>
        </li>
        <li class="list  wow slideInUp">
          <p class="desc1">{{$t('accounts.text20')}}</p>
          <p class="desc1">{{$t('accounts.text21')}}</p>
        </li>
      </ul>
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
.account{
  .banner{
    background: url("../../assets/images/accounts/banner.jpg") no-repeat center / cover;
    .bottom-content-d{
      height: 100%;
      font-size: 43px;
      color: #C4B57A;
      max-width: 1200px;
      margin: 0 auto;
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
    .text{
      width: 50%;
      margin: 0 auto;
      font-size: 30px;
      padding: 30px 0;
      color: #C4B57A;
    }
  }
  .container-b{
    .page-title{
      margin: 75px auto 68px;
    }
    .uls-w{
      width: 1140px;
      margin: 0 auto 336px;
      @media screen and (max-width: 1300px) {
        width: 100%;
        padding: 0 10px;
        margin-bottom: 50px;
      }
      .list{
        width: 100%;
      }
      .list-four{
        margin-top: 54px;
      }
      .title-a{
        font-size: 32px;
        margin-bottom: 55px;
        color: #C4B57A;
      }
      .desc1{
        font-size: 22px;
        color: #fff;
        text-align: left;
        line-height: 1.5;
        @media screen and (max-width: 1300px) {
          font-size: 16px;
        }
      }
      .margin-desc{
        margin-bottom: 26px;
      }
      .btn-box{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin: 35px 0;
        .btn{
          padding: 10px 20px;
          border: 1px solid #C4B57A;
          margin-right: 100px;
          display: flex;
          color: #C4B57A;
          white-space: nowrap;
          &:last-child{
            margin-right: 0;
          }
          @media screen and (max-width: 1300px) {
            margin-right: 50px;
            font-size: 16px;
          }
          @media screen and (max-width: 815px) {
            &.last-btn{
              margin-top: 30px;
            }
          }
        }
      }
      .one-btn-b{
        margin-left: 191px;
        @media screen and (max-width: 1300px) {
          margin-left: 0;
        }
        @media screen and (max-width: 630px) {
          flex-direction: column;
          align-items: flex-start;
          .btn{
            margin-top: 30px;
            margin-right: 0;
          }
        }
      }
      .two-btn-b{
        margin-left: 53px;
        @media screen and (max-width: 1300px) {
          margin-left: 0;
        }
        @media screen and (max-width: 630px) {
          flex-direction: column;
          align-items: flex-start;
          .btn{
            margin-top: 30px;
            margin-right: 0;
          }
        }
      }
      .three-btn-b{
        margin-left: 171px;
        @media screen and (max-width: 1300px) {
          margin-left: 0;
        }
        @media screen and (max-width: 630px) {
          flex-direction: column;
          align-items: flex-start;
          .btn{
            margin-top: 30px;
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
