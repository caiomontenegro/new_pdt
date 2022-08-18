<template>
  <header class="bg-slate-800 py-3 xl:pl-56">
    <div class="xl:relative xl:right- flex pt-2">
      <img class="xl:absolute xl:right-3/4 w-72 pl-4 md:pl-8 xl:pl-10 xl:w-auto" src="@/assets/home/logo_full.png" alt="Portal Logo" />
      <burguer-button @show-nav="showLinks()"></burguer-button>
    </div>
    <div class="relative mx-auto w-11/12">
      <search-input></search-input>
      <div class="absolute w-full xl:w-6/12 xl:right-64 xl:-top-5">
        <nav-bar
          class="navbar h-0 xl:h-auto overflow-hidden xl:overflow-auto mt-2 rounded-md border-t-2 border-emerald-500 duration-200 ease-in-out"
          :class="{ dropDown: !showContent }"
        ></nav-bar>
      </div>
    </div>
  </header>
</template>

<script>
import BurguerButton from "@/components/UI/BurguerButton.vue";
import SearchInput from "@/components/UI/SearchInput.vue"
import NavBar from "@/components/navBar/NavBar.vue";

export default {
  data() {
    return {
      showContent: true,
    };
  },
  components: {
    NavBar,
    BurguerButton,
    SearchInput
  },
  methods: {
    showLinks() {
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  // @apply bg-gray-200;
}

.dropDown {
  height: 14rem;
  border-width: 2px;
}

@media (min-width: 1280px) {

.navbar {
  background-color: transparent;
  border-color: transparent;
}

}

</style>
