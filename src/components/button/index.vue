<template>
  <button
    :class="`flex flex-row justify-center items-center space-x-2
      rounded
      text-16px
      focus:outline-none
      ${buttonSize}
      ${
        disabled
          ? 'cursor-not-allowed bg-gray-400 text-gray-200'
          : outline
          ? 'bg-white hover:bg-gray-200 text-primary-200 border border-primary-200 rounded'
          : 'text-gray-100 hover:text-white bg-primary-200 hover:bg-primary-400'
      }`"
    :disabled="disabled"
  >
    <i v-if="!!iconLeft" :class="`pi pi-${iconLeft}`" />
    <i v-if="loading" class="pi pi-spin pi-spinner" />
    <p v-else>{{ title }}</p>
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
    size: {
      default: 'normal',
      type: String
    },
    iconLeft: {
      default: '',
      type: String
    },
    loading: {
      default: false,
      type: Boolean
    },
    outline: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    }
  }
})
export default class Button extends Vue {
  props: any = this.$props

  get buttonSize() {
    if (this.props.size === 'large') {
      return 'py-3 px-8'
    } else if (this.props.size === 'normal') {
      return 'py-1 px-6'
    }
    return ''
  }
}
</script>
