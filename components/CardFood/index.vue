<template>
  <div class="flex flex-col">
    <img class="rounded-xl" src="~assets/sushi/sushi.jpg" alt="" />
    <div class="flex flex-col">
      <h1 class="font-semibold text-2xl mt-2">Makimono P</h1>
      <span class="text-zinc-500 my-2">
        Rolos de sushi cuidadosamente preparados para proporcionar uma
        experiência culinária única.
      </span>
      <div class="flex justify-between">
        <span class="text-green-400 text-xl font-semibold">R$ 29,90</span>
        <div class="flex items-center">
          <font-awesome-icon :icon="['fas', 'star']" class="mx-2 text-yellow-400" />
          3.9
        </div>
      </div>

      <div class="flex justify-between mt-3">
        <button
          class="hover:text-white hover:bg-green-400 font-semibold text-lg py-2 px-3 rounded-xl"
        >
          COMPRAR
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </button>
        <button
          class="hover:text-white hover:bg-green-400 font-semibold text-lg py-2 px-3 rounded-xl"
        >
          FAVORITOS
          <font-awesome-icon :icon="['far', 'heart']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
