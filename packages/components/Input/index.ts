// import input from "./Input.vue";
// import type { App, Plugin } from "vue";
// type SFCWithInstall<T> = T & Plugin;
// const withInstall = <T>(comp: T) => {
//   (comp as SFCWithInstall<T>).install = (app: App) => {
//     //注册组件
//     app.component((comp as any).name, comp as SFCWithInstall<T>);
//   };
//   return comp as SFCWithInstall<T>;
// };

// const Input = withInstall(input);

// export default Input;


import input from "./src/Input.vue";
import { withInstall } from "@jw-plus/utils";

export const Input = withInstall(input);

export default Input;

// export * from "./src/types";