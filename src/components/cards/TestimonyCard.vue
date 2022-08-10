<template>
  <div
    class="flex w-11/12 flex-col items-center space-y-4 rounded-xl border-4 border-emerald-500 bg-slate-700 p-4 text-gray-100 md:flex-row md:px-6 lg:w-6/12 shadow-xl"
  >
    <p class="font-lato italic md:order-1 lg:text-xl">
      <slot name="testimony">Testimony</slot>
    </p>
    <div class="flex flex-col items-center md:mr-6">
      <div
        class="w-24 overflow-hidden rounded-full border border-4 border-emerald-500"
      >
        <slot name="studantImage">Studant Photo</slot>
      </div>
      <span class="text-center font-lato font-bold lg:text-xl">
        <slot name="studantName">Studant Name</slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>
