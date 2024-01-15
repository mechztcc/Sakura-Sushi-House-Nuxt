<template>
  <div class="grid grid-cols-3">
    <div class="col-span-1">
      <img class="rounded-xl" src="~assets/sushi/chicken-noodle.jpg" />
    </div>

    <div class="col-span-2">
      <div class="flex flex-col justify-center h-full px-5">
        <h1 class="text-3xl font-semibold">Makimono G</h1>
        <span class="text-zinc-500">
          Rolos de sushi cuidadosamente preparados para proporcionar uma
          experiência culinária única.
        </span>
        <span class="text-green-400 text-xl font-semibold">R$ 29,90</span>
        <div class="flex items-center mt-3 text-zinc-500">
          <font-awesome-icon
            @click="onHandleValue('down')"
            :icon="['fas', 'circle-chevron-left']"
            class="cursor-pointer hover:text-orange-400"
          />
          <span class="text-xl mx-3">{{ count }}</span>
          <font-awesome-icon
            @click="onHandleValue('up')"
            :icon="['fas', 'circle-chevron-right']"
            class="cursor-pointer hover:text-green-400"
          />
        </div>

        <div class="flex justify-end">
          <font-awesome-icon
            :icon="['fas', 'trash']"
            class="rounded-xl p-2 cursor-pointer bg-red-400 hover:bg-red-500 text-white hover:shadow-xl hover:shadow-red-200"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count: Ref<number> = ref(1);

function onHandleValue(type: "up" | "down") {
  if (type == "down" && count.value > 0) {
    count.value--;
  }
  if (type == "up") {
    count.value++;
  }
}
</script>

<style lang="css" scoped>
img {
  height: clamp(100px, 200px, 200px);
  object-fit: cover;
  /* animation: fade 2s ease-in-out; */
}
</style>
