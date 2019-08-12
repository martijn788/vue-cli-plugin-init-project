import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface interface-name
    interface Element extends VNode { }
    // tslint:disable no-empty-interface interface-name
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      // tslint:disable no-any
      [elem: string]: any
    }
  }
}
