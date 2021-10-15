<template>
  <div class="flex flex-col relative">
    <div class="flex flex-row overflow-hidden absolute left-10 botton-10">
      <Sidebar />
    </div>
    <div class="w-full flex flex-col overflow-auto layout">
      <div
        id="navbar"
        :class="`${
          !showHeader ? 'hidden' : ''
        } w-full flex flex-row items-start px-40 fixed top-0 inset-x-0`"
      >
        <Navbar />
      </div>
      <div class="flex flex-col w-full overflow-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from './navbar.vue'
import Sidebar from './sidebar.vue'

@Options({
  components: {
    Navbar,
    Sidebar
  }
})
export default class Layout extends Vue {
  showHeader = true
  lastScrollPosition = 0
  scrollOffset = 100
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  }
  beforeDestroy() {
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
}
</script>

<style>
.layout {
  height: 300vh;
  background: #616161;
  background: linear-gradient(#9bc5c3, #616161);
}

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
