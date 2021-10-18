import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators'
import store from '/@/store'

@Module({ namespaced: true, dynamic: true, store, name: 'main-app' })
class MainAppStore extends VuexModule {
  public isExpand = false
  public isLargeScreen = window.screen.width > 1024

  @Mutation
  public setExpand() {
    this.isExpand = !this.isExpand
  }
}

export const MainAppController = getModule(MainAppStore)
