<!--
 * @Author: wangyunbo
 * @Date: 2021-09-18 15:14:31
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 11:14:36
 * @FilePath: \my-vue3-project\src\components\items\ItemsList.component.vue
 * @Description: file content
-->
<template>
  <div>
    <h3>Items ---- loading: {{ loading }}:</h3>
    <h3>{{ i18n.t("items.list.header") }}</h3>
    <Loader v-show="loading" />
    <ul v-show="!loading">
      <item-component
        v-for="item in items"
        :key="item.id"
        :model="item"
        @select="onItemSelect"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ItemInterface } from "@/models/items/Item.interface";
import ItemComponent from "./children/Item.component.vue";
import Loader from "@/components/shared/Loader.component.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: { ItemComponent, Loader },
  props: {
    items: {
      type: Array as PropType<ItemInterface[]>,
    },
    loading: { type: Boolean },
  },
  setup(props, { emit }) {
    const onItemSelect = (item: ItemInterface) => {
      emit("selectItem", item);
    };
    const i18n = useI18n();
    return {
      onItemSelect,
      i18n,
    };
  },
});
</script>
