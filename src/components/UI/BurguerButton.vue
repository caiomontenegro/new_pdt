<template>
  <button class="burguer flex-col justify-center items-center h-9 w-11 border-solid border rounded absolute top-5 right-3.5 cursor-pointer" @click="activeBurguer">
    <div class="lines mt-2 relative">
      <span class="burguer__line" :class="{lineA: burguer}"></span>
      <span class="burguer__line top-2" :class="{lineB: burguer}"></span>
      <span class="burguer__line top-4" :class="{lineC: burguer}"></span>
    </div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      burguer: false
    }
  },
  methods: {
    activeBurguer() {
      this.burguer = !this.burguer
    }
  }
}
</script>

<style lang="scss">

.burguer {
  @apply border-gray-700;

  &__line {
    @apply block h-0.5 w-5 rounded-3xl absolute -right-2.5 duration-200 ease-in-out bg-gray-400;
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