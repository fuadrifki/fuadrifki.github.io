<template>
  <PageSections
    height="h-full"
    :padding-horizontal="28"
    :spacing="false"
    :is-reverse="false"
  >
    <div
      class="
        flex flex-col
        space-y-6
        text-left text-14px
        lg:text-18px
        py-6
        lg:py-8
        leading-loose
      "
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis a, sequi
      quisquam numquam esse provident natus dignissimos doloribus iure officiis,
      unde accusamus est, consectetur earum aliquid in vel soluta.
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
