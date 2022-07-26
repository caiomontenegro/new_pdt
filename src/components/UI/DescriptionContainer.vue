<template>
  <div class="flex flex-col items-center space-y-8">
    <h2 class="font-montserrat text-2xl uppercase">
      <slot name="title">Type <ins>your</ins> Title</slot>
    </h2>
    <div class="space-y-4">
      <p class="font-lato text-lg">
        <slot name="description">
          Simple Description
        </slot>
      </p>
      <p class="font-lato text-lg font-bold">
        <slot name="boldDescription">
          Bold Description
        </slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>