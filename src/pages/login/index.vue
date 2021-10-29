<template>
  <PageSections is-to-right>
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
      <h1 class="text-28px lg:text-40px font-medium">Masuk ke Apps</h1>
      <div class="flex flex-col w-full lg:w-1/2 space-y-12">
        <div class="flex flex-col w-full space-y-6">
          <Input
            title="Email / Username"
            placeholder="Masukkan email/username"
          />
          <Input title="Password" placeholder="Masukkan password" />
        </div>
        <Button title="Masuk" />
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
  contacts = [
    {
      image: 'whatsapp',
      text: '+6282281400423',
      action: () => this.action('https://wa.me/+6282281400423')
    },
    {
      image: 'email',
      text: 'fuad.rifki98@gmail.com',
      action: () => this.action('mailto:fuad.rifki98@gmail.com')
    },
    {
      image: 'github',
      text: 'Fuad Rifki',
      action: () => this.action('https://github.com/fuadrifki')
    },
    {
      image: 'linkedin',
      text: 'Fuad Rifqi Zamzami',
      action: () => this.action('https://www.linkedin.com/in/fuad-rifki')
    }
  ]
  action(url: string) {
    window.open(url, '_blank')
  }
}
</script>
