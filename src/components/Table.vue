<script setup lang="ts">
import { Column, DataTable } from 'primevue';
import { data } from '../data';
import Container from './Container.vue';
import Header from './Header.vue';
</script>

<template>
  <Container x="1" y="1">
    <Header msg="🎉 Sünnipäeva soodustused 🎉" />
    <DataTable :value="data" sortable paginator :rows="10">
      <Column field="companyName" header="Name" />
      <Column field="discountName" header="Soodustus" />
      <Column field="discountDescription" header="Kirjeldus" />
      <Column field="discountName" header="Soodustus" />
    </DataTable>
  </Container>
</template>
