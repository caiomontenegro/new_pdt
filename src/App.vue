<template>
  <the-header></the-header>
  <the-main></the-main>
  <the-footer class="bg-slate-900"></the-footer>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheMain from "@/components/layouts/TheMain.vue";
import TheFooter from "@/components/layouts/TheFooter.vue"

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter
  },
};
</script>

<style lang="scss" scoped></style>
