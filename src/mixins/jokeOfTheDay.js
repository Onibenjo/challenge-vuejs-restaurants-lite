const jokeOfTheDayMixin = {
  data() {
    return {
      joke: {},
    };
  },
  async mounted() {
    try {
      const calls_per_hour = 5;
      const API_URL = "https://api.jokes.one/jod?category=knock-knock";

      if (localStorage.getItem("joke")) {
        const jokeObject = JSON.parse(localStorage.getItem("jod"));
        const dateString = jokeObject.timestamp;
        const now = new Date().getTime();
        if (now < dateString) {
          this.joke = jokeObject.joke;
          return;
        }
      }

      const res = await (await fetch(API_URL)).json();

      this.joke = res.contents.jokes[0]?.joke;
      window.localStorage.setItem(
        "jod",
        JSON.stringify({
          joke: this.joke,
          timestamp: new Date(
            new Date().getTime() + (60 / calls_per_hour) * 60000
          ).getTime(),
        })
      );
    } catch (e) {
      this.joke = JSON.parse(window.localStorage.getItem("jod")).joke;
      console.log(e);
    }
  },
};

export default jokeOfTheDayMixin;
