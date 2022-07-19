<template>
  <header class="bg-darkBlue">
    <div class="flex pt-4">
      <img class="w-72" src="@/assets/home/logo_full.png" alt="Portal Logo">
      <burguer-button @show-nav="showLinks()"></burguer-button>
    </div>
    <div>
      <nav-bar :class="{invisible: showContent}"></nav-bar>
    </div>
  </header>
</template>

<script>
import BurguerButton from '@/components/UI/BurguerButton.vue'
import NavBar from '@/components/navBar/NavBar.vue'

export default {
  data() {
    return {
      showContent: true
    }
  },
  components: { 
    NavBar,
    BurguerButton, 
  },
  methods: {
    showLinks() {
      this.showContent = !this.showContent
    }
  }
}
</script>

<style lang="scss" scoped>
.invisible {
  @apply hidden;
}
</style>