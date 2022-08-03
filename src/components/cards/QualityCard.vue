<template>
  <div class="flex w-11/12 items-center">
    <div class="w-32">
      <slot name="icon"></slot>
    </div>
    <div class="font-lg flex flex-col font-lato text-lg text-gray-100 p-4">
      <h3 class="font-bold uppercase"><slot name="title">Título</slot></h3>
      <p><slot name="quality">Qualidade</slot></p>
    </div>
  </div>
</template>

<script></script>