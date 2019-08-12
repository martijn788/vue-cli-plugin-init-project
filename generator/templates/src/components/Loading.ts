import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  @Prop({ required: true }) private pending!: boolean

  @Watch('pending')
  private onPending(): void {
    if (this.pending) {
      this.$q.loading.show({ delay: 500 })
    } else {
      this.$q.loading.hide()
    }
  }

  private render(): null {
    return null
  }
}
