const jokeOfTheDayMixin = {
  data() {
    return {
      joke: {},
    };
  },
  async mounted() {
    try {
      //
      const res = await (
        await fetch("https://api.jokes.one/jod?category=knock-knock")
      ).json();
      this.joke = res.contents.jokes[0]?.joke;
      console.log(this.joke);
      window.localStorage.setItem("jod", JSON.stringify(this.joke));
    } catch (e) {
      //
      this.joke = JSON.parse(window.localStorage.getItem("jod"));
      console.log(e);
    }
  },
};

export default jokeOfTheDayMixin;
