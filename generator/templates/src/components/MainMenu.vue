<template>
  <q-scroll-area class="fit">
    <q-list v-for="(menuItem, index) in menuList" :key="index">
      <q-item clickable>
        <q-item-section avatar>
          <q-icon :name="menuItem.icon" />
        </q-item-section>
        <q-item-section>
          {{ menuItem.label }}
        </q-item-section>
      </q-item>
      <q-separator v-if="menuItem.separator" />
    </q-list>
  </q-scroll-area>
</template>

<script lang="ts">
import { QIcon, QItem, QItemSection, QList, QScrollArea } from 'quasar'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

interface IMenuItem {
    icon: string,
    label: string,
    separator: boolean
}

@Component({
  components: { QItem, QItemSection, QScrollArea, QList, QIcon },
})
export default class MainMenu extends Vue {
    public menuList: IMenuItem[] = [
      {
        icon: 'home',
        label: 'home',
        separator: false,
      },
    ]
}
</script>
