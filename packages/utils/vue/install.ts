import type { App, Plugin } from "@vue/runtime-core"
export type SFCWithInstall<T> = T & Plugin
// export default <T>(comp: T) => {
//     (comp as SFCWithInstall<T>).install = (app: App) => {
//         // 当组件是 script setup 的形式时，会自动以为文件名注册，会挂载到组件的__name 属性上
//         // 所以要加上这个条件
//         const name = (comp as any).name || (comp as any).__name
//         //注册组件
//         app.component(name, comp as SFCWithInstall<T>)
//     }
//     return comp as SFCWithInstall<T>
// }

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
      // 当组件是 script setup 的形式时，会自动以为文件名注册，会挂载到组件的__name 属性上
      // 所以要加上这个条件
      const name = (comp as any).name || (comp as any).__name
      //注册组件
      app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}

export const useInstall = (components: Plugin[] = []) => {
  const install = (app: App, options?: any) => {
    // if (app[INSTALLED_KEY]) return

    // app[INSTALLED_KEY] = true
    components.forEach((c: any) => app.component(c.name, c.component))

    // if (options) provideGlobalConfig(options, app, true)
  }
  return install;
}