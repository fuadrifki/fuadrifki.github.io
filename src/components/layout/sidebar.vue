<template>
  <div class="flex flex-col justify-end h-full space-y-6 text-white">
    <template v-for="contact in contacts" :key="contact">
      <div
        class="
          p-2
          rounded-full
          border border-solid
          bg-gradient-to-r
          from-primary-100
          to-primary-200
        "
      >
        {{ contact.name }}
      </div>
    </template>
    <hr class="border-b-4 border-t-0 border-red-500" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Navbar extends Vue {
  get contacts() {
    return [
      {
        name: 'FB'
      },
      {
        name: 'IG'
      },
      {
        name: 'WA'
      }
    ]
  }
}
</script>
