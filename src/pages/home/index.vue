<template>
  <Introduction />
  <CV />
  <Project />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Introduction from './components/introduction.vue'
import CV from './components/cv.vue'
import Project from './components/project.vue'

@Options({
  components: {
    Introduction,
    CV,
    Project
  }
})
export default class Home extends Vue {}
</script>
