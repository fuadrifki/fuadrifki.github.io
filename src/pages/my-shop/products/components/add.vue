<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <h1 class="lg:col-span-2 text-18px font-semibold">Detail Produk</h1>
    <Input title="Nama" light placeholder="Masukkan nama" />
    <Input title="Harga" light placeholder="Masukkan harga" />
    <h1 class="lg:col-span-2 text-18px font-semibold mt-4">
      Spesifikasi Produk
    </h1>
    <Input title="Merek" light placeholder="Masukkan nama merek" />
    <Input
      title="Masa penyimpanan"
      light
      placeholder="Masukkan masa penyimpanan"
    />
    <Input custom title="Deskripsi" light class="lg:col-span-2">
      <Editor editor-style="height: 320px" placeholder="Masukkan deskripsi" />
    </Input>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Input from '/@/components/input/index.vue'
import Button from '/@/components/button/index.vue'
import Editor from 'primevue/editor'

@Options({
  components: {
    Input,
    Button,
    Editor
  }
})
export default class AddProduct extends Vue {}
</script>

<style>
.p-editor-container,
.p-editor-toolbar,
.p-editor-content {
  font-family: Poppins, Helvetica, Arial, sans-serif;
}
</style>
