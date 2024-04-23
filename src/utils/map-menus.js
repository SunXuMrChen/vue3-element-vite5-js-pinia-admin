function loadLocalRoutes() {
  // * 动态获取所有的路由对象, 放到数组中
  // * 路由对象都在独立的文件中
  // * 从文件中将所有路由对象先读取数组中
  const localRoutes = []

  // 读取router/main所有的ts文件
  const files = import.meta.glob('../router/main/**/*.js', {
    eager: true
  })

  // 将加载的对象放到localRoutes
  for (const key in files) {
    const modules = files[key]
    console.log(modules?.default)
    for (const module in modules?.default) {
      localRoutes.push(modules?.default[module])
    }
  }

  return localRoutes
}

export let firstMenu = null
export function mapMenusToRoutes(userMenus = []) {
  // 加载本地路由
  const localRoutes = loadLocalRoutes()
  // 根据菜单去匹配正确的路由
  const routes = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      // if (route) routes.push(route)
      if (route) {
        // 给route的顶层菜单增加重定向功能(但是只需要添加一次即可)
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }

        // 将二级菜单对应的路径
        routes.push(route)
      }

      // 记录第一个被匹配到的菜单
      if (!firstMenu && route) firstMenu = submenu
    }
  }
  console.log(routes, 'routes')
  return routes
}

/**
 * 根据路径去匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path, userMenus = []) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }

  return undefined
}

export function mapPathToBreadcrumbs(path, userMenus = []) {
  // 定义面包屑
  const breadcrumbs = []

  // 遍历后去面包屑层级
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        breadcrumbs.push({ name: menu.name, path: menu.url })
        breadcrumbs.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadcrumbs
}

/**
 * 菜单映射到id
 * @param menuList
 */
export function mapMenuListToIds(menuList = []) {
  const ids = []

  function recurseGetId(menus = []) {
    for (const item of menus) {
      if (item.children) {
        recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  recurseGetId(menuList)

  return ids
}

/**
 * 从菜单映射到按钮的权限
 * @param menuList 菜单的列表
 * @returns 权限的数组(字符串数组)
 */
export function mapMenuListToPermissions(menuList = []) {
  const permissions = []

  function recurseGetPermission(menus = []) {
    for (const item of menus) {
      if (item.type === 3) {
        permissions.push(item.permission)
      } else {
        recurseGetPermission(item.children ?? [])
      }
    }
  }
  recurseGetPermission(menuList)

  return permissions
}
