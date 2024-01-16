<template>
  <div class="grid grid-cols-3">
    <div class="col-span-1">
      <img class="rounded-xl" :src="prod.image" />
    </div>

    <div class="col-span-2">
      <div class="flex flex-col justify-center h-full px-5">
        <h1 class="text-3xl font-semibold">{{ prod.name }}</h1>
        <span class="text-zinc-500">
          {{ prod.description }}
        </span>
        <span class="text-green-400 text-xl font-semibold">
          R$ {{ prod.price }}
        </span>
        <div class="flex items-center mt-3 text-zinc-500">
          <font-awesome-icon
            @click="store.onDecrement(prod.id)"
            :icon="['fas', 'circle-chevron-left']"
            class="cursor-pointer hover:text-orange-400"
          />
          <span class="text-xl mx-3">{{ prod.count }}</span>
          <font-awesome-icon
            @click="store.onIncrement(prod.id)"
            :icon="['fas', 'circle-chevron-right']"
            class="cursor-pointer hover:text-green-400"
          />
        </div>

        <div class="flex justify-end">
          <font-awesome-icon
            @click="store.onRemove(prod)"
            :icon="['fas', 'trash']"
            class="rounded-xl p-2 cursor-pointer bg-red-400 hover:bg-red-500 text-white hover:shadow-xl hover:shadow-red-200"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  prod: { type: Object, required: true },
});

const count = ref(1);
const store = useCartStore();
</script>

<style lang="css" scoped>
img {
  height: clamp(100px, 200px, 200px);
  object-fit: cover;
  /* animation: fade 2s ease-in-out; */
}
</style>
