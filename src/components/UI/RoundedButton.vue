<template>
  <div class="flex w-full justify-center">
    <!-- Set the background color by the props -->
    <button
      class="w-10/12 rounded-full p-4 font-montserrat text-lg font-bold uppercase text-gray-100 duration-200"
      :class="[color, hoverColor]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: "bg-blue-500",
    },
    hoverColor: {
      type: String,
      required: false,
      default: "hover:bg-blue-600",
    },
  },
};
</script>
