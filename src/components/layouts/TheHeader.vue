<template>
  <header class="py-3 bg-slate-800">
    <div class="flex pt-2">
      <img class="w-72" src="@/assets/home/logo_full.png" alt="Portal Logo">
      <burguer-button @show-nav="showLinks()"></burguer-button>
    </div>
    <div>
      <nav-bar :class="{hidden: showContent}"></nav-bar>
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
</style>