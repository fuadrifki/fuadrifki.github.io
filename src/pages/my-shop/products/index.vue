<template>
  <PageSections
    height="h-full"
    :padding-horizontal="28"
    :spacing="false"
    :is-reverse="false"
  >
    <div
      class="w-full flex text-primary-200 justify-center items-center text-12px"
    >
      Products Pages
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
