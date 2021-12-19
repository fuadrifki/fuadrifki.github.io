<template>
  <PageSections is-default height="h-full min-h-screen" :is-reverse="false">
    <div class="mt-20 lg:mt-32 w-full bg-transparent overflow-hidden">
      <div class="px-8 lg:px-40">
        <div class="flex gap-x-6 text-16px border-b border-gray-600 w-full">
          <h1
            v-for="tab in tabs"
            :key="tab.name"
            :class="`pb-4 font-medium hover:text-primary-200 focus:outline-none cursor-pointer ${
              isTabActive(tab.title)
                ? 'text-primary-200 border-b-2 border-primary-200'
                : 'text-white'
            }`"
            @click="changeTabs(tab.name)"
          >
            {{ tab.title }}
          </h1>
        </div>
      </div>
      <router-view />
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
export default class MyShop extends Vue {
  // Tabs
  tabs = [
    {
      name: 'My Shop | Overview',
      title: 'Overview'
    },
    {
      name: 'My Shop | Products',
      title: 'Products'
    }
  ]
  changeTabs(value: string) {
    this.$router.push({
      name: value
    })
  }
  isTabActive(name: string) {
    return this.$route.name.toLowerCase().includes(name.toLowerCase())
  }
}
</script>
