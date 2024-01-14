<template>
  <div>
    <Banner />

    <div class="mx-5 md:mx-10 mb-20">
      <h1 class="text-4xl font-semibold my-10">Recomendados</h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10"
      >
        <div
          class="col-span-1 md:col-span-1 lg:col-span-1"
          v-for="(item, index) in 4"
          :key="index"
        >
          <CardFood />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
