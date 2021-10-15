<template>
  <div class="h-screen grid grid-cols-2 bg-gray-50 px-20 space-x-4">
    <div class="flex flex-col space-y-4 text-left justify-center pl-64">
      <div class="text-3xl">Project</div>
      <div class="text-5xl">Fuad Rifqi Zamzami</div>
      <hr class="border-gray-400" />
      <div class="text-xl">Software Engineer</div>
    </div>
    <div class="flex justify-center items-center">
      <div class="grid grid-cols-2 gap-8 items-center">
        <template v-for="project in projects" :key="project.name">
          <img class="w-40" :src="`/@/assets/images/${project.image}.png`" />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Introduction extends Vue {
  get projects() {
    return [
      {
        name: 'Lion Parcel',
        image: 'lion-parcel'
      },
      {
        name: 'BRI',
        image: 'bri'
      },
      {
        name: 'BCA',
        image: 'bca'
      },
      {
        name: 'BNI',
        image: 'bni'
      }
    ]
  }
}
</script>
