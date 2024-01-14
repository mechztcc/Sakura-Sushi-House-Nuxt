<template>
  <div class="flex justify-between px-5 md:px-10 p-5 shadow-lg sticky top-0 z-20 bg-zinc-50">
    <h1 class="text-3xl title">Sakura House</h1>
    <div class="flex items-center">
      <div class="flex  rounded-full items-center px-3 py-1 border-2">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <input type="text" class="h-full outline-none p-3 px-2 " placeholder="Buscar...">
      </div>
      <button class="hover:text-green-400 font-semibold text-lg mx-3">
        Entrar
      </button>
      <button class="hover:text-green-400 font-semibold text-lg mx-3">
        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
      </button>
      <button class="hover:text-green-400 font-semibold text-lg mx-3">
        <font-awesome-icon :icon="['far', 'heart']" />
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
