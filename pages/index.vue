<template>
  <NuxtLayout :name="'default'">
    <Banner />
    <ListCardFoods
      v-for="(category, index) in categories"
      :key="index"
      :title="category.name"
      :prods="category.products"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useFetch } from "@vueuse/core";

const runtimeConfig = useRuntimeConfig();
definePageMeta({ layout: "default" });

const api = runtimeConfig.public.apiBase;
const {
  isFetching,
  error,
  data: categories,
} = await useFetch(`${api}/categories`).json();
</script>

<style lang="scss" scoped></style>
