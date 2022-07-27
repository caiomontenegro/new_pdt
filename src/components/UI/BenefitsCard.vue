<template>
  <div class="flex font-lato rounded-lg bg-gray-100 w-11/12 p-4 items-center">
    <div class="p-4">
      <slot name="icon">Icone do Benefício</slot>
    </div>
    <div class="flex flex-col">
      <h3 class="font-bold">
        <slot name="title">Título do Benefício</slot>
      </h3>
      <p>
        <slot name="benefit">Descrição do Benefício</slot>
      </p>
    </div>
  </div>
</template>