<template>
  <div class="w-full flex flex-row items-center justify-between my-4">
    <div
      class="
        bg-red-400
        text-gray-100 text-2xl
        rounded-full
        items-center
        p-4
        cursor-pointer
      "
      @click="() => toMenu('/')"
    >
      FR
    </div>
    <div class="flex flex-row items-center space-x-10">
      <template v-for="menu in menus" :key="menu">
        <div
          :class="`
        text-lg
        font-semibold
        text-gray-500
        hover:text-red-600
        ${isActive(menu.name) ? 'text-red-600' : 'cursor-pointer'}
        `"
          @click="menu.action"
        >
          {{ menu.name }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import router from '/@/router'

export default class Navbar extends Vue {
  isActive(menu: string) {
    return this.$route.name === menu.toLowerCase()
  }
  toMenu(to: string) {
    if (!this.isActive) {
      router.push(to)
    }
  }
  get menus() {
    return [
      {
        name: 'Home',
        action: () => this.toMenu('/')
      },
      {
        name: 'Shop',
        action: () => alert('Shop to be development...')
      },
      {
        name: 'About Me',
        action: () => alert('About Me to be development...')
      }
    ]
  }
}
</script>
