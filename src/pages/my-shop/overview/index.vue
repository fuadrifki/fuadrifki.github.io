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
      <p>
        Spesial untuk kamu yang berbelanja produk perawatan kecantikan.
        Investasikan kesehatan kulit dengan memberikan produk perawatan terbaik
        dan produk yang aman digunakan untuk semua jenis kulit serta dapat
        digunakan oleh wanita maupun pria.
      </p>
      <p>
        Menyediakan semua jenis sebagai perawatan lengkap untuk masalah umum
        kulit.
      </p>
      <p>
        Kami menjual dari berbagai produk dengan brands yang berbeda. Kami
        melayani pembelian secara retail atau satuan dan dalam jumlah banyak
        atau grosir dengan harga terbaik, kami juga melayani reseller dengan
        sistem dropshipping.
      </p>
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
