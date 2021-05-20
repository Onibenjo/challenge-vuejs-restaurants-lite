<template>
  <div class="page page__home">
    <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
import currentTimeMixin from "@/mixins/currentTime";

export default {
  name: "Home",
  mixins: [currentTimeMixin],
  computed: {
    welcomeMessage() {
      return "Welcome! Your local time is: " + this.currentTime;
    },
  },
};
</script>
