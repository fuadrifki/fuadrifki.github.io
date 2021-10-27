<template>
  <PageSections
    height="h-full"
    :padding-horizontal="28"
    :spacing="false"
    :is-reverse="false"
  >
    <div class="flex flex-col pb-20">
      <div
        class="
          w-full
          flex flex-col
          lg:flex-row
          gap-4
          py-8
          text-14px
          lg:text-18px
        "
      >
        <div class="w-full lg:w-1/3 relative z-10">
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

          <img
            class="w-full h-auto object-contain rounded"
            :src="`/images/products/${detailData.image}.png`"
            :alt="detailData.image"
          />
        </div>
        <div class="w-full lg:w-2/3 px-2 text-left space-y-4">
          <h1 class="font-medium text-24px lg:text-28px">
            {{ detailData.title }}
          </h1>
          <p
            class="
              text-left
              font-medium
              text-28px text-primary-300
              py-2
              px-4
              bg-cool-gray-700
              rounded
            "
          >
            {{ formatPriceRP(detailData.price) }}
          </p>
          <div class="space-y-2 py-4 px-4 bg-cool-gray-700 rounded">
            <h1 class="font-medium text-18px lg:text-20px">
              Spesifikasi Produk
            </h1>
            <div class="grid grid-cols-2 gap-1 pl-4">
              <p>Merek</p>
              <p>
                {{ detailData.merk }}
              </p>
              <p>Masa Penyimpanan</p>
              <p>
                {{ detailData.duration }}
              </p>
            </div>
          </div>
          <div class="w-full flex justify-end">
            <Button title="Beli Sekarang" disabled @click="orderNow" />
          </div>
        </div>
      </div>
      <div class="text-left space-y-2">
        <h1 class="font-medium text-20px lg:text-24px">Deskripsi Produk</h1>
        <p
          class="text-12px lg:text-14px text-left pl-6"
          v-html="detailData?.description"
        />
      </div>
    </div>
  </PageSections>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PageSections from '/@/components/layout/page-sections.vue'
import { products } from '/@/components/misc/data'
import { formatPriceRP } from '/@/components/misc/utils'
import Button from '../../../../components/button/index.vue'

@Options({
  components: {
    PageSections,
    Button
  }
})
export default class ProductDetail extends Vue {
  get title() {
    const title: any = this.$route.params?.title
    return title.replaceAll('-', ' ')
  }
  get productsList() {
    return Array(12)
      .fill('')
      .map(() => products[0])
  }
  get detailData() {
    const detail = this.productsList.find(
      item => item.title.toLowerCase() === this.title
    )

    document.title = document.title + ' | ' + detail?.title

    // meta description
    let meta: any = document.querySelectorAll('meta[name="description"]')
    meta[0].name = 'description'
    meta[0].content = detail?.description || ''
    document.getElementsByTagName('head')[0].appendChild(meta[0])

    return detail
  }
  formatPriceRP(value: number) {
    return formatPriceRP(value)
  }

  orderNow() {
    window.open(
      `https://api.whatsapp.com/send?phone=+6282250824559&text=Hallo%20Ka%20%F0%9F%98%8A%2C%20Saya%20mau%20nanya%20untuk%20produk%20${this.detailData?.title}`,
      '_blank'
    )
  }
}
</script>
