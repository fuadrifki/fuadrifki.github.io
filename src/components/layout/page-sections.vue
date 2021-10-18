<template>
  <div
    :class="`
      lg:${height}
      ${spacing ? 'py-20' : ''}
      px-8 lg:px-20
      ${
        isToRight
          ? `flex-col ${spacing ? 'space-y-20' : ''} bg-gradient-to-r`
          : 'flex-col-reverse bg-gradient-to-l'
      } 
      flex lg:flex-row
      from-cool-gray-900
      to-true-gray-900
      text-white`"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    isToRight: {
      default: false,
      type: Boolean
    },
    spacing: {
      default: true,
      type: Boolean
    },
    height: {
      default: 'h-screen',
      type: String
    }
  }
})
export default class PageSections extends Vue {}
</script>
