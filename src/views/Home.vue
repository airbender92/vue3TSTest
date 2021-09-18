<!--
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-18 16:54:38
 * @FilePath: \my-vue3-project\src\views\Home.vue
 * @Description: file content
-->
<template>
  <div class="home">
    <items-list-component :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";

export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
  },
  setup() {
    const items: ItemInterface[] = reactive([
      {
        id: 1,
        name: "Item 1",
        selected: false,
      },
      {
        id: 2,
        name: "Item 2",
        selected: false,
      },
      {
        id: 3,
        name: "Item 3",
        selected: false,
      },
    ]);
    return {
      items,
    };
  },
});
</script>
