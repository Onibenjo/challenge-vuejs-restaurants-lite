<template>
  <div class="page page__carbonara">
    <h1>Pasta carbonara meals</h1>
    <div class="page__carbonara-meals">
      <RecipeForm :ingredients="secretIngredients" />
    </div>
  </div>
</template>
<script>
import RecipeForm from "@/components/RecipeForm/RecipeForm";
const secretIngredients = require("@/assets/secretIngredients/secretIngredients.json");

export default {
  name: "Meals",
  components: {
    RecipeForm,
  },
  data() {
    return {
      secretIngredients: secretIngredients,
      // secretIngredients: {
      //   pasta: 500,
      //   bacon: 200,
      //   eggs: 1,
      //   milk: 200,
      //   butter: 500,
      //   oil: 100
      // }
    };
  },
};
</script>
