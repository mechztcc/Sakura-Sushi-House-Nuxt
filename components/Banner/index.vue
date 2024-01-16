<template>
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-1 md:col-span-1">
      <div class="flex flex-col h-full justify-center mx-5 md:mx-10">
        <h1 class="text-5xl title">Você gosta de comida Japonesa?</h1>
        <span class="mt-3 text-xl"
          >Explore o sabor autêntico do Japão no conforto da sua casa.</span
        >
        <Button class="mt-3" />
      </div>
    </div>
    <div class="col-span-1 md:col-span-2">
      <div
        class="flex relative overflow-hidden"
        style="border-top-left-radius: 500px"
      >
        <img class="w-full slide-out-left" :src="currentBanner" alt="" />
        <div
          class="absolute flex justify-between bottom-1/2 text-white w-full px-10"
        >
          <font-awesome-icon
            @click="onHandle()"
            class="cursor-pointer"
            :icon="['fas', 'circle-chevron-left']"
            :size="'3x'"
          />
          <font-awesome-icon
            @click="onHandle()"
            class="cursor-pointer"
            :icon="['fas', 'circle-chevron-right']"
            :size="'3x'"
          />
        </div>
        <div class="absolute flex bottom-0 right-1/2 text-white mb-5">
          <font-awesome-icon
            :icon="index == 0 ? ['fas', 'circle'] : ['far', 'circle']"
            class="mx-3"
          />
          <font-awesome-icon
            :icon="index == 1 ? ['fas', 'circle'] : ['far', 'circle']"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const banners = [
  "~assets/sushi/yakissoba.jpg",
  "~assets/sushi/chicken-noodle.jpg",
];
const index = ref(0);
const currentBanner = computed(() => banners[index.value]);
function changeBanner() {
  setInterval(() => {
    index.value = (index.value + 1) % banners.length;
  }, 5000);
}

function onHandle() {
  index.value == 1 ? (index.value = 0) : (index.value = 1);
}

onMounted(() => {
  changeBanner();
});
</script>

<style lang="css" scoped>
img {
  height: clamp(75vh, 75vh, 75vh);
  object-fit: cover;
  /* animation: fade 2s ease-in-out; */
}

@keyframes fade {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
</style>
