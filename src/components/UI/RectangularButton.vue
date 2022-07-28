<template>
  <div class="flex w-full justify-center">
    <!-- Set the background color by the props -->
    <a
      class="w-10/12 rounded p-4 text-center font-lato text-lg text-gray-100 duration-200"
      :class="[color, hoverColor]"
    >
      <slot>Texto do link</slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      require: false,
      default: "bg-blue-500",
    },
    hoverColor: {
      type: String,
      require: false,
      default: "hover:bg-blue-600",
    },
  },
};
</script>
