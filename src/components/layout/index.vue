<template>
  <div class="flex flex-row items-center px-20 bg-gray-50">
    <Navbar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from './navbar.vue'

@Options({
  components: {
    Navbar
  }
})
export default class Layout extends Vue {}
</script>
