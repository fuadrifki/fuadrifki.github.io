<template>
  <PageSections is-to-right>
    <div
      class="
        w-full
        lg:w-1/2
        flex flex-col
        space-y-4
        text-left
        justify-center
        pt-16
        lg:pl-40
      "
    >
      <h1 class="text-28px lg:text-40px font-medium">Contact</h1>
      <div
        v-for="contact in contacts"
        :key="contact.image"
        class="cursor-pointer text-white hover:text-primary-200 text-left"
        @click="contact.action"
      >
        <div class="flex flex-row space-x-4 items-center py-2">
          <img
            class="h-6 w-auto"
            :src="`/images/${contact.image}.svg`"
            :alt="contact.text"
          />
          <div>{{ contact.text }}</div>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 flex justify-center items-center">
      <div
        class="
          rounded-full
          border-4 border-white
          bg-gradient-to-r
          from-primary-100
          to-primary-200
        "
      >
        <img
          class="w-44 lg:w-64 rounded-full border-8 border-transparent"
          src="/images/me.jpeg"
        />
      </div>
    </div>
  </PageSections>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PageSections from '/@/components/layout/page-sections.vue'

@Options({
  components: {
    PageSections
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
