<template>
  <div class="page page__results">
    <div class="">
      <Banner text="Hi" />
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner/Banner";

export default {
  name: "Results",
  components: {
    Banner,
  },
  data() {
    return {
      secretIngredients: {
        pasta: 500,
        bacon: 200,
        eggs: 1,
        milk: 200,
        butter: 500,
        oil: 100,
      },
    };
  },
};
</script>
