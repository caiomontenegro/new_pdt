<template>
  <div class="flex w-full justify-center">
    <!-- Set the background color by the props -->
    <button class="text-lg font-montserrat font-bold text-gray-100 rounded-full p-4 w-10/12 uppercase" :class="color">
      <slot>
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'bg-blue-500'
    }
  }
}
</script>