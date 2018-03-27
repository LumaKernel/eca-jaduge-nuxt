<template lang="pug">
v-container(fill-height fluid grid-list-sm)
  v-layout(row wrap)
    v-flex(xs12 lg8)
      v-flex.pa-3(xs12 hidden-lg-and-up)
        ProblemFilter
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
                    small label
                    :outline="!searching_tags.includes(tag)"
                    :color="searching_tags.includes(tag) ? 'primary' : ''"
                    :text-color="searching_tags.includes(tag) ? 'white' : ''"
                    :key="tag"
                    ).tag {{ tagNames[tag] }}
                  //- v-chip(small label color="primary" text-color="white") 幾何
                  //- td.text-xs-right {{ props.item.tags }}
                  //- td.text-xs-right {{ props.item.difficulty }}
                  //- td.text-xs-right {{ props.item.solved }}
                  //- td.text-xs-right {{ props.item.submissions }}
                  //- td.text-xs-right {{ props.item.rate }}
    v-flex.pa-3(lg-8 hidden-md-and-down)
      ProblemFilter
</template>

<script>
import ProblemFilter from '~/components/ProblemFilter.vue'

const tagNames = {
  graph: 'グラフ',
  string: '文字列',
  geography: '幾何',
  manacher: 'Manacher',
  palindrome: '回文'
}
export default {
  components: { ProblemFilter },
  data: () => ({
    show_notac: false,
    show_mine: true,
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
        tags: ['graph', 'string'],
        level: 2,
        solved: 30,
        submissions: 100,
        rate: '30%'
      },
      {
        id: 2,
        name: '回文迷路',
        tags: ['graph', 'string'],
        level: 2,
        solved: 30,
        submissions: 100,
        rate: '30%'
      },
      {
        id: 5,
        name: '最長回文',
        tags: ['string', 'manacher', 'palindrome'],
        level: 2,
        solved: 30,
        submissions: 100,
        rate: '30%'
      },
      {
        id: 3,
        name: '回文グラフ',
        tags: ['string', 'graph', 'palindrome'],
        level: 2,
        solved: 30,
        submissions: 100,
        rate: '30%'
      },
      {
        id: 4,
        name: 'うしの王国',
        tags: ['graph'],
        level: 3,
        solved: 30,
        submissions: 100,
        rate: '30%'
      }
    ]
  })
}
</script>

