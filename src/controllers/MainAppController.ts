import {
  VuexModule,
  Module,
  Mutation,
  getModule,
  Action
} from 'vuex-module-decorators'
import router from '../router'
import store from '/@/store'

@Module({ namespaced: true, dynamic: true, store, name: 'main-app' })
class MainAppStore extends VuexModule {
  public isExpand = false
  public isLargeScreen = window.screen.width > 1024

  @Mutation
  public setExpand() {
    if (!this.isLargeScreen) {
      this.isExpand = !this.isExpand
    }
  }

  @Action
  public toDetailBlog(title: string) {
    router.push(`/blog/${title.toLowerCase().replaceAll(' ', '-')}`)
  }
}

export const MainAppController = getModule(MainAppStore)
