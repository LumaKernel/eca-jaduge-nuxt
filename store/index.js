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
    state.hide_ac = b
  },
  setHideOther (state, b) {
    state.hide_other = b
  }
}
