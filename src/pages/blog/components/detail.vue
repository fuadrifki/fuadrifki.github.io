<template>
  <PageSections is-to-right height="h-full" :spacing="false">
    <div class="w-full lg:w-3/4 mt-10 lg:mt-32 lg:px-8 py-10 text-left">
      <div class="flex flex-col space-y-4">
        <img
          class="h-64 lg:h-96 object-cover"
          :src="`/images/${detailData.image}`"
          :alt="detailData.image"
        />
        <h1 class="text-24px lg:text-36px font-semibold">
          {{ detailData.title }}
        </h1>
        <p
          class="text-14px leading-loose"
          v-html="
            `<span class='font-semibold'>${detailData.user}</span> - ${detailData.text}`
          "
        />
      </div>
    </div>
    <SidebarBlog />
  </PageSections>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PageSections from '/@/components/layout/page-sections.vue'
import { blogList } from './data'
import SidebarBlog from './sidebar.vue'

@Options({
  components: {
    PageSections,
    SidebarBlog
  }
})
export default class Blog extends Vue {
  get id() {
    return Number(this.$route.params?.id)
  }
  get blogListData() {
    return blogList
  }
  get detailData() {
    return blogList.find(item => item.id === this.id)
  }
}
</script>
