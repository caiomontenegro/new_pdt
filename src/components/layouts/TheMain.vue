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
      <img
        src="https://res.cloudinary.com/portal-do-trader/image/upload/q_auto/f_auto/pdt-home/sala-ao-vivo-sasaki"
        alt="Sasaki"
      />
    </div>
    <div class="flex flex-col items-center space-y-8">
      <h2 class="font-montserrat text-2xl uppercase">
        Aprenda as <ins>melhores</ins> técnicas
      </h2>
      <div class="space-y-4">
        <p class="font-lato text-lg">
          Seja para operar Day Trade, Swing Trade ou investir a longo prazo,
          nosso time de traders ensina as principais técnicas utilizadas no
          mercado como Price Action, Análise Técnica e Tape Reading em cursos
          gratuitos completos.
        </p>
        <p class="font-lato text-lg font-bold">
          Se você está começando agora, ou já é um trader experiente, será mais
          que bem-vindo para aprender o que quiser sobre trading e Bolsa de
          Valores.
        </p>
      </div>
    </div>
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
    <rounded-button color="bg-slate-700" hoverColor="hover:bg-slate-900"
      >aprenda as melhores técnicas</rounded-button
    >
  </section-container>
  <section-container class="bg-gray-200">
    <img
      src="https://res.cloudinary.com/portal-do-trader/image/upload/q_auto/f_auto/pdt-home/aprenda-screens"
      alt="Acessibilidade Portal do Trader"
    />
    <div class="flex flex-col items-center space-y-8">
      <h2 class="font-montserrat text-2xl uppercase">
        Sem plano, <ins>sem chance.</ins>
      </h2>
      <div class="space-y-4">
        <p class="font-lato text-lg">
          Não existe uma fórmula mágica para começar a operar com segurança nem
          para conseguir resultados positivos consistentes, o único caminho é
          através do conhecimento.
        </p>
        <p class="font-lato text-lg font-bold">
          Nossos traders profissionais estruturaram toda a jornada de
          aprendizado em um plano, com todas as etapas que você precisa passar
          para conquistar seus objetivos no mercado.
        </p>
      </div>
    </div>
    <testimony-card>
      <template v-slot:testimony>
        "Muito obrigado por ceder estes materiais tão valiosos de forma
        gratuita. Sempre que preciso renovar as energias e/ou tirar dúvidas
        recorro ao CHAT PORTAL DO TRADER e SEMPRE, SEM EXCEÇÃO sou muito bem
        tratado, minhas dúvidas são esclarecidas e tudo corre muito bem. Muito
        obrigado mesmo PORTAL!"
      </template>
      <template v-slot:studantImage>
        <img
          class="w-24 rounded-full"
          src="https://res.cloudinary.com/portal-do-trader/image/upload/q_auto,f_auto/pdt-home/testimonial-pic-01"
          alt="Foto do Aluno."
        />
      </template>
      <template v-slot:studantName>Eduardo G.</template>
    </testimony-card>
    <rounded-button color="bg-red-500" hoverColor="hover:bg-red-600">
      Começar Plano Educacional
    </rounded-button>
  </section-container>
  <section-container class="bg-slate-800">
    <h2 class="text-center font-lato text-3xl uppercase text-gray-100 font-thin">
      Por que <span class="font-bold text-emerald-500">milhares de traders</span> frequentam o Portal diariamente?
    </h2>
  </section-container>
</template>

<script>
import SectionContainer from "@/components/layouts/SectionContainer.vue";
import TestimonyCard from "@/components/UI/TestimonyCard.vue";
import RoundedButton from "@/components/UI/RoundedButton.vue";

export default {
  components: {
    SectionContainer,
    TestimonyCard,
    RoundedButton,
  },
};
</script>
