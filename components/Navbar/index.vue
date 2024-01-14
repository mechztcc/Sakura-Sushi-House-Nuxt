<template>
  <div
    class="flex justify-between px-5 md:px-10 p-5 shadow-lg sticky top-0 z-20 bg-zinc-50"
  >
    <div class="flex items-center">
      <font-awesome-icon class="mr-2" :icon="['fas', 'shrimp']" :size="'3x'" />
      <NuxtLink to="/home">
        <h1 class="text-3xl title">Sakura House</h1>
      </NuxtLink>
    </div>
    <div class="flex items-center">
      <div class="flex rounded-full items-center px-3 py-1 border-2">
        <font-awesome-icon
          :icon="['fas', 'magnifying-glass']"
          class="text-zinc-400"
        />
        <input
          type="text"
          class="h-full outline-none p-3 px-2"
          placeholder="Buscar..."
        />
      </div>
      <button class="hover:text-green-400 font-semibold text-lg mx-3">
        Entrar
      </button>
      <NuxtLink to="/cart">
        <button
          class="hover:text-green-400 font-semibold text-lg mx-3"
          type="button"
        >
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </button>
      </NuxtLink>
      <button class="hover:text-green-400 font-semibold text-lg mx-3">
        <font-awesome-icon :icon="['far', 'heart']" />
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
