<template>
  <div class="team">
    <div class="banner">
      <div class="wrap-top">
          <div class="logo-box">
            <img src="../../assets/images/home/L&OLOGO.png">
          </div>
        </div>
      <div class="common-bottom ">
        <div class="bottom-content LightItalic  wow slideInUp">{{$t('team.text1')}}</div>
        <div class="bottom-content second-content LightItalic  wow slideInUp">{{$t('team.text2')}}</div>
      </div>
    </div>
    <div class="main-content">
      <div class="content-title wow slideInLeft">
        <p class="LightItalic">{{$t('team.text3')}}</p>
        <div class="title-bottom"></div>
      </div>
      <div class="person-box">
        <ul>
          <li class="team-box Lora wow slideInUp" v-for="(item1, index1) in personalList2" :key="index1" @click="showOne(item1)">
            <div class="team-item">
              <div class="team-img">
                <img :src="item1.imgUrl" alt="">
              </div>
              <div class="team-t">
                <p class="text1">{{item1.text}}</p>
                <p class="text2">{{item1.text2}}</p>
              </div>
              <div class="arrow" :class="{'isarrow': item1.heightShow}"></div>
            </div>
            <p class="content-news" :class="{'isheight': item1.heightShow}">{{item1.text3}}</p>
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
      heightShow: false,
      personalList2: [
        {
          heightShow: false,
          imgUrl: require('../../assets/images/newTeams/Paul.png'),
          text: 'Paul Newton',
          text2: 'Chairman, Founder',
          text3: 'Paul is the chairman of London & Oxford Group. The first part of his career was with Bank of America and Swiss Bank Corporation. Paul established London & Oxford Group as a niche investment banking operation; he has been responsible for several ground-breaking transactions and has built up many senior level contacts. He graduated from Queen’s College, University of Oxford.'
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/newTeams/DavidMarsh.png'),
          text: 'David Marsh',
          text2: 'Chair of Non-executive',
          text3: 'David is a financial expert and writer on political, economic and monetary issues. He was the European Editor for the Financial Times before he became a banker and consultant. In 2010, David co-founded the Official Monetary and Financial Institutions Forum (OMFIF), where he serves as Managing Director. David is a frequent commentator in Europe and the US, writing articles for The Wall Street Journal’s MarketWatch, and German newspaper Handelsblatt. He graduated with a BA in chemistry from Queen’s College, University of Oxford.'
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/newTeams/SijiaWang.png'),
          text: 'Sijia Wang',
          text2: 'CEO',
          text3: 'Sijia is the Chief Executive Officer of London & Oxford Group and is the key investment banking contact serving Chinese private companies and high net worth individuals. Previously, she was Head of Asian Markets at Valbury Capital. Sijia graduated with an MSc in International Finance from Queen Mary, University of London.'
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/newTeams/DR2.png'),
          text: 'Dr. Chaiyakorn Yingsaeree',
          text2: 'Chief Investment Officer & Head of Technology',
          text3: 'At London & Oxford Group, Chaiyakorn is responsible for fund and quantitative risk management. He worked at the US hedge fund Citadel in New York where he was responsible for high frequency trading and arbitrage strategies, as well as software development. Dr Yingsaeree graduated with a Ph.D. in Computer Science from University College London.'
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/newTeams/HenryBlyth.png'),
          text: 'Andrew Seaman',
          text2: 'Partner ( Fix income/Real Estate)',
          text3: 'Andrew is an Executive Partner and Chief Investment Officer at a London based fund management and advisory firm and has extensive experience in fixed income. Andrew holds a B.Sc. in Financial Economics and has previously been awarded The Wall Street Journal’s European Fixed Interest Manager of the Year.'
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/newTeams/StephenPalmer.png'),
          text: 'Stephen Palmer',
          text2: 'Senior Partner, Real Estate',
          text3: 'Widely experienced strategist and real estate investment manager with a successful track record of investing in direct real estate in UK, France and the Netherlands, indirect funds in UK and continental Europe, and UK REITs. Stephan graduated with an MSc Economics from London School of Economics.'
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/newTeams/AKMIsmail.png'),
          text: 'AKM Ismail',
          text2: 'Senior Partner ( real estate)',
          text3: 'Ismail is a seasoned banker with over 20 years’ experience in cross-border deals and project financing, including a number of significant real estate transactions. He has an extensive network of high-level contacts in the Far East and Southeast Asia. He graduated from National University of Singapore with a B.E. in Electrical and Electronics Engineering.'
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/newTeams/DrStephenTommis.png'),
          text: 'Dr Stephen Tommis',
          text2: 'Senior Partner (UK-China Education)',
          text3: 'Dr. Tommis has over 20 years’ experience of senior management in the education sector in the UK and China. He was the founding Executive Director of the Hong Kong Academy for Gifted Education and the CEO of the Montessori St. Nicholas charity before joining London and Oxford as Partner overseeing the education business. Dr. Tommis was awarded DPhil from Jesus College, Oxford University.'
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/team/Group16.png'),
          text: 'Jamie Yin',
          text2: 'Partner (Education)',
          text3: 'Jamie has over 10 years’ experience in the UK education sector. He is an Executive Director and sits on the Board of Directors for Bedstone College and Ipswich High School. Jamie is Executive Vice Chairman and Deputy Director of Education Committee, British Chinese Chamber of Commerce. Jamie graduated with an MSc in Social and Public Relations, London School of Economics.'
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/newTeams/Barry.png'),
          text: 'David Quin',
          text2: 'Partner (Institutional Trading )',
          text3: 'David has over 15 years of experience in capital market trading. He has worked for Lehman Brothers, Bear Stearns and GFI Group as manager director. David is the co-founder of HouseToken and BitQuin.'
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/team/Group20.png'),
          text: 'Olivia He',
          text2: 'Partner (Transaction)',
          text3: 'Olivia has over 15 years of experiences in financial industry. She had worked at Bank of America as Managing Director for over 8 years. Prior to that, she worked for Citibank as vice president, UBS as associated director. She obtained CFA level 3 and graduated from University of Toronto. '
        },
        {
          heightShow: false,
          imgUrl: require('../../assets/images/newTeams/Dr.ZheZhang.png'),
          text: 'Dr. Zhe Zhang',
          text2: 'Senior Partner, cross-border M&A',
          text3: 'Zhe has over 17 years of experience in the financial services industry and public administration. Zhe previously worked in investment banking at Goldman Sachs. His main areas of expertise are in navigating regulatory and policy affairs in the Greater China capital market, execution of cross-border transactions, M&A advisory and Chinese outbound investment. Zhe holds a Juris Master degree from Peking University (J.M.) and Master of Jurisprudence (M.Jur) from St. Anne’s College, University of Oxford.'
        }
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
  },
  methods: {
    showOne (item) {
      item.heightShow = !item.heightShow
    }
  }
}
</script>

