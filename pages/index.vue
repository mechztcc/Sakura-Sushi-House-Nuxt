<template>
  <NuxtLayout :name="'default'">
    <Banner />
    <ListCardFoods :title="'Recomendados'" />
    <ListCardFoods :title="'Pratos Executivos'" :icon="['fas', 'utensils']" />
    <ListCardFoods :title="'Combos'" :icon="['fas', 'bowl-rice']" />
    <ListCardFoods :title="'Pratos Quentes'" :icon="['fas', 'mug-hot']" />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({ layout: "default" });
</script>

<style lang="scss" scoped></style>
