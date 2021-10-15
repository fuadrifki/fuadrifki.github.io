<template>
  <div
    class="
      h-screen
      grid grid-cols-2
      px-20
      space-x-4
      bg-gradient-to-r
      from-cool-gray-900
      to-true-gray-900
      text-white
    "
  >
    <div class="flex flex-col space-y-4 text-left justify-center pl-64">
      <div class="text-3xl">Hi, I'm</div>
      <div class="text-5xl">Fuad Rifqi Zamzami</div>
      <hr class="border-primary-200" />
      <div class="text-xl">Software Engineer</div>
    </div>
    <div class="flex justify-center items-center">
      <div
        class="
          rounded-full
          border-4 border-white
          bg-gradient-to-r
          from-primary-100
          to-primary-200
        "
      >
        <img
          class="w-64 rounded-full border-8 border-transparent"
          src="/@/assets/images/me.jpeg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Introduction extends Vue {}
</script>
