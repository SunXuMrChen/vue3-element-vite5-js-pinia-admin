// 1.区分开发环境和生产环境
// export const BASE_URL = ''

// 2.代码逻辑判断, 判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

const BASE_URL = import.meta.env.VITE_APP_BASE_API
// if (import.meta.env.PROD) {
//   // BASE_URL = ''
// } else {
//   // BASE_URL = ''
// }

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_APP_BASE_API)

const TIME_OUT = 10000

export { TIME_OUT, BASE_URL }
