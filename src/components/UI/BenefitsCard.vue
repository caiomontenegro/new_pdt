<template>
  <div class="flex font-lato">
    <div>
      <slot>Icone do Benefício</slot>
    </div>
    <div class="flex flex-col">
      <h3 class="font-bold">
        <slot>Título do Benefício</slot>
      </h3>
      <p>
        <slot>Descrição do Benefício</slot>
      </p>
    </div>
  </div>
</template>