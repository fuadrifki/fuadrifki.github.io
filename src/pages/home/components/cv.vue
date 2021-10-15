<template>
  <div
    class="
      h-screen
      grid grid-cols-2
      px-20
      space-x-4
      bg-gradient-to-l
      from-cool-gray-900
      to-true-gray-900
    "
  >
    <div class="flex justify-center items-center">
      <img class="w-64" src="../../../assets/images/document-download.svg" />
    </div>
    <div class="flex flex-col space-y-4 text-right justify-center pr-64">
      <div class="text-3xl">Curriculume Vitae (CV)</div>
      <div class="text-5xl">Fuad Rifqi Zamzami</div>
      <hr class="border-gray-400" />
      <div class="text-xl">Download</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Introduction extends Vue {}
</script>
