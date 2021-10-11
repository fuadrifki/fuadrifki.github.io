<template>
  <routes />
  <div>Index Page</div>
  <img alt="Vue logo" src="/@/assets/logo.png" />
  <div class="p-4 bg-red-200">Ini hasil tailwind</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Routes from '/@/components/Routes.vue'

export default defineComponent({
  name: 'Index',
  components: {
    Routes
  }
})
</script>
