<template>
  <header class="bg-darkBlue">
    <div class="flex pt-4">
      <img class="w-72" src="@/assets/home/logo_full.png" alt="Portal Logo">
      <burguer-button></burguer-button>
    </div>
    <div>
      <nav-bar></nav-bar>
    </div>
  </header>
</template>

<script>
import BurguerButton from '@/components/UI/BurguerButton.vue'
import NavBar from '@/components/navBar/NavBar.vue'

export default {
  components: { 
    NavBar,
    BurguerButton, 
  },
}
</script>

<style lang="scss" scoped>
</style>