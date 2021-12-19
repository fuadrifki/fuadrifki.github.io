<template>
  <div
    :class="`
      ${height}
      ${spacing && !isDefault ? 'py-20' : ''}
      ${spacingHorizontal && !isDefault ? 'lg:space-x-20' : ''}
      ${isDefault ? '' : `px-8 lg:px-${paddingHorizonal}`}
      ${
        isToRight
          ? `flex-col ${spacing ? 'space-y-20' : ''} bg-gradient-to-r`
          : `${isReverse ? 'flex-col-reverse' : ''} bg-gradient-to-l`
      } 
      flex lg:flex-row
      from-cool-gray-900
      to-cool-gray-800
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
    spacingHorizontal: {
      default: true,
      type: Boolean
    },
    isDefault: {
      default: false,
      type: Boolean
    },
    isReverse: {
      default: true,
      type: Boolean
    },
    height: {
      default: 'lg:h-screen',
      type: String
    },
    paddingHorizonal: {
      default: 40,
      type: Number
    }
  }
})
export default class PageSections extends Vue {}
</script>
