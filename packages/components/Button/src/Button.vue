<template>
  <div>
    <button v-bind="props">测试按钮</button>
  </div>
</template>

<!-- <script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "Button",
})
</script> -->

<script setup lang="ts" name="wButton">
// 第一种写法
// import { buttonProps } from "./types";
// const props = defineProps(buttonProps);

// 第二种写法
import { buttonProps } from "./Button";

const props = defineProps(buttonProps);

// export interface ButtonProps {
//   zzzww: string;
//   size: string;
// }

// const props = withDefaults(defineProps<ButtonProps>(), {
//   visiw: "button",
//   size: "large",
//   zzzww: "sssf",
// });
</script>