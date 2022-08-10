<template>
  <explore-nav>
    <template v-slot:title>Portal do Trader
    </template>
    <template v-slot:link>
      <a class="font-bold" href="">Home do Portal do Trader</a>
      <a href="">Aprenda</a>
      <a href="">Ao Vivo</a>
      <a href="">Blog</a>
      <a href="">Plano TNT</a>
    </template>
  </explore-nav>
  <explore-nav>
    <template v-slot:title>Aprenda: Cursos Gratuitos
    </template>
    <template v-slot:link>
      <a class="font-bold" href="">Home da Área Aprenda</a>
      <a href=""><a href="">Day Trade</a></a>
      <a href="">Price Action</a>
      <a href="">Análise Técnica</a>
      <a href="">Investindo em Ações</a>
      <a href="">O que os Traders Operam na Bolsa</a>
      <a href="">Comece a Operar Minicontratos</a>
      <a href="">MetaTrader</a>
      <a href="">Desafio Trader: Práticas para a Consistência</a>
      <a href="">Introdução às Opções</a>
      <a href="">Como Traders Profissionais Operam?</a>
      <a href="">Plano de Trade</a>
      <a href="">Psicologia para Traders</a>
      <a href="">Tape Reading</a>
      <a href="">Payrolll Bootstrap</a>
      <a href="">Scalp Trade Bootstrap</a>
      <a href="">Swing Trade Bootstrap</a>
      <a href="">Day Trade Bootstrap</a>
      <a href="">Erros e Dúvidas de Traders</a>
    </template>
  </explore-nav>
    <explore-nav>
    <template v-slot:title>Plano TNT</template>
    <template v-slot:link>
      <a class="font-bold" href=""><a href="">Home do Plano TNT</a></a>
      <a href="">Começando do zero</a>
      <a href="">Trader Profissional</a>
      <a href="">Estrutura do Mercado</a>
      <a href="">Análise Técnica</a>
      <a href="">Análise Técnica na prática</a>
      <a href="">Análise Fundamentalista</a>
      <a href="">Tape Reading</a>
      <a href="">Tape Reading na prática</a>
      <a href="">Opções e Operações Estruturadas</a>
      <a href="">Gestão de Risco</a>
      <a href="">Trading Plan</a>
      <a href="">Psicologia do Trading</a>
      <a href="">Forex</a>
    </template>
  </explore-nav>
  <explore-nav>
    <template v-slot:title>Blog</template>
    <template v-slot:link>
      <a class="font-bold" href="">Home do Blog</a>
      <a href="">Ações</a>
      <a href="">Análise Fundamentalista</a>
      <a href="">Análise Técnica</a>
      <a href="">Contratos Futuros</a>
      <a href="">Criptomoedas</a>
      <a href="">Day Trade</a>
      <a href="">Forex</a>
      <a href="">Gestão de Risco</a>
      <a href="">Opções</a>
      <a href="">Price Action</a>
      <a href="">Psicologia do Trading</a>
      <a href="">Swing Trade</a>
      <a href="">Tape Reading</a>
      <a href="">Trader Iniciante</a>
      <a href="">Trader Profissional</a>
      <a href="">Trading Plan</a>
    </template>
  </explore-nav>
</template>

<script>
import ExploreNav from '@/components/layouts/ExploreNav.vue'

export default {
  components: {
    ExploreNav
  }
}
</script>