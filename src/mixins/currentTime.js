import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const currentTimeMixin = {
  data() {
    return {
      currentTime: dayjs().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    };
  },
  mounted() {
    const setTimer = () =>
      setTimeout(() => {
        this.currentTime = dayjs().format("dddd, MMMM Do YYYY, h:mm:ss a");
        setTimer();
      }, 1000);
    setTimer();
  },
};

export default currentTimeMixin;
