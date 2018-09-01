import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        isloading: false,
    }
})

import Chai from 'chai'
const expect = Chai.expect
{
    const Constuctor = Vue.extend(Button)
    const button = new Constuctor({
        propsData: {
            icon: 'setup'
        }
    })
    button.$mount()
    let use = button.$el.querySelector('use')
    expect(use.getAttribute('xlink:href')).to.eq('#icon-setup')
}
{
    const Constuctor = Vue.extend(Button)
    const button = new Constuctor({
        propsData: {
            loading: true
        }
    })
    button.$mount()
    let use = button.$el.querySelector('use')
    expect(use.getAttribute('xlink:href')).to.eq('#icon-loading')
}
{
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constuctor = Vue.extend(Button)
    const button = new Constuctor({
        propsData: {
            loading: true
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}
{
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constuctor = Vue.extend(Button)
    const button = new Constuctor({
        propsData: {
            loading: true,
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}