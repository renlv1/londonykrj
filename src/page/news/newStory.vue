<template>
  <div class="newStory">
    <div class="top">
      <div class="logo"><img src="../../assets/images/home/L&OLOGO.png" class="logo-img"></div>
    </div>
    <div class="title1 LightItalic wow slideInUp">{{$t('news.text7')}}</div>
    <div class="big-img wow slideInUp">
      <img src="../../assets/images/news/news-big.jpg" alt="">
    </div>
    <div class="desc1 Light wow slideInUp">{{$t('news.text8')}}</div>
    <div class="desc2 Light wow slideInUp">{{$t('news.text9')}}</div>
    <div class="news-w">
      <ul class="news-uls">
        <li class="news-list wow slideInUp" @click="gotoNews">
          <div class="img-box">
            <img src="../../assets/images/news/news.png" alt="">
          </div>
          <div class="news-content">
            <h3 class="news-title Regular">{{$t('news.text3')}}</h3>
            <p class="data Regular">{{$t('news.text4')}}</p>
            <p class="desc Light">{{$t('news.text5')}}</p>
            <div class="more-footer">
              <div class="more-w">
                <div class="read Regular">{{$t('news.text6')}}</div>
                <div class="more-right">
                  <img src="../../assets/images/news/more_right.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="news-list wow slideInUp" @click="gotoNews">
          <div class="img-box">
            <img src="../../assets/images/news/news.png" alt="">
          </div>
          <div class="news-content">
            <h3 class="news-title Regular">{{$t('news.text3')}}</h3>
            <p class="data Regular">{{$t('news.text4')}}</p>
            <p class="desc Light">{{$t('news.text5')}}</p>
            <div class="more-footer">
              <div class="more-w">
                <div class="read Regular">{{$t('news.text6')}}</div>
                <div class="more-right">
                  <img src="../../assets/images/news/more_right.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="news-list wow slideInUp" @click="gotoNews">
          <div class="img-box">
            <img src="../../assets/images/news/news.png" alt="">
          </div>
          <div class="news-content">
            <h3 class="news-title Regular">{{$t('news.text3')}}</h3>
            <p class="data Regular">{{$t('news.text4')}}</p>
            <p class="desc Light">{{$t('news.text5')}}</p>
            <div class="more-footer">
              <div class="more-w">
                <div class="read Regular">{{$t('news.text6')}}</div>
                <div class="more-right">
                  <img src="../../assets/images/news/more_right.png" alt="">
                </div>
              </div>
            </div>
          </div>
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
  },
  methods: {
    gotoNews () {
      this.$router.push('/news')
    }
  }
}
</script>

<style lang="less" scoped>
.newStory{
  .logo{
    width: 644px;
    margin: 19px 0;
    @media screen and (max-width: 1024px) {
      padding: 0 5%;
      width: 400px;
      height: auto;
    }
    .logo-img{
      width: 100%;
      display: block;
    }
  }
  .top{
    position: relative;
    z-index: 10;
    width: 100%;
    background: rgba(255,255,255,.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title1{
    margin: 63px auto 26px;
    font-size: 39px;
    color: #C4B57A;
    width: 60%;
    text-align: center;
    @media screen and (max-width: 1200px) {
      width: 100%;
      font-size: 30px;
    }
  }
  .big-img{
    margin: 0 auto;
    text-align: center;
    img{
      @media screen and (max-width: 900px) {
        width: 100%;
      }
    }
  }
  .desc1{
    font-size: 20px;
    color: #fff;
    margin: 39px auto 28px;
    text-align: center;
    width: 1314px;
    line-height: 1.5;
    @media screen and (max-width: 1400px) {
      width: 100%;
    }
  }
  .desc2{
    text-align: center;
    font-size: 20px;
    color: #fff;
    width: 1314px;
    margin: 0 auto;
    line-height: 1.5;
    @media screen and (max-width: 1400px) {
      width: 100%;
    }
  }
  .news-uls{
    margin: 262px auto 294px;
    @media screen and (max-width: 1200px) {
      margin: 60px auto;
    }
  }
}
</style>
