import vnode from './vnode'

// 编写一个低配版h函数 这个函数必须接收三个参数 缺一不可
// 相当于他的重载功能较弱
// 也就是说只支持调用时以下形态
//  形态1: h('div',{}, '文字')
//  形态1: h('div',{}, [])
//  形态1: h('div',{}, h())
export default function (sel, data, c) {
  // 检查参数个数
  if (arguments.length != 3) throw new Error('对不起,h函数必须传入3个参数,我们是低配版h函数')

  // 检查参数c类型
  if (typeof c == 'string' || typeof c == 'number') {
    // 说明调用的h函数是形态1
    return vnode(sel, data, undefined, c, undefined)
  } else if (Array.isArray(c)) {
    // 形态2
    let children = []
    //  遍历c 收集children
    for (let index = 0, len = c.length; index < len; index++) {
      // 检查c[index] 必须是一个对象
      if (!typeof c[index] == 'object' && c.hasOwnProperty('sel')) {
        throw new Error('传入的数组参数中有项不是h函数!')
      }
      // 这里不用支持c[index]()  因为在嵌套子层是h() 已经执行了
      // 此时只需要收集好就可以了
      children.push(c[index])
    }
    return vnode(sel, data, children, undefined, undefined)

  } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
    // 形态3
    const children = [c]
    // 不用执行c  因为在测试用例中已经执行了
    return vnode(sel, data, children, undefined, undefined)
  } else {
    throw new Error('传入的第三个参数不对!')
  }

}