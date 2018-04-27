<template lang="pug">
v-card
  v-card-title 検索
  v-divider
  v-card-text
    v-checkbox(
      v-model.lazy="hide_ac"
      hide-details
      label="未ACのみ表示"
      @change="b => { setHideAC(b) }"
      )
    v-checkbox(
      v-model.lazy="hide_other"
      hide-details
      label="自分の問題のみを表示"
      @change="b => { setHideAC(b) }"
      )
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'hide_ac', 'hide_other'
    ])
  },
  methods: {
    ...mapMutations([
      'setHideAC', 'setHideOther'
    ])
  }
}
</script>

