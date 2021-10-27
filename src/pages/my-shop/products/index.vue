<template>
  <PageSections
    height="h-full"
    :padding-horizontal="28"
    :spacing="false"
    :is-reverse="false"
  >
    <div
      class="
        grid grid-cols-2
        lg:grid-cols-4
        gap-4
        pb-20
        pt-8
        text-12px
        lg:text-14px
        text-gray-800
      "
    >
      <div
        v-for="(product, index) in productsList"
        :key="index"
        class="
          flex flex-col
          bg-gray-200
          hover:bg-gray-300
          rounded
          cursor-pointer
          relative
          z-10
        "
        @click="() => toDetail(product.title)"
      >
        <!-- coming soon -->
        <img
          class="
            w-full
            h-full
            object-contain
            rounded-sm
            absolute
            top-0
            right-0
            bg-black
            opacity-70
          "
          src="/images/products/coming-soon.png"
          alt="Coming Soon"
        />
        <!-- end coming soon -->

        <div class="space-y-2">
          <img
            class="w-full h-auto object-contain rounded-t"
            :src="`/images/products/${product.image}.png`"
            :alt="product.image"
          />
          <div class="px-2 text-left">
            <p class="hover:text-gray-700">
              {{ product.title }}
            </p>
            <p
              class="text-right font-medium text-primary-300 hover:text-red-600"
            >
              {{ formatPriceRP(product.price) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </PageSections>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PageSections from '/@/components/layout/page-sections.vue'
import { products } from '/@/components/misc/data'
import { formatPriceRP } from '/@/components/misc/utils'
import { MainAppController } from '/@/controllers/MainAppController'

@Options({
  components: {
    PageSections
  }
})
export default class Products extends Vue {
  get productsList() {
    return Array(12)
      .fill('')
      .map(() => products[0])
  }
  formatPriceRP(value: number) {
    return formatPriceRP(value)
  }
  toDetail(title: string) {
    MainAppController.toDetailProduct(title)
  }
}
</script>
