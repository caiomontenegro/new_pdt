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
    <testimony-card>
      <template v-slot:testimony>
        "Os cursos do Portal e a sala Ao Vivo mudaram minha vida operacional. A
        calma e paciência da equipe foram fundamentais para eu atingir minha
        consistência. Já conhecia o mercado e tinha perdido muito! Com vocês
        isso mudou! Não os conheço pessoalmente mas sinto como se fossem grandes
        amigos... Obrigado por tudo!"
      </template>
      <template v-slot:studantImage
        ><img
          class="w-24 rounded-full"
          src="https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/testimonial-pic-02"
          alt="Foto do Aluno"
      /></template>
      <template v-slot:studantName>Lucas A.</template>
    </testimony-card>
    <rounded-button color="bg-slate-700" hoverColor="hover:bg-slate-900">aprenda as melhores técnicas</rounded-button>
  </section-container>
</template>

<script>
import SectionContainer from "@/components/layouts/SectionContainer.vue";
import DescriptionContainer from "@/components/UI/DescriptionContainer.vue";
import TestimonyCard from "@/components/UI/TestimonyCard.vue";
import RoundedButton from "@/components/UI/RoundedButton.vue"

export default {
  components: {
    SectionContainer,
    DescriptionContainer,
    TestimonyCard,
    RoundedButton
  },
};
</script>
