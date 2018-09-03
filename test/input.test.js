import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('exist', () => {
    expect(Input).to.be.ok
  })
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true,
        },
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true,
        },
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).eq(true)
    })
    it('value', () => {
      vm = new Constructor({
        propsData: {
          value: 'hi',
        },
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).eq('hi')
    })
    it('error', () => {
      vm = new Constructor({
        propsData: {
          error: 'errorMsg',
        },
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
      const errElements = vm.$el.querySelector('.errorMessage')
      console.log(errElements)
      expect(errElements.innerText).eq('errorMsg')
    })

  })

})
