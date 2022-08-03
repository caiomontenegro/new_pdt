<template>
  <div class="w-full">
    <ul>
      <li v-for="quality in qualities" :key="quality.id">
        <quality-card :icon="quality.icon" :title="quality.title" :quality="quality.quality">
        </quality-card>
      </li>
    </ul>
  </div>
</template>

<script>
import QualityCard from "@/components/cards/QualityCard.vue"

export default {
  components: {
    QualityCard
  },
  data () {
    return {
      qualities: [
        {
          id: 0,
          icon: "https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_rec.png",
          title: "Especialistas e Traders profissionais",
          quality: "reconhecidos no mercado e com mais de 10 anos de experiência. Esse é o time que elabora nosso conteúdo."
        },
        {
          id: 1,
          icon: "",
          title: "Plataforma de E-learning EAD completa",
          quality: "com centenas de vídeos gratuitos, artigos, perguntas de fixação e discussão."
        },
        {
          id: 2,
          icon: "",
          title: "Comunidade de traders e investidores",
          quality: "que enfrenta os mesmos desafios que você e está sempre disponível para ajudar todos os dias."
        },
        {
          id: 3,
          icon: "",
          title: "Análise ténica, price arrowFunctionExpression, tapereading, fundamentalista e mais",
          quality: "Acreditamos na diversidade de técnicas para cada aluno encontrar o seu caminho."
        },
        {
          id: 4,
          icon: "",
          title: "Day traceDeprecation, swing trade, position e alocação de carteiras",
          quality: "Aprenda técnicas para operar cada modalidade de acordo com seus objetivos."
        },
        {
          id: 5,
          icon: "",
          title: "Dólar, índice, ações, opções, forex e até bitcoin",
          quality: "Nosso conteúdo educacional engloba todos os principais ativos do mercado."
        },
      ]
    }
  }
}
</script>