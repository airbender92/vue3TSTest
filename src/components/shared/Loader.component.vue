<!--
 * @Author: wangyunbo
 * @Date: 2021-09-24 10:50:33
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 11:16:01
 * @FilePath: \my-vue3-project\src\components\shared\Loader.component.vue
 * @Description: file content
-->
<template>
  <div class="loader" v-show="show">
    <div class="bounceball"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
    },
  },
});
</script>
