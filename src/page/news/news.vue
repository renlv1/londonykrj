<template>
  <div class="news">
    <div class="banner">
      <div class="wrap-top">
        <div class="logo-box">
          <img src="../../assets/images/home/L&OLOGO.png">
        </div>
      </div>
      <div class="common-bottom">
        <div class="bottom-content-d LightItalic  wow slideInUp">{{$t('news.text1')}}</div>
      </div>
    </div>
    <div class="content">
      <h3 class="page-title LightItalic  wow slideInUp">{{$t('news.text2')}}</h3>
      <div class="news-w">
        <ul class="news-uls">
          <li class="news-list  wow slideInUp" @click="gotoStory">
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
          <li class="news-list  wow slideInUp" @click="gotoStory">
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
          <li class="news-list  wow slideInUp" @click="gotoStory">
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
          <li class="news-list  wow slideInUp" @click="gotoStory">
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
          <li class="news-list  wow slideInUp" @click="gotoStory">
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
          <li class="news-list  wow slideInUp" @click="gotoStory">
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
    gotoStory () {
      this.$router.push('/news/newStory')
    }
  }
}
</script>

<style lang="less" scoped>
img{
  width: 100%;
  display: block;
}
.news{
  .banner{
    background-image: url("../../assets/images/news/banner.jpg");
    .banner-img-box{
      width: 100%;
      position: relative;
      @media screen and (min-width: 1920px) {
        .banner{
          height: 893px;
        }
      }
    }
    .bottom-content-d{
      font-size: 43px;
      color: #C4B57A;
      height: 100%;
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
    .logo-page{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      background-color: rgba(46,55,72,.7);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      img{
        width: 644px;
      }
    }
  }
  .wrap-bottom{
    height: 254px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1200px) {
      height: auto;
    }
    .text{
      font-size: 43px;
      color: #C4B57A;
      @media screen and (max-width: 1200px) {
        font-size: 30px;
        width: 60%;
        padding: 30px 0;
      }
    }
  }
  .content{
    margin-bottom: 312px;
    @media screen and (max-width: 1200px) {
      margin-bottom: 10px;
    }
  }
}
</style>
