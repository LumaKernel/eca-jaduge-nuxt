export const state = () => ({
  sidebar: false,
  hide_ac: false,
  hide_other: false
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  setHideAC (state, b) {
    if (state.hide_ac === b) return
    state.hide_ac = b
  },
  setHideOther (state, b) {
    if (state.hide_other === b) return
    state.hide_other = b
  }
}
