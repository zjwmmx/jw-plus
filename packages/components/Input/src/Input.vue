<template>
  <div>
    <input type="text" />
    {{ props }}
    <!-- <button v-bind="props">测试按钮</button> -->
  </div>
</template>

<script setup lang="ts">
// 第一种写法
// import { buttonProps } from "./types";
// const props = defineProps(buttonProps);

// 第二种写法
import { InputSize as Size } from "./types";

export interface InputProps {
  zzzww: string;
  size: Size;
}

const props = withDefaults(defineProps<InputProps>(), {
  visiw: "button",
  size: "large",
  zzzww: "sssf",
});
</script>