<template>
  <div class="home">
    <div class="banner">
      <div class="wrap-top">
        <div class="logo-box">
          <img src="../../assets/images/home/L&OLOGO.png">
        </div>
      </div>
      <div class="common-bottom ">
        <div class="bottom-content LightItalic  wow slideInUp">“Care and diligence bring good luck”</div>
      </div>
    </div>
    <div class="content-three">
      <div class="box-one">
        <div class="img-box"><img src="../../assets/images/home/Paul.png"></div>
        <div class="one-title LightItalic wow slideInUp">Message from the Founder & Chairman</div>
        <div class="one-text Light wow slideInUp">My career started in the International Capital Markets in the City of London in the late 1970’s, after graduating from Oxford University. I spent time in Asia working for Swiss Bank Corporation with responsibility for Structured Finance and Investment across the region. Returning to London, I joined the Bank’s Corporate Finance department with responsibility for Institutional Investors.
          In the early 1990’s, I established London & Oxford Capital Markets - an independent Securities and Investment Company. London & Oxford offers a more efficient and personalised level of service than its larger
          competitors by being focused, flexible and without undue bureaucracy.
          Remembering the words of Thomas Fuller 1654-1734, “Care and diligence bring good luck” which is key
          to the philosophy of London & Oxford.</div>
        <ul class="name-box">
          <li class="first-li  wow slideInUp"><img src="../../assets/images/home/VectorSmartObject.png"></li>
          <li class="second-li LightItalic  wow slideInUp">Paul M.Newton</li>
        </ul>
        <div class="box-two">
          <div class="two-title LightItalic wow slideInLeft">History</div>
          <div class="two-text Light wow slideInUp">
            Founded in 1993 in the heart of the City of London’s financial district as an independent securities and investment company, over recent years, London and Oxford Group has established itself as an asset management company with a strong focus on real estate, education and technology. Well-connected in several continents and being fully authorised and regulated by the Financial Conduct Authority in the UK, we take pride in providing top-level service to clients from Europe and Asia.
          </div>
        </div>
        <div class="box-three  wow slideInUp"><img src="../../assets/images/home/group10.png"></div>
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
    background-image: url("../../assets/images/contact/Group2.jpg");
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
