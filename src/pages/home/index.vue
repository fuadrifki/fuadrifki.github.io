<template>
  <Introduction />
  <Overview />
  <Skills />
  <Project />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Introduction from './components/introduction.vue'
import Project from './components/project.vue'
import Overview from './components/overview.vue'
import Skills from './components/skills.vue'

@Options({
  components: {
    Introduction,
    Overview,
    Project,
    Skills
  }
})
export default class Home extends Vue {}
</script>
