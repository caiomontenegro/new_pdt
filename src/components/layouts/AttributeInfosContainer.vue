<template>
  <div class="mt-12">
    <ul class="space-y-8 md:space-y-8 md:flex md:flex-wrap md:justify-center">
      <li class="md:w-5/12 xl:w-4/12" v-for="attribute in attributes" :key="attribute.id">
        <attribute-infos :icon="attribute.icon" :attribute="attribute.attribute" :description="attribute.description"></attribute-infos>
      </li>
    </ul>
  </div>
</template>

<script>
import AttributeInfos from '@/components/cards/AttributeInfos.vue'
export default {
  components: {
    AttributeInfos
  },
  data() {
    return {
      attributes: [
        {
          id: 0,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_subs.png',
          attribute: '+12 milhões',
          description: 'de visualizações no youtube'
        },
        {
          id: 1,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_msg.png',
          attribute: '+6 milhões',
          description: 'de mensagens na sala ao vivo'
        },
        {
          id: 2,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_usr.png',
          attribute: '+300 mil',
          description: 'usuários cadastrados'
        },
        {
          id: 3,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_views.png',
          attribute: '+1 milhão',
          description: 'de aulas gratuitas vistas no último ano'
        },
        {
          id: 4,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_vids.png',
          attribute: '+7 mil',
          description: 'transmissões e aulas produzidas'
        },
        {
          id: 5,
          icon: 'https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_fcrs.png',
          attribute: '1,5 milhão',
          description: 'de atividades respondidas em nossa plataforma'
        },
      ]
    }
  }
}
</script>