<template>
  <PageSections is-to-right>
    <div
      class="
        w-full
        lg:w-1/2
        flex flex-col
        space-y-4
        text-left
        justify-center
        pt-16
      "
    >
      <div class="h-auto inline-flex">
        <div class="flex-col space-y-2">
          <div class="text-16px lg:text-24px italic">Hi there, I'm</div>
          <h1 class="text-28px lg:text-40px font-semibold uppercase">
            Fuad Rifqi Zamzami
          </h1>
          <hr class="border-primary-200 -mx-10" />
          <div class="text-14px lg:text-20px">
            I'm a software engineer based <br class="lg:hidden" />
            in Jambi, Indonesia.
          </div>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 flex justify-center items-center">
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
          class="w-44 lg:w-64 rounded-full border-8 border-transparent"
          src="/images/me.jpeg"
        />
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
