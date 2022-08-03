<template>
  <ul>
    <li v-for="benefit in benefits" :key="benefit.id">
      <benefits-card icon="benefit.icon" title="benefit.title" benefit="benefit.benefit">
      </benefits-card>
    </li>
  </ul>
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
          icon: '',
          title: '', 
          benefit: ''
        }
      ]
    }
  }
};
</script>
