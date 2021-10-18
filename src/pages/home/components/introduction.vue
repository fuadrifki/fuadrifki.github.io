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
        lg:pl-64
        pt-16
      "
    >
      <div class="text-20px lg:text-36px">Hi, I'm</div>
      <div class="text-28px lg:text-48px font-semibold">Fuad Rifqi Zamzami</div>
      <hr class="border-primary-200" />
      <div class="text-16px lg:text-28px">Software Engineer</div>
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
          src="/@/assets/images/me.jpeg"
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
