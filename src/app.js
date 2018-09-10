import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Header from  './header'
import Content from  './content'
import Footer from './footer'
import Sider from './sider'
import Layout from './layout'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-layout', Layout)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    isloading: false,
    msg: 'nihao'
  },
  methods: {
    inputchange (e) {
      console.log(e)
    },
  },
  created(){
    this.$toast('<strong>nihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihaonihao</strong>', {autoClose: false, enableHtml: true})
  }
})