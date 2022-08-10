<template>
  <button
    class="burguer absolute top-5 md:right-8 right-4 h-9 w-11 cursor-pointer flex-col items-center justify-center rounded border border-solid xl:hidden"
    @click="activeBurguer"
  >
    <div class="lines relative mt-2">
      <span class="burguer__line" :class="{ lineA: burguer }"></span>
      <span class="burguer__line top-2" :class="{ lineB: burguer }"></span>
      <span class="burguer__line top-4" :class="{ lineC: burguer }"></span>
    </div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      burguer: false,
    };
  },
  methods: {
    activeBurguer() {
      this.burguer = !this.burguer;
      this.$emit("show-nav");
    },
  },
};
</script>

<style lang="scss">
.burguer {
  @apply border-2 border-emerald-500;

  &__line {
    @apply absolute -right-2.5 block h-0.5 w-5 rounded-3xl bg-gray-100 duration-200 ease-in-out;
  }

  // Animations
  .lineA {
    transform: rotate(-45deg);
    top: 8px;
  }

  .lineB {
    opacity: 0;
  }

  .lineC {
    transform: rotate(45deg);
    top: 8px;
  }
}
</style>
