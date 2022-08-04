<template>
  <div class="w-full relative flex items-center">
    <div class="absolute w-24 h-28 bg-no-repeat bg-[length:55px] bg-center" :style="cssVar">
    </div>
    <div class="font-lg w-full flex flex-col p-4 font-lato text-lg ml-20 text-gray-100">
      <h3 class="font-bold uppercase">{{ title }}</h3>
      <p>{{ quality }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String, 
      require: true,
      default: 'The Icon'
    },
    title: {
      type: String,
      require: true,
      default: 'Title',
    },
    quality: {
      type: String, 
      require: true,
      default: 'Quality'
    }
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
