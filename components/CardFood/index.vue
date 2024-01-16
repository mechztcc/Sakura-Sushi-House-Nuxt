<template>
  <div class="flex flex-col min-h-full">
    <img class="rounded-xl" :src="props.prod.image" alt="" />
    <div class="flex flex-col">
      <h1 class="font-semibold text-2xl mt-2">{{ props.prod.name }}</h1>
      <span class="text-zinc-500 my-2">
        {{ props.prod.description }}
      </span>
      <div class="flex justify-between">
        <span class="text-green-400 text-xl font-semibold">
          R$ {{ props.prod?.price }}
        </span>
        <div class="flex items-center">
          <font-awesome-icon
            :icon="['fas', 'star']"
            class="mx-2 text-yellow-400"
          />
          3.9
        </div>
      </div>

      <div class="flex justify-between mt-3">
        <button
          @click="store.onAdd(prod)"
          class="text-white bg-green-400 hover:bg-green-500 hover:shadow-xl hover:shadow-green-200 font-semibold text-lg py-2 px-3 rounded-xl w-full mr-2"
        >
          COMPRAR
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </button>
        <button
          class="hover:border-green-400 hover:text-green-500 border-2 font-semibold text-lg py-2 px-3 rounded-xl w-full text-zinc-500"
        >
          FAVORITOS
          <font-awesome-icon :icon="['far', 'heart']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  prod: { type: Object, required: true },
});

const store = useCartStore();
</script>

<style lang="css" scoped>
img {
  min-height: 200px;
  max-height: 200px;
  object-fit: cover;
}
</style>
