<template>
  <div class="w-full flex flex-col">
    <!-- navbar -->
    <div
      v-if="!isExpand && !isLargeScreen"
      class="
        w-full
        flex flex-row
        justify-between
        items-center
        bg-black
        opacity-80
        p-4
        border-b border-primary-200
      "
    >
      <img
        class="w-10 cursor-pointer"
        src="/@/assets/images/logo.png"
        @click="() => toMenu('/')"
      />
      <img
        class="w-5 cursor-pointer"
        src="/@/assets/images/bars.svg"
        @click="onExpand"
      />
    </div>
    <!-- end navbar -->

    <!-- navbar menu -->
    <div
      v-if="isLargeScreen ? true : isExpand"
      class="
        w-full
        h-screen
        lg:h-full
        flex flex-col
        bg-black
        opacity-80
        lg:bg-transparent lg:flex-row
        items-center
        justify-center
        lg:justify-end
        relative
      "
    >
      <img
        v-if="!isLargeScreen"
        class="w-8 cursor-pointer absolute top-3 right-3"
        src="/@/assets/images/x.svg"
        @click="onExpand"
      />
      <img
        v-if="!isExpand"
        class="
          w-20
          lg:w-40
          cursor-pointer
          absolute
          justify-center
          lg:left-14
          top-8
        "
        src="/@/assets/images/logo.png"
        @click="() => toMenu('/')"
      />
      <div
        v-if="!isExpand"
        class="
          flex flex-col
          justify-between
          space-y-4
          pt-14
          w-full
          lg:border-l-4
          border-gray-700
        "
      >
        <div class="text-16px lg:text-20px font-semibold text-transparent">
          test
        </div>
        <hr class="lg:border-b-4 border-t-0 border-gray-700" />
      </div>
      <div
        class="
          w-auto
          flex flex-col
          lg:flex-row
          items-center
          lg:pt-14 lg:border-r-4
          border-gray-700
          py-4
          lg:py-0
        "
      >
        <template v-for="(menu, idx) in menuList" :key="idx">
          <div class="flex flex-col justify-between space-y-4">
            <div
              :class="`
                text-16px lg:text-20px
                font-medium
                whitespace-nowrap
                px-6
                ${idx === menuList.length - 1 ? 'lg:mr-16' : ''}
                text-white
                hover:text-primary-200
                ${isActive(menu.name) ? 'text-primary-200' : 'cursor-pointer'}
                `"
              @click="menu.action"
            >
              {{ menu.name }}
            </div>
            <hr
              :class="
                isActive(menu.name)
                  ? 'lg:border-b-4 border-t-0 border-primary-200'
                  : 'lg:border-b-4 border-t-0 border-gray-700'
              "
            />
          </div>
        </template>
      </div>
    </div>
    <!-- end navbar -->
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { MainAppController } from '/@/controllers/MainAppController'
import router from '/@/router'

export default class Navbar extends Vue {
  isActive(menu: string) {
    return this.$route.name?.toLowerCase() === menu.toLowerCase()
  }
  toMenu(to: string) {
    this.onExpand()
    router.push(to)
  }
  get menuList() {
    return [
      {
        name: 'Home',
        action: () => this.toMenu('/')
      },
      {
        name: 'Blog',
        action: () => this.toMenu('/blog')
      },
      {
        name: 'My Shop',
        action: () => alert('My Shop to be development...')
      },
      {
        name: 'About Me',
        action: () => alert('About Me to be development...')
      }
    ]
  }

  // expand menu
  get isExpand() {
    return MainAppController.isExpand
  }
  onExpand() {
    MainAppController.setExpand()
  }

  get isLargeScreen() {
    return MainAppController.isLargeScreen
  }
}
</script>
