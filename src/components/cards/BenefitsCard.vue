<template>
  <div class="relative flex items-center rounded-lg bg-gray-100 p-4 font-lato">
    <div class="absolute w-24 h-28 bg-no-repeat bg-[length:75px] bg-center" :style="cssVar">
    </div>
    <div class="flex flex-col ml-28">
      <p>
        <span class="font-bold">
          {{ title }}
        </span>
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
  computed: {
    cssVar() {
      return {
        "background-image": `url(${this.icon})`
      }
    }
  }
};
</script>
