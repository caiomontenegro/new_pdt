<template>
  <div class="w-full flex items-center">
    <div :class="icon">
    </div>
    <div class="font-lg w-full flex flex-col p-4 font-lato text-lg text-gray-100">
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
  }
};
</script>
