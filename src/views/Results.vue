<template>
  <div class="page page__results">
    <pre>{{ joke.text }}</pre>
    <h1>Pasta carbonara recipe for {{ meals }} meals</h1>
    <div class="">
      <Banner
        text="Italia Eats"
        :backgroundMedia="{
          type: 'image',
          src: 'https://source.unsplash.com/random?restaurant',
        }"
      />
      <!-- <p v-for="igd in total_ingredients" :key="igd">{{ igd }}</p> -->
      <div class="results">
        <banner
          v-for="ingredient in total_ingredients"
          :textDistribution="'bottom'"
          :backgroundMedia="{
            type: 'image',
            src: 'https://via.placeholder.com/300?text=' + ingredient,
          }"
          :key="ingredient"
          :text="ingredient"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner/Banner";
import jokeOfTheDayMixin from "@/mixins/jokeOfTheDay";
const secretIngredients = require("@/assets/secretIngredients/secretIngredients.json");

export default {
  name: "Results",
  mixins: [jokeOfTheDayMixin],
  components: {
    Banner,
  },
  data() {
    return {
      meals: this.$route.query.meals,
    };
  },
  computed: {
    total_ingredients() {
      return Object.entries(secretIngredients).map(
        ([key, value]) => `${key} - ${value * this.meals}`
      );
    },
  },
};
</script>
<style>
.results {
  display: grid;
  margin-top: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
