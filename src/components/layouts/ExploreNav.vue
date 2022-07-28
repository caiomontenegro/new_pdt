<template>
  <div class="flex flex-col items-center text-gray-300 space-y-2">
    <h3 class="font-montserrat text-base uppercase">
      <slot  name="title">Title</slot>
    </h3>
    <nav class="flex flex-col items-center font-lato text-base">
      <slot  name="link">Link</slot>
    </nav>
  </div>
</template>
