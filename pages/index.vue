<template lang="pug">
v-container(fill-height fluid)
  v-layout(row wrap)
    v-flex(xs12)
      v-card
        v-container: v-layout
          v-flex
            h3.display-3 ようこそるまじゃっじへ！
            v-divider.my-3
            p 競技プログラミングの問題を解けます。
            p まずは以下の問題を解いてみてください！
    v-flex(xs12)
      v-card
        v-container: v-layout
          v-flex
            h3.display-3 レートを上げよう！
            v-divider.my-3
            span.headline ノエルちゃんを喜ばせるとレートがあがります。
</template>
