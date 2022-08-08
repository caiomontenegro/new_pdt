<template>
  <div class="flex w-10/12 justify-center">
    <!-- Set the background color by the props -->
    <a
      class="text-md flex w-full items-center justify-center rounded p-[4%] text-center font-lato font-bold text-gray-100 duration-200"
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
