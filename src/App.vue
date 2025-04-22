<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import Card from './components/card.vue';
let theme = ref();
let themeName = ref("");
const themeList = ref([
  {
    name: 'Yuyuko',
    bgUrl: "src/assets/image/yuyuko.png",
    source: "https://x.com/matchach/status/1913671002078458053",
    customStyle: {
      backgroundSize: 'cover',
      // backgroundPositionY: '10%',
      cursor: 'url("src/assets/image/sakura.png"), auto',
    },
  },
  {
    name: 'Lain',
    bgUrl: "src/assets/image/lain.jpg",
    source: "https://www.pixiv.net/artworks/128988851",
    customStyle: {
      backgroundSize: 'cover',
      // backgroundPositionY: '10%',
      cursor: 'url("src/assets/image/star.png"), auto',
    },
  },
]);
interface Theme {
  name: string;
  bgUrl: string;
  source: string;
  customStyle: {
    backgroundSize: string;
    backgroundPositionY: string;
    cursor: string;
  };
}

function changeTheme(event: Event) {
  const target = event.target as HTMLSelectElement;
  const selectedTheme = themeList.value[target.selectedIndex] as Theme;
  theme.value = selectedTheme;
  localStorage.setItem('SIyuyukoSiteTheme', JSON.stringify(selectedTheme));
}
watch(theme, (val) => {
  themeName.value = val.name;
});
onBeforeMount(() => {
  const storedTheme = localStorage.getItem('SIyuyukoSiteTheme');
  theme.value = storedTheme ? JSON.parse(storedTheme) : themeList.value[0];
  if (theme.value === themeList.value[0]) {
    localStorage.setItem('SIyuyukoSiteTheme', JSON.stringify(themeList.value[0]));
  }
});
</script>

<template>
  <div class="home bg-no-repeat bg-center bg-cover"
    :style="[{ backgroundImage: `url(${theme.bgUrl})` }, theme.customStyle]">
    <div class="home-mask flex flex-col">
      <select class="theme-selector" @change="changeTheme" v-model="themeName">
        <option v-for="(item, index) in themeList" :key="index" :value="item.name">{{ item.name }}</option>
      </select>
      <Card></Card>
      <footer class="footer flex items-center">
        <div class="z-10 w-12">
          <a :href="theme.source" target="_blank">source</a>
        </div>
        <div class="footer-content m-auto relative right-6">
          <!-- <p>Powered by Vue 3 + Vite</p> -->
          <p>© 2025 SIyuyuko</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@layer components {
  .home {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: background-image 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out;
    font-family: 'IBM Plex Mono Italic', monospace;
    font-style: italic;
  }

  .home-mask {
    position: relative;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(0.8) blur(0.5px);
    padding: 20px;
  }

  .theme-selector {
    margin: 0 0 0 auto;
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    font-size: 10px;
    padding: 0 5px;
  }

}
</style>
