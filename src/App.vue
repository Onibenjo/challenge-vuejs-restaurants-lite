<template>
  <div id="app" :class="theme">
    <Header :switchTheme="switchTheme" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/styles/styles.scss";
</style>
<script>
import Header from "@/components/Header/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return { theme: "light" };
  },
  mounted() {
    this.theme = localStorage.getItem("theme") ?? "light";
  },
  methods: {
    switchTheme() {
      if (this.theme == "dark") this.theme = "light";
      else this.theme = "dark";
      localStorage.setItem("theme", this.theme);
    },
  },
};
</script>
