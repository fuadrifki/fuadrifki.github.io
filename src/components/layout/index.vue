<template>
  <div class="bg-blue-100 h-screen">
    <!-- <Navbar /> -->
    hahaha
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
