import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 图标全局注册
function registerIcons(app) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default registerIcons
