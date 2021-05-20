<template>
  <div class="recipe-form">
    <p>
      Introduce below the quantity for each ingredient you have and we will
      calculate how many Pasta Carbonara meals you can cook!
    </p>
    <form class="recipe-form__form" onsubmit.prevent="calculate">
      <label for="recipe-eggs">Eggs</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="eggs"
        id="recipe-eggs"
        value="0"
        v-model.number="eggs"
      />
      <label for="recipe-pasta">Pasta</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="pasta"
        id="recipe-pasta"
        value="0"
        v-model.number="pasta"
      />
      <label for="recipe-butter">Butter</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="butter"
        id="recipe-butter"
        value="0"
        v-model.number="butter"
      />
      <label for="recipe-milk">Milk</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="milk"
        id="recipe-milk"
        value="0"
        v-model.number="milk"
      />
      <label for="recipe-oil">Oil</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="oil"
        id="recipe-oil"
        value="0"
        v-model.number="oil"
      />
      <label for="recipe-bacon">Bacon</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="bacon"
        id="recipe-bacon"
        value="0"
        v-model.number="bacon"
      />
      <button type="submit" @click="calculate">Calculate</button>
    </form>
  </div>
</template>
<style lang="scss">
@import "./RecipeForm.scss";
</style>
<script>
export default {
  name: "RecipeForm",
  data() {
    return {
      meals: 0,
      pasta: 0,
      bacon: 0,
      eggs: 0,
      milk: 0,
      butter: 0,
      oil: 0,
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    calculate(event) {
      event.preventDefault();
      const { pasta, bacon, eggs, milk, butter, oil } = this;
      const userIngredients = { pasta, bacon, eggs, milk, butter, oil };
      let meals = 99999999;

      for (const ingredient in userIngredients) {
        meals = Math.min(
          meals,
          Math.floor(userIngredients[ingredient] / this.ingredients[ingredient])
        );
        // alert(`${ingredient}, ${this.meals}`);
      }

      this.meals = meals;

      if (this.meals == 0) {
        alert("Not enough ingredients");
        return;
      }

      const result = {};
      for (const ingredient in this.ingredients) {
        result[ingredient] = this.ingredients[ingredient] * meals;
      }

      this.$router.push({
        name: "Results",
        query: { meals: this.meals, igd: btoa(JSON.stringify(result)) },
      });
    },
  },
};
</script>
