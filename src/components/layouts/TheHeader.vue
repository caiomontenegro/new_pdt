<template>
  <header class="bg-slate-800 py-3 xl:pl-56">
    <div class="flex pt-2">
      <img class="w-72 xl:w-96 pl-4 md:pl-8 xl:pl-10" src="@/assets/home/logo_full.png" alt="Portal Logo" />
      <burguer-button @show-nav="showLinks()"></burguer-button>
    </div>
    <div class="relative mx-auto w-11/12">
      <div class="absolute w-full xl:-right-96 xl:-top-[78px]">
        <nav-bar
          class="navbar h-0 xl:h-auto overflow-hidden mt-2 rounded-md border-t-2 border-emerald-500 duration-200 ease-in-out"
          :class="{ dropDown: !showContent }"
        ></nav-bar>
      </div>
    </div>
  </header>
</template>

<script>
import BurguerButton from "@/components/UI/BurguerButton.vue";
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
  // @apply bg-slate-800;
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
