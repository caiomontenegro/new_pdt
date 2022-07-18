<template>
  <header>
    <div class="flex">
      <img class="w-56" src="@/assets/home/logo_full.png" alt="Portal Logo">
      <burguer-button></burguer-button>
    </div>
      <nav class="nav">
        <ul>
          <div class="nav-links">
            <div class="nav-links_main">
              <li><a class='link' href="">Aprenda</a></li>
              <li><a class='link' href="">Ao vivo</a></li>
              <li><a class='link' href="">Blog</a></li>
            </div>
            <div class="nav-links_other">
              <li><a class="signup-link" href="">Cadastre-se</a></li>
            </div>
          </div>
        </ul>
      </nav>
  </header>
</template>

<script>
import BurguerButton from '@/components/home/UI/BurguerButton.vue'

export default {
  components: { 
    BurguerButton 
  },
}
</script>

<style lang="scss" scoped>
  header {
    background-color: $color-darkBlue;
  }
</style>