<template>
  <div class="w-full">
    <ul class="space-y-6">
      <li v-for="benefit in benefits" :key="benefit.id">
        <benefits-card :icon="benefit.icon" :title="benefit.title" :benefit="benefit.benefit">
        </benefits-card>
      </li>
    </ul>
  </div>
</template>

<script>
import BenefitsCard from "@/components/cards/BenefitsCard.vue";

export default {
  components: {
    BenefitsCard,
  },
  data() {
    return {
      benefits: [
        {
          id: 0,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/icon_dev',
          title: 'Desenvolva as habilidades', 
          benefit: 'para vencer no mercado com especialistas reconhecidos e um plano educacional completo, etapa por etapa.'
        },
        {
          id: 2,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/icon_scr.png',
          title: 'Interaja ao vivo com traders e investidores profissionais', 
          benefit: 'em nossos chats, grupos, lives diárias, aulas ao vivo e redes sociais.'
        },
        {
          id: 3,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/icon_lrn',
          title: 'Fuja das armadilhas do mercado.', 
          benefit: 'Percorra um caminho confiável e fique livre das "roubadas" mais comuns do mercado financeiro.'
        },
        {
          id: 4,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/Icon_thumbs_up_dark',
          title: 'Proposta Justa. Nós nunca', 
          benefit: 'vamos iludir ninguém com fórmulas mágicas, soluções milagrosas nem promessas de enriquecimento rápido.'
        },
        {
          id: 5,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/icon_beginners',
          title: 'Acessível a Iniciantes.', 
          benefit: 'Nosso conteúdo também foi pensado para acelerar o aprendizado daqueles que estão começando e ainda não sabem nada.'
        },
      ]
    }
  }
};
</script>
