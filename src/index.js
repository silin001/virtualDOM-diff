import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
} from 'snabbdom'
import h from './mySnabbdom/h' // 簡易版

// diff算法核心函数 patch
const patch = init([classModule, propsModule, styleModule, eventListenersModule])
// 获取dom
const container = document.getElementById('container')
const btn = document.getElementById('btn')
// 1. h函数创建虚拟dom
const vnode1 = h('ul', {}, [
  h('li', {}, 'a'),
  h('li', {}, 'b'),
  h('li', {}, 'c'),
  h('li', {}, 'd')
])
const vnode2 = h('ul', {}, [
  h('li', {}, 'a'),
  h('li', {}, 'b'),
  h('li', {}, 'c'),
  h('li', {}, 'd'),
  h('li', {}, 'e')
])
// 2. patch函数 上树
patch(container, vnode1)
// 改变dom
btn.onclick = (() => {
  patch(vnode1, vnode2)
})
