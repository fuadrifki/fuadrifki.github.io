<template>
  <PageSections is-to-right height="h-full min-h-screen" :spacing="false">
    <div class="w-full lg:w-3/4 mt-10 lg:mt-32 lg:px-8 py-10 text-left">
      <div
        v-for="blog in blogListData"
        :key="blog.id"
        class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4"
      >
        <img
          class="h-24 lg:h-32 cursor-pointer object-cover"
          :src="`/images/${blog.image}`"
          :alt="blog.image"
          @click="() => toDetail(blog.id)"
        />
        <div class="flex flex-col space-y-2">
          <h1
            class="cursor-pointer text-18px lg:text-20px font-semibold"
            @click="() => toDetail(blog.id)"
          >
            {{ blog.title }}
          </h1>
          <p
            class="text-14px leading-loose"
            v-html="
              `<span class='font-semibold'>${
                blog.user
              }</span> - ${ellipsisString(blog.text)}`
            "
          />
        </div>
      </div>
    </div>
    <SidebarBlog />
  </PageSections>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PageSections from '/@/components/layout/page-sections.vue'
import { blogList } from './components/data'
import SidebarBlog from './components/sidebar.vue'
import { ellipsisString } from '/@/components/misc/utils'
import router from '/@/router'
import { MainAppController } from '/@/controllers/MainAppController'

@Options({
  components: {
    PageSections,
    SidebarBlog
  }
})
export default class Blog extends Vue {
  get blogListData() {
    return blogList
  }

  get isLargeScreen() {
    return MainAppController.isLargeScreen
  }

  ellipsisString(value: string) {
    return ellipsisString(value, this.isLargeScreen ? 200 : 80)
  }

  toDetail(id: string) {
    router.push(`/blog/${id}`)
  }
}
</script>
