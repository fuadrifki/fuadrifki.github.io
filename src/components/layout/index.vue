<template>
  <div :class="`w-full flex flex-col ${isExpand ? 'max-h-screen' : ''}`">
    <div
      id="navbar"
      :class="`${
        !showHeader ? 'hidden' : ''
      } w-full flex flex-row items-start lg:px-40 fixed top-0 inset-x-0`"
    >
      <Navbar />
    </div>
    <div
      :class="`flex flex-col w-full ${
        isExpand ? 'overflow-hidden' : 'overflow-auto'
      }`"
    >
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from './navbar.vue'
import { MainAppController } from '/@/controllers/MainAppController'

@Options({
  components: {
    Navbar
  }
})
export default class Layout extends Vue {
  isScroll = false
  showHeader = true
  lastScrollPosition = 0
  scrollOffset = 60
  mounted() {
    this.isScroll = true
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  }
  beforeDestroy() {
    this.isScroll = false
    window.removeEventListener('scroll', this.onScroll)
  }
  onScroll() {
    if (window.pageYOffset < 0) {
      return
    }
    if (
      Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset
    ) {
      return
    }
    this.showHeader = window.pageYOffset < this.lastScrollPosition
    this.lastScrollPosition = window.pageYOffset
  }

  get isExpand() {
    return MainAppController.isExpand
  }
}
</script>

<style>
.navbar-enter-active,
.navbar-leave-active {
  transform: translateY(0);
  transition: transform 300ms linear;
}
.navbar-enter-from,
.navbar-leave-to {
  transform: translateY(-100px);
}
</style>
