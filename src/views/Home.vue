<!--
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-09 10:11:05
 * @FilePath: \my-vue3-project\src\views\Home.vue
 * @Description: file content
-->
<template>
  <div class="home">
    <items-list-component
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { MutationType, StoreModuleNames } from "@/models/store";
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";
import { useItemsStore } from "@/store/items";

export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
  },
  setup() {
    const itemsStore = useItemsStore();
    const items = computed(() => {
      return itemsStore.state.items;
    });

    const loading = computed(() => {
      return itemsStore.state.loading;
    });

    const onSelectItem = (item: ItemInterface) => {
      itemsStore.action(MutationType.items.selectItem, {
        id: item.id,
        selected: !item.selected,
      });
    };

    onMounted(() => {
      itemsStore.action(MutationType.items.loadItems);
    });

    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>
