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
    <p class="text-14px font-semibold">Artikel Lainnya</p>
    <div
      v-for="blog in blogListData"
      :key="blog.id"
      class="flex flex-col space-y-4"
    >
      <img
        class="h-20 lg:h-28 cursor-pointer object-cover"
        :src="`/images/${blog.image}`"
        :alt="blog.image"
        @click="() => toDetail(blog.id)"
      />
      <p
        class="text-12px text-left cursor-pointer"
        @click="() => toDetail(blog.id)"
      >
        {{ ellipsisString(blog.title) }}
      </p>
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
  toDetail(id: string) {
    router.push(`/blog/${id}`)
  }
  ellipsisString(value: string) {
    return ellipsisString(value, 75)
  }
}
</script>
