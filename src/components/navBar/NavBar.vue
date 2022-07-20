<template>
  <nav class="nav">
      <div class="nav-links space-y-2.5">
        <div class="nav-links__main">
          <ul class="flex flex-col items-center space-y-2.5">
            <li class='link'><a href="https://portaldotrader.com.br/aprenda" target="_self">Aprenda</a></li>
            <li class='link'><a href="https://portaldotrader.com.br/aovivo" target="_self">Ao vivo</a></li>
            <li class='link'><a href="https://portaldotrader.com.br/blog/" target="_self">Blog</a></li>
          </ul>
        </div>
        <div class="nav-links__special">
          <ul class="flex flex-col items-center space-y-2.5">
            <li class="special__link"><a href="#" target="_self">Cadastre-se</a></li>
          </ul>
        </div>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.nav-links {
  @apply text-sm uppercase text-gray-400 font-montserrat;

&__special {
  @apply font-semibold
}

.link {
  @apply hover:text-gray-200 duration-200;
}

.special__link {
  @apply hover:text-gray-200 duration-200;
}
}

</style>