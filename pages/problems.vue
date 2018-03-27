<template lang="pug">
//- TODO : gird-list?
v-container(fill-height fluid grid-list-sm)
  v-layout(row wrap)
    v-flex.pa-3(xs12 hidden-lg-and-up)
      v-card
        v-card-title 検索
        v-divider
        v-card-text
          v-checkbox(v-model="show_notac" hide-details label="未ACのみ表示")
          v-checkbox(v-model="show_mine" hide-details label="自分の問題を表示")
    v-flex(xs12 lg8)
      //- v-flex(xs12)
      //-   v-card
      //-     v-container: v-layout
      //-       v-flex
      //-         h3.display-3 ようこそるまじゃっじへ！
      //-         v-divider.my-3
      //-         p 競技プログラミングの問題を解けます。
      //-         p まずは以下の問題を解いてみてください！
      v-flex(xs12)
        v-data-table(
          :headers="headers"
          :items="items"
          :rows-per-page-items="[10, 25, 50, {'text': 'すべて', 'value': -1}]"
          rows-per-page-text="表示数"
        )
          template(slot='headers' slot-scope='props')
            tr
              th 問題ID
              th
                |問題名
                br
                |タグ
          template(slot='items' slot-scope='props')
            td # {{ props.item.id }}
            td
              v-layout(row wrap grid-list-sm)
                //- 問題名
                v-flex(xs12)
                  router-link(to="dummy") {{ props.item.name }}
                //- タグ
                v-flex(xs12)
                  v-chip(
                    v-for="tag in props.item.tags"
                    small label outline
                    :key="tag"
                    ).tag {{ tagNames[tag] }}
                  v-chip(small label color="primary" text-color="white") 幾何
                  //- td.text-xs-right {{ props.item.tags }}
                  //- td.text-xs-right {{ props.item.difficulty }}
                  //- td.text-xs-right {{ props.item.solved }}
                  //- td.text-xs-right {{ props.item.submissions }}
                  //- td.text-xs-right {{ props.item.rate }}
    v-flex.pa-3(lg-8 hidden-md-and-down)
      v-card
        v-card-title 検索
        v-divider
        v-card-text
          v-checkbox(v-model="show_notac" hide-details label="未ACのみ表示")
          v-checkbox(v-model="show_mine" hide-details label="自分の問題を表示")
</template>

<script>
const tagNames = {
  graph: 'グラフ'
}
export default {
  data: () => ({
    show_notac: false,
    show_mine: false,
    tagNames,
    searching_tags: [
      'graph'
    ],
    headers: [
      {
        text: '問題ID',
        value: 'id'
      },
      {
        text: '問題名',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      {
        text: 'タグ',
        value: 'tags',
        sortable: false
      },
      { text: 'レベル', value: 'level' },
      { text: '正解者数', value: 'solved' },
      { text: '提出数', value: 'submissions' },
      { text: '正解率', value: 'rate' }
    ],
    items: [
      {
        id: 1,
        name: '回文王国',
        tags: ['graph'],
        level: 2,
        solved: 30,
        submissions: 100,
        rate: '30%'
      },
      {
        id: 2,
        name: '回文迷路',
        level: 2,
        solved: 30,
        submissions: 100,
        rate: '30%'
      },
      {
        id: 5,
        name: '最長回文',
        level: 2,
        solved: 30,
        submissions: 100,
        rate: '30%'
      },
      {
        id: 3,
        name: '回文グラフ',
        level: 2,
        solved: 30,
        submissions: 100,
        rate: '30%'
      },
      {
        id: 4,
        name: 'うしの王国',
        level: 3,
        solved: 30,
        submissions: 100,
        rate: '30%'
      }
    ]
  })
}
</script>

