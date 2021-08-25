import h from './mySnabbdom/h'

const myVnode = h('div', {}, 123)
const myVnode2 = h('div', {}, [
  h('li', {}, '哈哈'),
  h('li', {}, '茜茜'),
  h('li', {}, '么么哒'),
  h('li', {}, [
    h('span', {}, 'aaa')
  ]),
  h('div', {}, h('h1', {}, 'h1'))
])

// 上树
let myVnode3 = h('ul', {}, [
  h('li', {}, '香蕉'),
  h('li', {}, [
    h('div', {}, [
      h('p', {}, '哈哈'),
      h('p', {}, '茜茜')
    ])
  ]),
  h('li', {}, h('span', {}, '梨')), // 子元素只有一个时可以省略[]
])
console.log(myVnode3)