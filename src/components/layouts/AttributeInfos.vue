<template>
  <div class="flex flex-col items-center space-y-4">
    <div>
      <slot name="icon">Ícone do Atributo</slot>
    </div>
    <div>
      <div class="text-center font-lato text-xl font-bold text-emerald-500">
        <slot name="attribute">Atributo</slot>
      </div>
      <div class="text-center text-xl text-gray-200">
        <slot name="description">Descrição do atributo</slot>
      </div>
    </div>
  </div>
</template>
