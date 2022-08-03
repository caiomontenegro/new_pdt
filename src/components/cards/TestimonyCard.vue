<template>
  <div class="flex w-11/12 flex-col items-center p-4 rounded-lg space-y-4">
    <p class="font-lato italic">
      <slot name="testimony">Testimony</slot>
    </p>
    <div class="flex flex-col items-center">
      <slot name="studantImage">Studant Photo</slot>
      <span class="font-lato font-bold">
        <slot name="studantName">Studant Name</slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    
  }
}
</script>
