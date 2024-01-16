<template>
  <div
    class="flex justify-between px-5 md:px-10 p-5 shadow-lg sticky top-0 z-20 bg-zinc-50"
  >
    <NuxtLink to="/">
      <div class="flex items-center">
        <font-awesome-icon
          class="mr-2"
          :icon="['fas', 'shrimp']"
          :size="'3x'"
        />
        <h1 class="text-3xl title" v-if="$device.isDesktop">Sakura House</h1>
      </div>
    </NuxtLink>
    <div class="flex items-center">
      <div
        class="flex rounded-full items-center px-3 py-1 border-2"
        v-if="$device.isDesktop"
      >
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
      <NuxtLink to="/login">
        <button class="hover:text-green-400 font-semibold text-lg mx-3">
          Entrar
        </button>
      </NuxtLink>
      <NuxtLink to="/cart">
        <button
          class="hover:text-green-400 font-semibold text-lg mx-3"
          type="button"
        >
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </button>
      </NuxtLink>
      <button
        class="hover:text-green-400 font-semibold text-lg mx-3"
        type="button"
      >
        <font-awesome-icon :icon="['far', 'heart']" />
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
