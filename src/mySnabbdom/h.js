import vnode from './vnode'

// 编写一个低配版h函数 这个函数必须接收三个参数 缺一不可
// 相当于他的重载功能较弱
// 也就是说只支持调用时以下形态
//  形态1: h('div',{}, '文字')
//  形态1: h('div',{}, [])
//  形态1: h('div',{}, h())
export default function (sel, data, c) {
  // 检查参数个数
  if (arguments.length != 3) {
    throw new Error('对不起,h函数必须传入3个参数,我们是低配版h函数')
  }
  // 检查参数c类型
  if (typeof c == 'string' || typeof c == 'number') {
    // 说明调用的h函数是形态1
    return vnode(sel, data, undefined, c, undefined)
  }
}