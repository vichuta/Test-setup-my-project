import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/STUDENT/Documents/IT3-2/Intership/10-Mysaleng-bot/research/my-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}