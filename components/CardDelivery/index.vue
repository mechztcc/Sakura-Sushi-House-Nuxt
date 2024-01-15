<template>
  <div class="flex flex-col h-full justify-center">
    <div class="flex flex-col">
      <div class="flex items-center">
        <font-awesome-icon
          :icon="['fas', 'location-dot']"
          class="p-2 bg-green-400 text-white rounded-xl mr-3 shadow-lg shadow-green-200"
        />
        <h1 class="text-xl title">Retirada / Entrega</h1>
      </div>

      <div class="flex items-center mt-5">
        <input type="radio" />
        <span class="mx-2 text-zinc-500">Retirar no Local</span>
      </div>

      <div class="flex items-center">
        <input type="radio" />
        <span class="mx-2 text-zinc-500">Receber em Casa</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
