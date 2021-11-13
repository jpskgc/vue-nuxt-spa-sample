<template>
  <Home />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Home from '~/components/home/index.vue';

@Component({
  components: {
    Home,
  },
})
export default class Index extends Vue {}
</script>