<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <StoreList :stores="stores" />
    </div>
  </div>
</template>

<script>
import currentTimeMixin from "@/mixins/currentTime";
import StoreList from "@/components/StoreList/StoreList";
const stores = require("@/assets/stores/stores.json");

export default {
  name: "Stores",
  mixins: [currentTimeMixin],
  components: {
    StoreList,
  },
  data() {
    return {
      stores,
    };
  },
  computed: {
    welcomeMessage() {
      return (
        "Welcome to our restaurants list! Your local time is: " +
        this.currentTime
      );
    },
  },
};
</script>
