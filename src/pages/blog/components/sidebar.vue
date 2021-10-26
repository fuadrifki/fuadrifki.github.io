<template>
  <div
    class="
      w-full
      lg:w-1/4
      mt-10
      lg:mt-32
      space-y-6
      lg:pl-8
      py-10
      lg:border-l lg:border-primary-200
    "
  >
    <h1 class="text-20px font-semibold uppercase">Artikel Lainnya</h1>
    <div
      v-for="blog in blogListData"
      :key="blog.id"
      class="flex flex-col space-y-4"
    >
      <img
        class="h-40 lg:h-28 cursor-pointer object-cover"
        :src="`/images/${blog.image}`"
        :alt="blog.title"
        @click="() => toDetail(blog.title)"
      />
      <h1
        class="text-12px text-left cursor-pointer"
        @click="() => toDetail(blog.title)"
      >
        {{ ellipsisString(blog.title) }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { blogList } from './data'
import { ellipsisString } from '/@/components/misc/utils'
import router from '/@/router'

export default class SidebarBlog extends Vue {
  get blogListData() {
    return blogList
  }
  toDetail(title: string) {
    MainAppController.toDetailBlog(title)
  }
  ellipsisString(value: string) {
    return ellipsisString(value, 75)
  }
}
</script>
