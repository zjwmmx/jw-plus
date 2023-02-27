<template>
  <div>
    <input type="text" />
    {{ props }}
    <!-- <button v-bind="props">测试按钮</button> -->
  </div>
</template>

<script setup lang="ts" name="wInput">
// 第一种写法
// import { buttonProps } from "./types";
// const props = defineProps(buttonProps);

// 第二种写法
import { InputSize as Size, InputProps } from "./types";

const props = defineProps(InputProps);

// export interface InputProps {
//   zzzww: string;
//   size: number;
// }

// const props = withDefaults(defineProps<InputProps>(), {
//   visiw: "button",
//   size: 1,
//   zzzww: "sssf",
// });
</script>