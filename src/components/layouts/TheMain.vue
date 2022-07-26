<template>
  <section-container class="bg-slate-800">
    <div class="flex flex-col items-center space-y-4 py-4">
      <h1 class="w-96 text-center font-montserrat text-4xl text-gray-100">
        Onde
        <span class="font-bold text-emerald-500">traders consistentes</span> se
        encontram
      </h1>
      <p class="px-8 text-center font-lato text-xl text-gray-100">
        Estudamos mais de 300 mil traders para criar um
        <strong>sistema educacional completo</strong>, que te ensina a melhorar
        seus resultados e a operar na Bolsa com mais segurança.
      </p>
    </div>
    <rounded-button>Começar meus Cursos Gratuitos</rounded-button>
  </section-container>
  <section-container>
    <div>
      <img src="@/assets/home/Sasaki.png" alt="Sasaki" />
    </div>
    <description-container>
      <template v-slot:title>APRENDA AS <ins>MELHORES</ins> TÉCNICAS</template>
      <template v-slot:description
        >Seja para operar Day Trade, Swing Trade ou investir a longo prazo,
        nosso time de traders ensina as principais técnicas utilizadas no
        mercado como Price Action, Análise Técnica e Tape Reading em cursos
        gratuitos completos.
      </template>
      <template v-slot:boldDescription
        >Se você está começando agora, ou já é um trader experiente, será mais
        que bem-vindo para aprender o que quiser sobre trading e Bolsa de
        Valores.
      </template>
    </description-container>
  </section-container>
</template>

<script>
import SectionContainer from "@/components/layouts/SectionContainer.vue";
import DescriptionContainer from "@/components/UI/DescriptionContainer.vue";

export default {
  components: {
    SectionContainer,
    DescriptionContainer,
  },
};
</script>
