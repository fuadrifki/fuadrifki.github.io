<template>
  <PageSections is-to-right>
    <div
      class="w-full flex text-primary-200 justify-center items-center text-12px"
    >
      Not Found Pages
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
