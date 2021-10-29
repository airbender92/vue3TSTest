<!--
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 11:32:28
 * @FilePath: \my-vue3-project\src\App.vue
 * @Description: file content
-->
<template>
  <div id="app">
    <div class="long-date">{{ i18n.d(new Date(), "long") }}</div>
    <h2>{{ i18n.t("welcome") }}</h2>
    <LocaleSelector
      :availableLocales="availableLocales"
      @clicked="onLocaleClicked"
    />
    <ThemeSelector />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { MutationType } from "@/models/store";
import { useLocalesStore } from "@/store/locales";
import { LocalInfoInterface } from "@/models/localization/LocaleInfo.interface";
import LocaleSelector from "@/components/locale-selector/LocaleSelector.component.vue";
import ThemeSelector from "@/components/theme-selector/ThemeSelector.component.vue";

export default defineComponent({
  name: "App",
  components: {
    LocaleSelector,
    ThemeSelector,
  },
  setup() {
    const i18n = useI18n();
    const localesStore = useLocalesStore();
    const availableLocales = computed(() => {
      return localesStore.state.availableLocales;
    });
    const onLocaleClicked = (localeInfo: LocalInfoInterface) => {
      console.log("localInfo: ", localeInfo);
      localesStore.action(MutationType.locales.selectLocale, localeInfo.locale);
    };
    return {
      i18n,
      availableLocales,
      onLocaleClicked,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h2 {
    margin: 0;
  }
  .long-date {
    font-size: 12px;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
