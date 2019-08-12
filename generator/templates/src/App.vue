<template>
  <div>
    <router-view />
    <loading :pending="$anyXhrPending()" />
    <error :last-error="$lastXhrErrorResponse()" />
  </div>
</template>

<script lang="ts">
import Loading from '@/components/Loading.ts'
import Error from '@laura-wert/vee-form-handler'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { Error, Loading },
})
export default class App extends Vue {}
</script>
