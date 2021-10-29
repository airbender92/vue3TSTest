<!--
 * @Author: wangyunbo
 * @Date: 2021-10-09 17:42:51
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 11:15:31
 * @FilePath: \my-vue3-project\src\components\locale-selector\LocaleSelector.component.vue
 * @Description: file content
-->
<template>
  <div class="locale-selector">
    <div class="locale-radio-group">
      <LocaleFlagRadio
        v-for="(localeInfo, index) in availableLocales"
        :key="index"
        :localeInfo="localeInfo"
        @clicked="onFlagClicked"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { LocalInfoInterface } from "@/models/localization/LocaleInfo.interface";
import LocaleFlagRadio from "./LocaleFlagRadio.component.vue";

export default defineComponent({
  components: {
    LocaleFlagRadio,
  },
  props: {
    availableLocales: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    const i18n = useI18n();
    const onFlagClicked = (localeInfo: LocalInfoInterface) => {
      emit("clicked", localeInfo);
    };
    return {
      onFlagClicked,
    };
  },
});
</script>
