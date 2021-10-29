<template>
  <div class="flex flex-col text-white text-14px space-y-2">
    <h3 class="text-16px">{{ title }}</h3>
    <input
      :class="`px-4
      py-2
      rounded
      text-16px
      relative focus:outline-none text-gray-800
      ${disabled ? 'cursor-not-allowed bg-gray-700' : 'bg-gray-100'}`"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    title: {
      default: '',
      type: String
    },
    placeholder: {
      default: '',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  }
})
export default class Input extends Vue {}
</script>
