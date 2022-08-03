<template>
  <div class="flex flex-col items-center space-y-2 text-gray-300">
    <button class="flex" @click="switchButton">
      <h3 class="font-montserrat text-base uppercase">
        <slot name="title">Title</slot>
      </h3>
      <div class="ml-1">
        <p v-if="dropButton === true">
          <font-awesome-icon class="" icon="fa-solid fa-caret-up" />
        </p>
        <p v-else>
          <font-awesome-icon class="" icon="fa-solid fa-caret-down" />
        </p>
      </div>
    </button>
    <nav
      class="flex max-h-0 flex-col items-center overflow-hidden duration-300 font-lato text-base text-emerald-400"
      :class="{ linksShowed: dropButton }"
    >
      <slot name="link">Link</slot>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropButton: false,
    };
  },
  methods: {
    switchButton() {
      this.dropButton = !this.dropButton;
    },
  },
};
</script>

<style lang="scss" scoped>
.linksShowed {
  max-height: 100rem;
}
</style>
