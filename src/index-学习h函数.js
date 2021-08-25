import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

// diff算法核心函数 patch
const patch = init([classModule, propsModule, styleModule, eventListenersModule])
// h函数 创建虚拟节点 h(标签,属性,子节点)
let myVnode1 = h('a', {
  props: {
    href: 'http://www.baidu.com',
    target: '_blank'
  }
}, '百度')
let myVnode2 = h('div', '我是一个盒子')
// h函数嵌套使用
let myVnode3 = h('ul', [
  h('li', '香蕉'),
  h('li', [
    h('div', [
      h('p', '哈哈'),
      h('p', '茜茜')
    ])
  ]),
  h('li', h('span', '梨')), // 子元素只有一个时可以省略[]
])
// console.log(myVnode1)
//  虚拟节点上树
const container = document.getElementById('container')
// patch(container, myVnode2)
patch(container, myVnode3)