<style lang="less" scoped>
  @yellow:#C4B57A;
  @white:#fff;
  .banner{
    background-image: url("../../assets/images/team/Group.jpg");
  }
  .main-content{
    width: 100%;
    padding: 0 0 130px;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
      padding: 0 0 50px;
    }
    .content-title{
      text-align: center;
      color: @yellow;
      font-size: 49px;
      margin: 70px 0 112px;
      @media screen and (max-width: 768px) {
        font-size: 24px;
        margin: 20px 0 20px;
      }
      @media screen and (max-width: 1200px) {
        margin: 20px 0 20px;
      }
      p{
        padding-bottom: 22px;
        @media screen and (max-width: 1200px) {
          padding-bottom: 12px;
        }
      }
      .title-bottom{
        margin: 0 auto;
        width: 45%;
        border-bottom: 3px solid @yellow;
      }
    }
    .person-box{
      width: 1500px;
      margin: 0 auto;
      @media screen and (max-width: 1500px) {
        width: 100%;
      }
      &::after{
        content: '';
        display: block;
        visibility: hidden;
        clear: both;
      }
    }
  }
  .team-box{
    width: 30.5555555556%;
    float: left;
    margin-left: 1.3888888889%;
    margin-right: 1.3888888889%;
    margin-top: 40px;
    position: relative;
    cursor: pointer;
    background-color: #deddd8;
    @media (max-width: 1024px){
      width: 47.2222222222%;
    }
    @media (max-width: 767px) {
      width: 97.2222222222%;
    }
    .team-item{
      display: flex;
    }
    .team-img{
      img{
        display: block;
        width: 150px;
        height: 150px;
      }
    }
    .team-t{
      margin-left: 10px;
      flex: 1;
      padding-top: 30px;
      .text1{
        font-size: 18px;
        color: #272a2f;
      }
      .text2{
        margin-top: 8px;
        font-size: 16px;
        color: #272a2f;
      }
    }
    .arrow{
      position: absolute;
      right: 10px;
      bottom: 10px;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      background: url("../../assets/images/newTeams/bottomRow.png") no-repeat center / cover;
      transition: all .3s linear;
      &.isarrow{
        background: url("../../assets/images/newTeams/topRow.png") no-repeat center / cover;
      }
    }
    .content-news{
      width: 100%;
      color: #272a2f;
      line-height: 1.5;
      letter-spacing: 0.3px;
      height: 0;
      overflow: hidden;
      transition: all .3s linear;
      &.isheight{
        height: auto;
        padding: 35px 10px 50px;
      }
    }
  }
</style>
