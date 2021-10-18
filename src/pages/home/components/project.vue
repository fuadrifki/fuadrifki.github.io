<template>
  <PageSections is-to-right>
    <div class="w-full flex flex-col py-8">
      <div class="h-auto justify-center inline-flex">
        <div class="flex-col space-y-4">
          <div class="text-20px lg:text-36px">Experience</div>
          <div class="text-28px lg:text-48px font-semibold">Project</div>
          <hr class="border-primary-200 -mx-10" />
          <div class="text-16px lg:text-28px"></div>
        </div>
      </div>
      <div class="h-full flex justify-center items-center pt-20 lg:pt-0">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="flex flex-col justify-center"
          >
            <img
              v-if="project.image"
              class="h-20 object-contain"
              :src="`/@/assets/images/${project.image}.png`"
              :alt="project.image"
            />
            <p v-if="project.title" class="text-white text-20px">
              {{ project.title }}
            </p>
            <div
              v-if="project.name"
              class="text-white text-28px"
              v-html="project.name"
            />
          </div>
        </div>
      </div>
    </div>
  </PageSections>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PageSections from '/@/components/layout/page-sections.vue'

@Options({
  components: {
    PageSections
  }
})
export default class Introduction extends Vue {
  get projects() {
    return [
      {
        image: 'lion-parcel'
      },
      {
        image: 'pindad'
      },
      {
        image: 'ayo-belajar'
      },
      {
        image: 'refactory'
      },
      {
        image: 'rsad-ismoyo',
        title: 'RSAD Ismoyo'
      }
    ]
  }
}
</script>
