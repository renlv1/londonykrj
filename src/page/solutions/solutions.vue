<template>
  <div class="solutions">
    <div class="banner">
      <div class="wrap-top">
        <div class="logo-box">
          <img src="../../assets/images/home/L&OLOGO.png">
        </div>
      </div>
      <div class="common-bottom">
        <div class="bottom-content LightItalic   wow slideInUp">{{$t('solutions.text1')}}</div>
        <div class="bottom-content second-content LightItalic   wow slideInUp">{{$t('solutions.text2')}}</div>
      </div>
    </div>
    <div class="main-content">
      <div class="content-title">
        <p class="LightItalic   wow slideInUp">{{$t('solutions.text3')}}</p>
      </div>
      <div class="content-box">
        <div class="img-one"><img src="../../assets/images/solutions/002-1-3-kings-arms-yard(1).jpg"></div>
        <div class="title-one LightItalic   wow slideInUp">{{$t('solutions.text4')}}</div>
        <div class="text-one Light wow slideInUp">
          {{$t('solutions.text5')}}
        </div>
        <div class="img-one"><img src="../../assets/images/solutions/image.jpg"></div>
        <div class="title-one LightItalic   wow slideInUp">{{$t('solutions.text6')}}</div>
        <div class="text-one Light wow slideInUp">
          {{$t('solutions.text7')}}
        </div>
        <div class="img-one"><img src="../../assets/images/solutions/abstract-ai-art-373543(1).jpg"></div>
        <div class="title-one LightItalic   wow slideInUp">{{$t('solutions.text8')}}</div>
        <div class="text-one Light   wow slideInUp">
          {{$t('solutions.text9')}}
        </div>
      </div>
      <div class="content-two">
        <p class="LightItalic   wow slideInUp">{{$t('solutions.text10')}}</p>
      </div>
      <div class="content-third">
        <div class="text-one Light   wow slideInUp">
          {{$t('solutions.text11')}}
        </div>
        <div class="img-box">
          <div class="img-two common-img"><img src="../../assets/images/solutions/impulse-dynamics_owler_20160226_235141_large.png"></div>
          <div class="img-three common-img"><img src="../../assets/images/solutions/Purple-White-Logo_400x400.png"></div>
          <div class="img-four common-img"><img src="../../assets/images/solutions/shw_ag-7b560cce.png"></div>
        </div>
        <div class="img-box">
          <div class="img-five common-img"><img src="../../assets/images/solutions/trumid.png"></div>
          <div class="img-six common-img"><img src="../../assets/images/solutions/golden_goose-1470104011222.png"></div>
        </div>
      </div>
      <div class="content-title">
        <p class="LightItalic   wow slideInUp">{{$t('solutions.text12')}}</p>
      </div>
      <div class="content-box  wow slideInUp">
        <div class="text-two Light">
          {{$t('solutions.text13')}}
        </div>
        <div class="text-three Light ">{{$t('solutions.text14')}}</div>
        <div class="text-four Light">
          {{$t('solutions.text15')}}
        </div>
        <div class="text-four Light">
          {{$t('solutions.text16')}}
        </div>
        <div class="text-four Light">
          {{$t('solutions.text17')}}
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
  @yellow:#C4B57A;
  @white:#fff;
  .banner{
    background-image: url("../../assets/images/solutions/Group2.jpg");
  }
  .main-content{
    width: 100%;
    padding-bottom: 285px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1200px) {
      padding-bottom: 100px;
    }
    .content-title{
      text-align: center;
      color: @yellow;
      font-size: 49px;
      margin: 72px 0 78px;
      @media screen and (max-width: 1200px) {
        width: 60%;
        font-size: 34px;
        margin: 30px 0 30px;
      }
      @media screen and (max-width: 768px) {
        width: 70%;
        font-size: 20px;
        margin: 20px 0 20px;
        white-space: nowrap;
      }
      @media screen and (max-width: 430px) {
        width: 60%;
        font-size: 18px;
        margin: 20px 0 20px;
        white-space: nowrap;
      }
      p{
        padding: 0 60px 12px;
        width: 100%;
        border-bottom: 3px solid @yellow;
        @media screen and (max-width: 1200px) {
          padding: 0 20px 12px;
          white-space: nowrap;
        }
      }
    }
    .content-box{
      width: 100%;
      height: auto;
      padding: 0 18%;
      text-align: center;
      @media screen and (max-width: 1200px) {
        padding: 0 5%;
      }
      .img-one{
        width: 656px;
        height: auto;
        margin: 0 auto;
        @media screen and (max-width: 1200px) {
          width: 100%;
          height: auto;
        }
        img{
          display: block;
          width: 100%;
          height: auto;
        }
      }
      .title-one{
        margin: 30px 0 26px;
        color: @yellow;
        font-size: 36px;
        @media screen and (max-width: 1200px) {
          margin: 20px 0 20px;
          font-size: 24px;
        }
      }
      .text-one{
        color: @white;
        font-size: 20px;
        margin-bottom: 66px;
        @media screen and (max-width: 1200px) {
          font-size: 16px;
          margin-bottom: 30px;
          }
        }
      .text-two{
        color: @white;
        font-size: 20px;
        @media screen and (max-width: 1200px) {
          font-size: 16px;
          }
        }
      .text-three{
        color: @white;
        font-size: 20px;
        margin-bottom: 30px;
        @media screen and (max-width: 1200px) {
          font-size: 16px;
          }
        }
      .text-four{
        text-align: left;
        color: @white;
        font-size: 20px;
        margin-bottom: 10px;
        @media screen and (max-width: 1200px) {
          font-size: 16px;
        }
       }
      }
    }
    .content-two{
      text-align: center;
      color: @yellow;
      font-size: 49px;
      margin: 72px 0 78px;
      @media screen and (max-width: 1200px) {
        font-size: 26px;
        margin: 30px 0 30px;
      }
      p{
        padding: 0 60px 22px;
        width: 100%;
        border-bottom: 3px solid @yellow;
        @media screen and (max-width: 1200px) {
          padding: 0 30px 22px;
          white-space: nowrap;
        }
      }
    }
    .content-third{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .text-one{
        text-align: center;
        padding: 0 18%;
        color: @white;
        font-size: 20px;
        margin-bottom: 66px;
        @media screen and (max-width: 1200px) {
          padding: 0 5%;
          font-size: 16px;
          margin-bottom: 30px;
        }
      }
      .img-box{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        width: 100%;
        @media screen and (max-width: 1200px) {
          padding: 0 5%;
        }
        @media screen and (max-width: 768px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          .common-img{
            margin-bottom: 30px;
          }
        }
        &:last-child{
          margin-bottom: 0;
          padding-right: 0;
          @media screen and (max-width: 768px) {
            padding: 0;
          }
        }
        .img-two{
          width: 282px;
          height: auto;
          img{
            display: block;
            width: 100%;
          }
        }
        .img-three{
          width: 190px;
          height: auto;
          margin: 0 136px;
          @media screen and (max-width: 1200px) {
            margin: 0 70px;
          }
          @media screen and (max-width: 768px) {
            margin-bottom: 30px;
          }
          img{
            display: block;
            width: 100%;
          }
        }
        .img-four{
          width: 256px;
          height: auto;
          img{
            display: block;
            width: 100%;
          }
        }
        .img-five{
          width: 285px;
          height: auto;
          margin-right: 76px;
          @media screen and (max-width: 1200px) {
            margin-right: 50px;
          }
          @media screen and (max-width: 768px) {
            margin-right: 0;
          }
          img{
            display: block;
            width: 100%;
          }
        }
        .img-six{
          width: 342px;
          height: auto;
          @media screen and (max-width: 370px) {
            width: 90%;
            height: 100%;
          }
          img{
            display: block;
            width: 100%;
          }
        }
    }
  }
</style>
