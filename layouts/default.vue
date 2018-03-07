<template lang="pug">
v-app
  v-navigation-drawer(:mini-variant.sync='miniVariant', :clipped='clipped', v-model='drawer', fixed, app)
    v-list
      template(v-for='(item, i) in items')
        v-divider(v-if="item === 'divider'")
        v-list-tile(v-else router :to='item.to' :key='i' exact)
          v-list-tile-action
            v-icon(v-html='item.icon')
          v-list-tile-content
            v-list-tile-title(v-text='item.title')
  v-toolbar(fixed, app, :clipped-left='clipped')
    v-toolbar-side-icon(@click='drawer = !drawer')
    v-toolbar-title(v-text='title')
    v-spacer
    //- アカウント情報
    v-btn(icon large)
      v-avatar(:size="32" tile)
        img(src="~assets/imgs/vue.png")
  v-content
    v-container(fill-height fluid)
      nuxt
  v-navigation-drawer(temporary, :right='right', v-model='rightDrawer', fixed)
    v-list
      v-list-tile(@click.native='right = !right')
        v-list-tile-action
          v-icon(light) compare_arrows
        v-list-tile-title Switch drawer (click me)
  v-footer(:fixed='fixed', app)
    span &copy; 2018
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'トップ', to: '/' },
          'divider',
          { icon: 'library_books', title: '問題', to: '/problems' },
          { icon: 'computer', title: 'コンテスト', to: '/contests' },
          { icon: 'help_outline', title: 'ヘルプ', to: '/help' },
          { icon: 'description', title: 'えかじゃっじについて', to: '/about' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'えかじゃっじ'
      }
    }
  }
</script>
