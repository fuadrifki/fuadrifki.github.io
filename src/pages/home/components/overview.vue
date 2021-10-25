<template>
  <PageSections>
    <div class="w-full lg:w-1/3 flex justify-center items-center pt-20 lg:pt-0">
      <img class="w-40 lg:w-64" src="/images/code.svg" />
    </div>
    <div
      class="
        w-full
        lg:w-2/3
        flex flex-col
        space-y-2
        text-left
        lg:text-right
        justify-center
      "
    >
      <div class="h-auto lg:justify-end inline-flex mb-4">
        <div class="flex-col space-y-2">
          <div class="text-16px lg:text-20px italic">Me, myself and d i</div>
          <h1 class="text-28px lg:text-40px font-semibold uppercase">
            Career Objective
          </h1>
          <hr class="border-primary-200 -mx-10" />
          <div class="text-16px lg:text-28px"></div>
        </div>
      </div>
      <div class="text-14px lg:text-18px space-y-6">
        <p>
          My main area of ​​interest is the front-end. My passion for code has
          begun when college in 2016 and learn the basics in web building.
        </p>
        <p>
          After graduating from college in 2019, I was looking for opportunities
          to work on a broad spectrum of web technologies that would allow me to
          accumulate a large amount of experience. Working for the company, I
          met and learned from amazing and ambitious people.
        </p>
        <p>
          I'm currently working at Lion Parcel, namely one of the delivery
          service providers from the largest airline company in Indonesia,
          namely Lion Air Group.
        </p>
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
export default class Introduction extends Vue {}
</script>
