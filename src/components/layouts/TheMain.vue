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
    <h2
      class="text-center font-lato text-3xl font-thin uppercase text-gray-100"
    >
      Por que
      <span class="font-bold text-emerald-500">milhares de traders</span>
      frequentam o Portal diariamente?
    </h2>
    <quality-card>
      <template v-slot:icon
        ><img
          src="https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_rec.png"
          alt="Icone Especialistas"
      /></template>
      <template v-slot:title>Especialistas e Traders profissionais</template>
      <template v-slot:quality
        >reconhecidos no mercado e com mais de 10 anos de experiência. Esse é o
        time que elabora nosso conteúdo.</template
      >
    </quality-card>
    <quality-card>
      <template v-slot:icon
        ><img
          src="https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_elearning.png"
          alt="Icone Especialistas"
      /></template>
      <template v-slot:title>Plataforma de E-learning EAD completa</template>
      <template v-slot:quality
        >com centenas de vídeos gratuitos, artigos, perguntas de fixação e
        discussão.</template
      >
    </quality-card>
    <quality-card>
      <template v-slot:icon
        ><img
          src="https://res.cloudinary.com/portal-do-trader/image/upload/c_scale,w_61/v1602874705/pdt-home/icon_msg.png"
          alt="Icone Especialistas"
      /></template>
      <template v-slot:title>Comunidade de Traders e Investidores</template>
      <template v-slot:quality
        >que enfrenta os mesmos desafios que você e está sempre disponível para
        ajudar todos os dias.</template
      >
    </quality-card>
    <quality-card>
      <template v-slot:icon
        ><img
          src="https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_chart.png"
          alt="Icone Especialistas"
      /></template>
      <template v-slot:title
        >Análise Técnica, Price Action, Tape Reading, Fundamentalista e mais.
      </template>
      <template v-slot:quality
        >Acreditamos na diversidade de técnicas para cada aluno encontrar o seu
        caminho.</template
      >
    </quality-card>
    <quality-card>
      <template v-slot:icon
        ><img
          src="https://res.cloudinary.com/portal-do-trader/image/upload/c_scale,w_61/v1602874705/pdt-home/icon_modalities.png"
          alt="Icone Especialistas"
      /></template>
      <template v-slot:title
        >Day Trade, Swing Trade, Position e Alocação de Carteiras.</template
      >
      <template v-slot:quality
        >Aprenda técnicas para operar cada modalidade de acordo com seus
        objetivos.</template
      >
    </quality-card>
    <quality-card>
      <template v-slot:icon
        ><img
          src="https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_bs.png"
          alt="Icone Especialistas"
      /></template>
      <template v-slot:title
        >Dólar, Índice, Ações, Opções, Forex e até Bitcoin.</template
      >
      <template v-slot:quality
        >Nosso conteúdo educacional engloba todos os principais ativos do
        mercado.</template
      >
    </quality-card>
  </section-container>
  <section-container class="bg-gray-200">
    <div class="flex flex-col space-y-4">
      <h2 class="text-center font-lato text-3xl font-bold uppercase">
        Acesse agora o
        <span class="text-emerald-500">melhor conteúdo gratuito</span> para
        operar na Bolsa de Valores
      </h2>
      <p class="text-center font-lato uppercase">
        Veja você mesmo por que o
        <span class="text-emerald-500">Portal do Trader</span> é o melhor site
        para <span class="text-emerald-500">aprender a operar</span>.
      </p>
    </div>
    <benefits-card>
      <template v-slot:icon
        ><img
          class="w-52"
          src="https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/icon_dev"
          alt="Ícone do Benefício"
      /></template>
      <template v-slot:title>Desenvolva as habilidades</template>
      <template v-slot:benefit
        >para vencer no mercado com especialistas reconhecidos e um plano
        educacional completo, etapa por etapa.</template
      >
    </benefits-card>
    <benefits-card>
      <template v-slot:icon
        ><img
          class="w-32"
          src="https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/icon_scr.png"
          alt="Ícone do Benefício"
      /></template>
      <template v-slot:title
        >Interaja ao vivo com traders e investidores profissionais</template
      >
      <template v-slot:benefit
        >em nossos chats, grupos, lives diárias, aulas ao vivo e redes
        sociais.</template
      >
    </benefits-card>
    <benefits-card>
      <template v-slot:icon
        ><img
          class="w-52"
          src="https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/icon_lrn"
          alt="Ícone do Benefício"
      /></template>
      <template v-slot:title>Fuja das armadilhas do mercado.</template>
      <template v-slot:benefit
        >Percorra um caminho confiável e fique livre das "roubadas" mais comuns
        do mercado financeiro.</template
      >
    </benefits-card>
    <benefits-card>
      <template v-slot:icon
        ><img
          class="w-52"
          src="https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/Icon_thumbs_up_dark"
          alt="Ícone do Benefício"
      /></template>
      <template v-slot:title>Proposta Justa.</template>
      <template v-slot:benefit
        >Nós nunca vamos iludir ninguém com fórmulas mágicas, soluções
        milagrosas nem promessas de enriquecimento rápido.</template
      >
    </benefits-card>
    <benefits-card>
      <template v-slot:icon
        ><img
          class="w-52"
          src="https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/icon_beginners"
          alt="Ícone do Benefício"
      /></template>
      <template v-slot:title>Acessível a Iniciantes.</template>
      <template v-slot:benefit
        >Nosso conteúdo também foi pensado para acelerar o aprendizado daqueles
        que estão começando e ainda não sabem nada.</template
      >
    </benefits-card>
  </section-container>
  <section-container class="bg-dark-background bg-fixed bg-no-repeat">
    <div
      class="flex flex-col items-center font-lato text-2xl font-thin uppercase text-gray-200"
    >
      <h2 class="text-center">
        <span class="px-32 font-normal text-emerald-500">6 anos</span> no
        mercado
      </h2>
      <span class="mt-4 h-0.5 w-6/12 bg-emerald-500"></span>
      <p class="text-center">
        Entenda por que acreditamos que
        <span class="font-normal text-emerald-500"
          >juntos somo mais fortes
        </span>
      </p>
    </div>
    <div class="flex flex-col space-y-16">
      <attribute-info class="mt-12">
        <template v-slot:icon
          ><img
            class="w-20"
            src="https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_subs.png"
            alt="Icone do Atributo"
        /></template>
        <template v-slot:attribute>+12 milhões</template>
        <template v-slot:description>de visualizaçoes no youtube</template>
      </attribute-info>
      <attribute-info>
        <template v-slot:icon
          ><img
            class="w-20"
            src="https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_msg.png"
            alt="Icone do Atributo"
        /></template>
        <template v-slot:attribute>+6 milhões</template>
        <template v-slot:description>de mensagens na sala ao vivo</template>
      </attribute-info>
      <attribute-info>
        <template v-slot:icon
          ><img
            class="w-20"
            src="https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_usr.png"
            alt="Icone do Atributo"
        /></template>
        <template v-slot:attribute>+300 mil</template>
        <template v-slot:description>usuários cadastrados</template>
      </attribute-info>
      <attribute-info>
        <template v-slot:icon
          ><img
            class="w-20"
            src="https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_views.png"
            alt="Icone do Atributo"
        /></template>
        <template v-slot:attribute>+1 milhão</template>
        <template v-slot:description
          >de aulas gratuitas vistas no último ano</template
        >
      </attribute-info>
      <attribute-info>
        <template v-slot:icon
          ><img
            class="w-20"
            src="https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_vids.png"
            alt="Icone do Atributo"
        /></template>
        <template v-slot:attribute>+7 mil</template>
        <template v-slot:description>transmisssões e aulas produzidas</template>
      </attribute-info>
      <attribute-info>
        <template v-slot:icon
          ><img
            class="w-20"
            src="https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_fcrs.png"
            alt="Icone do Atributo"
        /></template>
        <template v-slot:attribute>1,5 milhão</template>
        <template v-slot:description
          >de atividades respondidas em nossa plataforma</template
        >
      </attribute-info>
    </div>
  </section-container>
  <section-container>
    
  </section-container>
</template>

<script>
import SectionContainer from "@/components/layouts/SectionContainer.vue";
import TestimonyCard from "@/components/cards/TestimonyCard.vue";
import RoundedButton from "@/components/UI/RoundedButton.vue";
import QualityCard from "@/components/cards/QualityCard.vue";
import BenefitsCard from "@/components/cards/BenefitsCard.vue";
import AttributeInfo from "@/components/layouts/AttributeInfos.vue";

export default {
  components: {
    SectionContainer,
    TestimonyCard,
    RoundedButton,
    QualityCard,
    BenefitsCard,
    AttributeInfo,
  },
};
</script>
