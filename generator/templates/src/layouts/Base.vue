<template>
  <q-layout view="HhH lpR fff">
    <q-header elevated>
      <page-header @openSideMenu="sideMenuOpen = !sideMenuOpen" />
    </q-header>
    <q-drawer
      v-model="sideMenuOpen"
      :width="200"
      bordered
    >
      <main-menu />
    </q-drawer>
    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
    <page-footer />
  </q-layout>
</template>

<script lang="ts">
import MainMenu from '@/components/MainMenu.vue'
import PageFooter from '@/components/PageFooter.vue'
import PageHeader from '@/components/PageHeader.vue'
import { QDrawer, QHeader, QLayout, QPage, QPageContainer } from 'quasar'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {
    MainMenu,
    PageFooter,
    PageHeader,
    QDrawer,
    QLayout,
    QPage,
    QPageContainer,
    QHeader,
  },
})
export default class Base extends Vue {
 public sideMenuOpen: boolean = false
}
</script>
