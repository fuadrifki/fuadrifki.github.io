<template>
  <template v-for="menu in menus" :key="menu">
    <div
      class="
        cursor-pointer
        text-lg
        font-semibold
        text-gray-500
        hover:text-red-600
      "
    >
      {{ menu.name }}
    </div>
  </template>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Navbar extends Vue {
  get menus() {
    return [
      {
        name: 'Home'
      },
      {
        name: 'Shop'
      },
      {
        name: 'About Me'
      }
    ]
  }
}
</script>
