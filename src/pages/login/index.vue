<template>
  <PageSections is-to-right height="h-full min-h-screen">
    <div
      class="
        w-full
        flex flex-col
        space-y-4
        text-left
        justify-center
        pt-16
        lg:pl-40
      "
    >
      <h1 class="text-32px lg:text-40px font-medium">Masuk ke Apps</h1>
      <div class="flex flex-col w-full lg:w-2/5 space-y-12">
        <div class="flex flex-col w-full space-y-6">
          <Input
            v-model="form.name"
            title="Email / Username"
            placeholder="Masukkan email/username"
          />
          <Input
            v-model="form.password"
            title="Password"
            is-secret
            placeholder="Masukkan password"
          />
        </div>
        <Button title="Masuk" :disabled="disabled" />
      </div>
    </div>
  </PageSections>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PageSections from '/@/components/layout/page-sections.vue'
import Input from '/@/components/input/index.vue'
import Button from '../../components/button/index.vue'

@Options({
  components: {
    PageSections,
    Input,
    Button
  }
})
export default class Contact extends Vue {
  form = {
    name: '',
    password: ''
  }
  get disabled() {
    return !this.form.name || !this.form.password
  }
}
</script>
