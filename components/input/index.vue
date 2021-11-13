<template>
  <v-text-field
    label="Add TODO"
    :rules="rules"
    hide-details="auto"
    />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

export default class Input extends Vue {}
</script>