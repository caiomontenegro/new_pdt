<template>
  <nav class="nav">
      <div class="nav-links">
        <div class="nav-links__main">
          <ul class="flex flex-col items-center">
            <li class='link'><a href="">Aprenda</a></li>
            <li class='link'><a href="">Ao vivo</a></li>
            <li class='link'><a href="">Blog</a></li>
          </ul>
        </div>
        <div class="nav-links__special">
          <ul class="flex flex-col items-center">
            <li class="special__link"><a href="">Cadastre-se</a></li>
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
  @apply hover:text-gray-200 duration-200 mt-2.5;
}

.special__link {
  @apply hover:text-gray-200 duration-200 mt-2.5;
}
}

</style>