<template>
  <PageSections>
    <div class="w-full lg:w-1/2 flex justify-center items-center pt-20 lg:pt-0">
      <img
        class="w-40 lg:w-64"
        src="../../../assets/images/document-download.svg"
      />
    </div>
    <div
      class="
        w-full
        lg:w-1/2
        flex flex-col
        space-y-4
        text-center
        lg:text-right
        justify-center
        lg:pr-64
      "
    >
      <div class="text-20px lg:text-36px">Curriculume Vitae (CV)</div>
      <div class="text-28px lg:text-48px font-semibold">Fuad Rifqi Zamzami</div>
      <hr class="border-primary-200" />
      <div class="text-16px lg:text-28px">Document</div>
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
