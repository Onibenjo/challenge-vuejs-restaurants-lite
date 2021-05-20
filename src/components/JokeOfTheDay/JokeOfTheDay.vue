<template>
  <p>{{ joke }}</p>
</template>
<script>
export default {
  name: "JokeOfTheDay",
  data() {
    return {
      joke: "hoooooo",
    };
  },
  async mounted() {
    try {
      //
      const res = await (
        await fetch("https://api.jokes.one/jod?category=knock-knock")
      ).json();
      console.log(res);
    } catch(e) {
      //
      console.log(e)
    }
  },
};
</script>
