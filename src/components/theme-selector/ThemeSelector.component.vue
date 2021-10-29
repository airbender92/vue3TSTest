<!--
 * @Author: wangyunbo
 * @Date: 2021-10-29 11:18:41
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 11:33:32
 * @FilePath: \my-vue3-project\src\components\theme-selector\ThemeSelector.component.vue
 * @Description: file content
-->
<template>
  <div class="theme-selector">
    <div class="theme-radio-group">
      <label
        role="radio"
        v-for="(theme, index) in themes"
        :key="index"
        :class="`theme-radio ${theme.name} ${theme.selected ? 'selected' : ''}`"
      >
        <i class="material-icons">color_lens</i>
        <input
          type="radio"
          name="locale"
          :value="theme.selected"
          v-model="theme.selected"
          @click="onThemeClicked(theme)"
          class="icon-button"
        />
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from "vue";
interface ThemeInfoInterface {
  selected: boolean;
  name: string;
  bodyCss: "default";
}
const themes: ThemeInfoInterface[] = reactive([
  {
    selected: false,
    name: "light",
    bodyCss: "default",
  },
  {
    selected: false,
    name: "dark",
    bodyCss: "dark-theme",
  },
  {
    selected: false,
    name: "navy",
    bodyCss: "navy-theme",
  },
]);
export default defineComponent({
  components: {},
  setup(prop, { emit }) {
    const onThemeClicked = (themeClicked: ThemeInfoInterface) => {
      document.body.className = "";
      document.body.classList.add(themeClicked.bodyCss);
      themes.forEach((theme) => {
        theme.selected = theme.name === themeClicked.name;
      });
    };

    onMounted(() => {
      const defaultTheme = themes.find((theme) => theme.name === "dark");
      if (defaultTheme) {
        onThemeClicked(defaultTheme);
      }
    });
    return {
      themes,
      onThemeClicked,
    };
  },
});
</script>
