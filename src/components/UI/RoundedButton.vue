<template>
  <div class="flex w-full justify-center">
    <!-- Set the background color by the props -->
    <button
      class="w-10/12 rounded-full p-4 font-montserrat text-lg font-bold uppercase text-gray-100"
      :class="color"
    >
      <slot> </slot>
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
  },
};
</script>
