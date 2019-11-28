/* eslint-disable no-new */
import Vue from 'vue'
import router from './router'
import 'babel-polyfill' // 兼容ie
import App from './App'
import { i18n } from './i18n/config'
import 'animate.css'

Vue.config.productionTip = false
// 时间戳转换
Vue.prototype.$changeDate = function (time, str = '/', type = 1) {
  function ifTime (value) { // 判断时间是否是个位数
    if (value < 10) {
      return '0' + value
    }
    return value
  }
  let newTime = new Date(time)
  let day = newTime.getDate()
  let month = newTime.getMonth() + 1
  let year = newTime.getFullYear()
  let hours = newTime.getHours()
  let min = newTime.getMinutes()
  let sec = newTime.getSeconds()
  switch (type) {
    case 1:
      return year + str + ifTime(month) + str + ifTime(day) + ' ' + ifTime(hours) + ':' + ifTime(min)
    case 2:
      return year + str + ifTime(month) + str + ifTime(day) + ' 00:00:00'
    case 3:
      return year + str + ifTime(month) + str + ifTime(day) + ' 23:59:59'
    case 4:
      return year + str + ifTime(month) + str + ifTime(day)
    case 5:
      return year + str + ifTime(month) + str + ifTime(day)
    case 6:
      return ifTime(hours) + ':' + ifTime(min)
    case 7:
      return ifTime(hours) + ':' + ifTime(min) + ':' + ifTime(sec)
  }
}

Vue.filter('f4', function (value) { // 保留4位小数点,不四舍五入
  if (!isNaN(value) && value !== null) {
    let f = Math.floor(value * 10000) / 10000
    let s = f.toString()
    let rs = s.indexOf('.')
    if (rs < 0) {
      rs = s.length
      s += '.'
    }
    while (s.length <= rs + 4) {
      s += '0'
    }
    return s
  } else {
    return '0.0000'
  }
})

new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
