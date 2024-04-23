const localCache = {
  getCache: (key) => {
    let result = JSON.parse(localStorage.getItem(key))
    if (result) {
      return result
    }
    return null
  },
  setCache: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  removeCache: (key) => {
    localStorage.removeItem(key)
  }
}

const sessionCache = {
  getCache: (key) => {
    let result = JSON.parse(sessionStorage.getItem(key))
    if (result) {
      return result
    }
    return null
  },
  setCache: (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  removeCache: (key) => {
    sessionStorage.removeItem(key)
  }
}

export { localCache, sessionCache }
