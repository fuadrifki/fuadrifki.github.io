<template>
  <PageSections is-to-right>
    <div
      class="w-full lg:w-2/3 flex flex-col space-y-4 text-left justify-center"
    >
      <div class="h-auto inline-flex">
        <div class="flex-col space-y-2">
          <div class="text-16px lg:text-20px italic">My passion</div>
          <h1 class="text-28px lg:text-40px font-semibold uppercase">
            Skills & Experience
          </h1>
          <hr class="border-primary-200 -mx-10" />
          <div class="text-16px lg:text-28px"></div>
        </div>
      </div>
      <div class="text-14px lg:text-18px space-y-6">
        <p>
          Since starting my journey as software engineer, I've done work with
          teams at companies for agencies and collaborated with talented people
          to create web products for business and consumer use.
        </p>
        <p>
          I managed to create a responsive website that is fast, easy to use and
          built with best practices. My main areas of expertise are front-end
          development, HTML, CSS plus framework like Tailwind, Javascript and
          Typescript plus framework like Vue, React JS and React Native, ES6,
          building small and medium web applications, android applications
          features, animation, interactive layout coding and clean architecture
          coding.
        </p>
        <p>
          I also have full-stack developer experience with popular open-source
          CMS like WordPress.
        </p>
      </div>
    </div>
    <div class="w-full lg:w-1/3 flex justify-center items-center">
      <div class="grid grid-cols-2 gap-10 items-center">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="flex flex-col justify-center"
        >
          <img
            v-if="skill.image"
            class="h-20 object-contain"
            :src="`/images/${skill.image}-logo.svg`"
            :alt="skill.image"
          />
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
  get skills() {
    return [
      {
        image: 'html'
      },
      {
        image: 'css'
      },
      {
        image: 'tailwind'
      },
      {
        image: 'javascript'
      },
      {
        image: 'es6'
      },
      {
        image: 'typescript'
      },
      {
        image: 'vue'
      },
      {
        image: 'react'
      }
    ]
  }
}
</script>
