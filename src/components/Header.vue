<script setup lang="ts">
defineProps<{ msg: string; }>();
</script>

<template>
  <header>
    <h1>{{ msg }}</h1>
  </header>
</template>
