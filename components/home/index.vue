<template>
  <div>
    <Input/>
    <List/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Input from '~/components/input/index.vue';
import List from '~/components/list/index.vue';

@Component({
  layout: 'default',
  components: {
    Input,
    List,
  },
})
export default class Home extends Vue {}
</script>