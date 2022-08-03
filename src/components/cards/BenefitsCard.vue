<template>
  <div class="flex w-11/12 items-center rounded-lg bg-gray-100 p-4 font-lato">
    <div :class="icon"></div>
    <div class="flex flex-col">
      <h3 class="font-bold">
        {{ title }}
      </h3>
      <p>
        {{ benefit }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      require: true,
      default: "Ícone",
    },
    title: {
      type: String,
      require: true,
      default: "Title",
    },
    benefit: {
      type: String,
      require: true,
      default: "benefit",
    },
  },
};
</script>
