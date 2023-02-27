// 第一种写法
import type { ExtractPropTypes, PropType } from "vue";
export const InputType = [
  "default",
  "primary",
  "success",
  "warning",
  "danger",
];
export const InputSize = ["large", "normal", "small", "mini"];
export const InputProps = {
  visiw: {
    type: String,
    values: InputType,
  },
  size: {
    type: String as PropType<"large" | "normal" | "small" | "mini">,
    values: InputSize,
  },
};

export type InputProps = ExtractPropTypes<typeof InputProps>;

// 第二种写法（需要引入vite-plugin-vue-type-imports插件）
// export type InputType =
//   | "default"
//   | "primary"
//   | "success"
//   | "warning"
//   | "danger";

// export type InputSize = "large" | "normal" | "small" | "mini";

// export interface InputProps {
//   zzzww: string;
//   size: InputSize;
// }
