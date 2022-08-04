<template>
  <div class="flex flex-col items-center mt-4">
    <div class="w-24 h-28 bg-no-repeat bg-[length:75px] bg-center" :style="classVar">
    </div>
    <div class="space-y-1.5">
      <div class="text-center font-lato text-xl font-bold text-emerald-500">
        {{ attribute }}
      </div>
      <div class="text-center text-xl text-gray-200">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      require: true,
      default: 'Ícone do Atribute'
    },
    attribute: {
      type: String,
      require: true,
      default: 'Atributo'
    },
    description: {
      type: String, 
      require: true,
      defaulta: 'Descrição do atributo'
    }
  },
  computed: {
    classVar() {
      return {
        'background-image': `url('${this.icon}')`
      }
    }
  }
}
</script>
