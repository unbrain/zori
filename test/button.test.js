import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok
  })
  describe('行为', () => {
    let vm
    let Constructor
    beforeEach(function() {
      Constructor = Vue.extend(Button)
    });
    afterEach(function() {
      vm.$el.remove()
      vm.$destroy()
    });
    it('可以设置icon.', () => {
      vm = new Constructor({
        propsData: {
          icon: 'setup',
        },
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setup')
    })
    it('可以设置loading.', () => {
      vm = new Constructor({
        propsData: {
          loading: true,
        },
      }).$mount()
      const useElements = vm.$el.querySelectorAll('use')
      expect(useElements.length).to.equal(1)
      expect(useElements[0].getAttribute('xlink:href')).
        to.
        equal('#icon-loading')
    })
    it('icon 默认的 order 是 1', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          icon: 'setup',
        },
      }).$mount(div)
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('1')
    })
    it('设置 iconPosition 可以改变 order', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          icon: 'setup',
          iconPosition: 'right',
        },
      }).$mount(div)
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('2')
    })
    it('点击 button 触发 click 事件', () => {
      vm = new Constructor({
        propsData: {
          icon: 'setup',
        },
      }).$mount()
      const callback = sinon.fake()
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.been.called
    })
  })
})