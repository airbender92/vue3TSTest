<!--
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-24 10:49:20
 * @FilePath: \my-vue3-project\src\views\Home.vue
 * @Description: file content
-->
<template>
  <div class="home">
    <items-list-component :items="items" :loading="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import store from "@/store";
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";

export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
  },
  setup() {
    // const items: ItemInterface[] = reactive([]);
    const items = computed(() => {
      return store.state.items;
    });

    const loading = computed(() => {
      return store.state.loading;
    });

    onMounted(() => {
      store.dispatch("loadItems");
    });

    return {
      items,
      loading,
    };
  },
});
</script>
