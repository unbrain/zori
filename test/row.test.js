import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('exist', () => {
    expect(Row).to.be.ok
  })
  it('can set gutter', (done) => {
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-row gutter="20">
      <g-col span="12"></g-col>
      <g-col span="12"></g-col>
    </g-row> 
    `
    const vm = new Vue({
      el: div,
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('can set align', ()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    let vm = new Constructor({
      propsData:{
        align: 'center'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('center')
    vm.$destroy()
  })
})