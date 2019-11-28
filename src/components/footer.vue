<template>
  <div class="footer">
    <ul class="footer-nav" style="display: none">
      <!--1-->
      <router-link to="/team" class="footer-list" v-if="$route.path !== '/team'">
        <div class="img-box">
          <img src="../assets/images/common/footer_team.png" alt="">
        </div>
        <p class="title LightItalic">Team</p>
      </router-link>
      <router-link to="/accounts" class="footer-list" v-if="$route.path === '/team'">
        <div class="img-box">
          <img src="../assets/images/common/footer_accounts.jpg" alt="">
        </div>
        <p class="title LightItalic">Accounts</p>
      </router-link>
      <!--2-->
      <router-link to="solutions" class="footer-list" v-if="$route.path !== '/solutions'">
        <div class="img-box">
          <img src="../assets/images/common/footer_solution.jpg" alt="">
        </div>
        <p class="title LightItalic">Solutions</p>
      </router-link>
      <router-link to="/accounts" class="footer-list" v-if="$route.path === '/solutions'">
        <div class="img-box">
          <img src="../assets/images/common/footer_accounts.jpg" alt="">
        </div>
        <p class="title LightItalic">Accounts</p>
      </router-link>
      <!--3-->
      <router-link to="news" class="footer-list" v-if="$route.path.indexOf('news') === -1">
        <div class="img-box">
          <img src="../assets/images/common/footer_home.png" alt="">
        </div>
        <p class="title LightItalic">News</p>
      </router-link>
      <router-link to="/accounts" class="footer-list" v-if="$route.path.indexOf('news') > -1">
        <div class="img-box">
          <img src="../assets/images/common/footer_accounts.jpg" alt="">
        </div>
        <p class="title LightItalic">Accounts</p>
      </router-link>
    </ul>
    <div class="contact-w" style="display: none">
      <h2 class="title LightItalic wow slideInUp">Contact us</h2>
      <div class="example LightItalic">
        <span>02085460340</span>
        <span>info@londonandosford.com</span>
      </div>
      <div class="form-w">
        <div class="input-w email-w">
          <span class="label LightItalic">email:</span>
          <input type="email" class="input-email LightItalic">
        </div>
        <div class="input-w textarea-w">
          <span class="label LightItalic">enquiry:</span>
          <textarea class="input-textarea LightItalic"></textarea>
        </div>
      </div>
    </div>
    <div class="copyright-w">
      <div class="left">
        <h3 class="title Light">London & Oxford group</h3>
        <p class="desc Light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      </div>
      <div class="right">
        <h3 class="title Light">Legal</h3>
        <a class="desc2 desc2-first">Terms Of Use</a>
        <a class="desc2">Privacy Policy</a>
        <a class="desc2">Disclaimer</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  mounted () {
    this.getPath()
  },
  methods: {
    getPath () {
      if (this.$route.path === '/contacts') {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },
  watch: {
    '$route': 'getPath'
  }
}
</script>

<style lang="less" scoped>
</style>
