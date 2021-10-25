<template>
  <PageSections>
    <div class="w-full flex flex-col py-8 space-y-6">
      <div class="h-auto justify-center inline-flex">
        <div class="flex-col space-y-2">
          <div class="text-16px lg:text-20px italic">Project Experience</div>
          <div class="text-28px lg:text-40px font-semibold uppercase">
            My Recent Work
          </div>
          <hr class="border-primary-200 -mx-10" />
        </div>
      </div>
      <div class="text-14px lg:text-18px py-6">
        A small gallery of recent projects chosen by me. I've done them all
        together<br class="hidden lg:flex" />with amazing people from companies
        around the globe.
      </div>
      <div class="h-full flex justify-center items-center">
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
