<template>
  <div class="flex w-full justify-center ">
    <!-- Set the background color by the props -->
    <a
      class="w-11/12 md:w-full text-base rounded-full p-4 text-center font-montserrat md:text-lg font-bold uppercase text-gray-100 duration-200"
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
