const ss = window.localStorage
export default {
  getItem (key) {
    try {
      return JSON.parse(ss.getItem(key))
    } catch (err) {
      return null
    }
  },
  setItem (key, val) {
    ss.setItem(key, JSON.stringify(val))
  },
  clear () {
    ss.clear()
  },
  keys (index) {
    return ss.key(index)
  },
  removeItem (key) {
    ss.removeItem(key)
  }
}
