<template>
  <div class="w-full flex flex-row items-center justify-end relative px-8">
    <img
      class="w-40 cursor-pointer absolute left-14 top-8"
      src="/@/assets/images/logo.png"
      @click="() => toMenu('/')"
    />
    <div
      class="
        flex flex-col
        justify-between
        space-y-4
        pt-14
        w-full
        border-l-4 border-gray-700
      "
    >
      <div class="text-xl font-semibold text-transparent">test</div>
      <hr class="border-b-4 border-t-0 border-gray-700" />
    </div>
    <div
      class="w-auto flex flex-row items-center pt-14 border-r-4 border-gray-700"
    >
      <template v-for="(menu, idx) in menus" :key="menu">
        <div class="flex flex-col justify-between space-y-4">
          <div
            :class="`
        text-xl
        font-medium
        whitespace-nowrap
        px-6
        ${idx === menus.length - 1 ? 'mr-16' : ''}
        text-white
        hover:text-primary-200
        ${isActive(menu.name) ? 'text-primary-200' : 'cursor-pointer'}
        `"
            @click="menu.action"
          >
            {{ menu.name }}
          </div>
          <hr
            :class="
              isActive(menu.name)
                ? 'border-b-4 border-t-0 border-primary-200'
                : 'border-b-4 border-t-0 border-gray-700'
            "
          />
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
    return this.$route.name?.toLowerCase() === menu.toLowerCase()
  }
  toMenu(to: string) {
    router.push(to)
  }
  get menus() {
    return [
      {
        name: 'Home',
        action: () => this.toMenu('/')
      },
      {
        name: 'Blog',
        action: () => alert('Blog to be development...')
      },
      {
        name: 'My Shop',
        action: () => this.toMenu('/my-shop')
      },
      {
        name: 'About Me',
        action: () => alert('About Me to be development...')
      }
    ]
  }
}
</script>
