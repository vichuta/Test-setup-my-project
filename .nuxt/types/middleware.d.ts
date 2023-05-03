import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/STUDENT/Documents/IT3-2/Intership/10-Mysaleng-bot/research/my-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}