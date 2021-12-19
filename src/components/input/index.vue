<template>
  <div
    :class="`flex flex-col ${
      light ? 'text-gray-700' : 'text-white'
    } text-12px space-y-2`"
  >
    <h3 v-if="title" class="text-16px">{{ title }}</h3>
    <slot v-if="custom" />
    <div
      v-else
      :class="`flex flex-row ${!!iconLeft ? 'p-input-icon-left' : ''}${
        !!iconRight || isSecret ? 'p-input-icon-right' : ''
      }`"
    >
      <i v-if="!!iconLeft" :class="`pi pi-${iconLeft} ml-2`" />
      <input
        :value="modelValue"
        :type="type"
        :class="`w-full px-4
      rounded
      text-16px
      focus:outline-none text-gray-700
      ${!!iconLeft ? 'pl-10' : ''}
      ${!!iconRight || isSecret ? 'pr-10' : ''}
      ${inputSize}
      ${
        disabled
          ? 'cursor-not-allowed bg-gray-700'
          : light
          ? 'bg-white border border-gray-300'
          : 'bg-gray-200'
      }`"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="updateValue($event)"
      />
      <i
        v-if="isSecret"
        :class="`pi pi-${isShowText ? 'eye' : 'eye-slash'} cursor-pointer mr-2`"
        @click="onShowText"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import InputText from 'primevue/inputtext'

@Options({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String
    },
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
    iconRight: {
      default: '',
      type: String
    },
    placeholder: {
      default: '',
      type: String
    },
    isSecret: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    light: {
      default: false,
      type: Boolean
    },
    custom: {
      default: false,
      type: Boolean
    }
  },
  components: {
    InputText
  }
})
export default class Input extends Vue {
  props: any = this.$props

  updateValue(e: any) {
    this.$emit('update:modelValue', e.target.value)
  }

  isShowText = false
  onShowText() {
    this.isShowText = !this.isShowText
  }
  get type() {
    if (this.props.isSecret) {
      return this.isShowText ? 'text' : 'password'
    }
    return 'text'
  }

  get inputSize() {
    if (this.props.size === 'large') {
      return 'py-3'
    } else if (this.props.size === 'normal') {
      return 'py-2'
    }
    return ''
  }
}
</script>
