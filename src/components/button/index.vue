<template>
  <button
    :class="`px-8
      py-3
      rounded
      text-16px
      relative focus:outline-none
      ${
        disabled
          ? 'cursor-not-allowed bg-gray-700 text-gray-500'
          : 'text-gray-800 hover:text-white bg-primary-200 hover:bg-primary-100'
      }`"
    :disabled="disabled"
  >
    {{ title }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    title: {
      default: '',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  }
})
export default class Button extends Vue {}
</script>
