<template>
  <div class="store-list">
    <p>
      Here you can find all of our restaurants. We have {{ storesCount }} stores
      right now!
    </p>
    <div>
      <input
        v-model="searchFilter"
        placeholder="Search store..."
        class="store-list__filter"
      />
    </div>
    <div class="store-list__items" ref="list-items">
      <Store
        class="store-list__item"
        :title="store.name"
        :photo="store.image"
        :location="store.location"
        :joke="joke"
        v-for="store in filteredStoresWithImages"
        :key="store.id"
      />
    </div>
  </div>
</template>
<style lang="scss">
@import "./StoreList.scss";
</style>
<script>
import Store from "@/components/Store/Store";
// import _ from "lodash";
import jokeOfTheDayMixin from "@/mixins/jokeOfTheDay";

export default {
  name: "StoreList",
  mixins: [jokeOfTheDayMixin],
  components: {
    Store,
  },
  props: {
    stores: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchFilter: "",
      nextItem: 0,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
    this.loadMore();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const visible = document.documentElement.clientHeight;
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollY + visible >= pageHeight) {
        this.loadMore();
      }
    },
    loadMore: function () {
      if (this.storesCount > this.nextItem) {
        this.nextItem = this.nextItem + 50;
      }
    },
  },
  computed: {
    storesWithImages() {
      return this.stores.map((store) => {
        store["image"] = "https://via.placeholder.com/300?text=" + store.name;

        return store;
      });
    },
    filteredStoresWithImages() {
      return this.storesWithImages
        .filter((store) => {
          return store.name
            .toLowerCase()
            .includes(this.searchFilter.toLowerCase());
        })
        .slice(0, this.nextItem);
    },
    storesCount() {
      // return _.size(this.stores);
      return this.stores.length;
    },
  },
};
</script>
