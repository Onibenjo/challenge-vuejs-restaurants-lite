<template>
  <div class="store" v-if="isVisible">
    <div class="store__wrapper">
      <h2 class="store__title">{{ title }}</h2>
      <span class="store__location">{{ location }}</span>
      <div>
        Joke of the day:
        <p>
          <small>{{ joke }}</small>
        </p>
      </div>
      <img
        :src="photo"
        :alt="title"
        :title="title"
        class="store__image lazy"
        loading="lazy"
      />
    </div>
  </div>
</template>
<style lang="scss">
@import "./Store.scss";
</style>
<script>
export default {
  name: "Store",
  props: {
    title: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    photo: {
      type: String,
      default: null,
    },
    joke: {
      type: String,
      default: "",
    },
  },
  computed: {
    isVisible() {
      return !!this.title && !!this.location;
    },
  },
};
</script>
