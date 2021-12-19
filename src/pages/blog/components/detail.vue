<template>
  <PageSections
    is-to-right
    height="h-full min-h-screen"
    :spacing="false"
    :spacing-horizontal="false"
  >
    <section class="w-full lg:w-3/4 mt-10 lg:mt-32 py-10 text-left mr-8">
      <div v-if="title" class="flex flex-col space-y-4">
        <img
          class="h-64 lg:h-96 object-cover"
          :src="`/images/${detailData.image}`"
          :alt="detailData?.title"
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
      <div
        v-else
        class="flex justify-center items-center h-full text-primary-200"
      >
        Blog not found
      </div>
    </section>
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
  get title() {
    const title: any = this.$route.params?.title
    return title.replaceAll('-', ' ')
  }
  get blogListData() {
    return blogList
  }
  get detailData() {
    const detail = blogList.find(
      item => item.title.toLowerCase() === this.title
    )

    document.title = document.title + ' | ' + detail?.title

    // meta description
    let meta: any = document.querySelectorAll('meta[name="description"]')
    meta[0].name = 'description'
    meta[0].content = detail?.text || ''
    document.getElementsByTagName('head')[0].appendChild(meta[0])

    return detail
  }
}
</script>
