<template>
  <div class="row justify-center">
    <div class="col-xs-12 col-md-8">
      <h1>{{ $t('texts.pageNotFound.pageTitle') }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class PageNotFound extends Vue {}
</script>

<style lang="stylus" scoped>
</style>
