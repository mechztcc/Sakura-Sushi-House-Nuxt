<template>
  <div>
    <Banner />
    <ListCardFoods :title="'Recomendados'" />
    <ListCardFoods :title="'Pratos Executivos'" :icon="['fas', 'utensils']" />
    <ListCardFoods :title="'Combos'" :icon="['fas', 'bowl-rice']" />
    <ListCardFoods :title="'Pratos Quentes'" :icon="['fas', 'mug-hot']" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
