// 第一种写法
import type { ExtractPropTypes, PropType } from "vue";
export const ButtonType = [
  "default",
  "primary",
  "success",
  "warning",
  "danger",
];
export const ButtonSize = ["large", "normal", "small", "mini"];
export const buttonProps = {
  visiw: {
    type: String,
    values: ButtonType,
  },
  size: {
    type: String as PropType<"large" | "normal" | "small" | "mini">,
    values: ButtonSize,
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

// import type Button from "./Button.vue";
// 第二种写法（需要引入vite-plugin-vue-type-imports插件）
// export type ButtonType =
//   | "default"
//   | "primary"
//   | "success"
//   | "warning"
//   | "danger";

// export type ButtonSize = "large" | "normal" | "small" | "mini";

// export interface ButtonProps {
//   zzzww: string;
//   size: ButtonSize;
// }

// export type ButtonInstance = InstanceType<typeof Button>;
