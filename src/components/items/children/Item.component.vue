<!--
 * @Author: wangyunbo
 * @Date: 2021-09-18 16:17:17
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 11:15:11
 * @FilePath: \my-vue3-project\src\components\items\children\Item.component.vue
 * @Description: file content
-->
<template>
  <li :class="css" @click="onClick">
    <div class="selected-indicator">{{ model.selected ? "√" : "" }}</div>
    <div class="name">{{ model.name }}</div>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { ItemInterface } from "@/models/items/Item.interface";
export default defineComponent({
  props: {
    model: {
      type: Object as PropType<ItemInterface>,
    },
  },
  setup(props, { emit }) {
    const css = computed(() => {
      let css = "item";
      if (props.model?.selected) {
        css += " selected";
      }
      return css.trim();
    });

    const onClick = () => {
      emit("select", props.model);
    };

    return {
      css,
      onClick,
    };
  },
});
</script>
