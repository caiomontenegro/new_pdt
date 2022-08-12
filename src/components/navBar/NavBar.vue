<template>
  <nav class="nav">
    <div class="nav-links space-y-4 py-6 w-full xl:flex xl:space-y-0  xl:justify-between">
      <div class="nav-links__main">
        <ul class="flex flex-col xl:flex-row items-center space-y-4 xl:space-y-0 xl:space-x-4">
          <li class="link">
            <a href="https://portaldotrader.com.br/aprenda" target="_self"
              >Aprenda</a
            >
          </li>
          <li class="link">
            <a href="https://portaldotrader.com.br/aovivo" target="_self"
              >Ao vivo</a
            >
          </li>
          <li class="link">
            <a href="https://portaldotrader.com.br/blog/" target="_self"
              >Blog</a
            >
          </li>
        </ul>
      </div>
      <div class="nav-links__special">
        <ul class="flex flex-col items-center mt-8 xl:mt-0 xl:space-y-0 space-y-4">
          <li class="special__link">
            <a href="#" target="_self">Cadastre-se</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav-links {
  @apply font-montserrat text-lg uppercase text-gray-200;

  &__special {
    @apply font-semibold;
  }

  .link {
    @apply duration-200;
  }

  .special__link {
    @apply duration-200;
  }
}
</style>
