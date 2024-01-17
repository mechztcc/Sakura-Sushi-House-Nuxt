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
            v-for="(item, i) in banners"
            :key="index"
            :icon="index == i ? ['fas', 'circle'] : ['far', 'circle']"
            class="mr-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const banners = [
  "https://img.freepik.com/free-photo/fresh-seafood-meal-plate-japanese-cultures-presented-generated-by-ai_188544-20653.jpg?t=st=1705496188~exp=1705499788~hmac=95b26f2ea1904d7a499b9602fb539549a3911453c3175ebc05c92a5a5e738c09&w=1480",
  "https://img.freepik.com/free-photo/delicious-sushi-table_23-2150857820.jpg?t=st=1705496213~exp=1705499813~hmac=aaa352aa6c8d1f64da92a97367d612eeecc354066a99127405003ae98dc64022&w=1380",
  "https://img.freepik.com/free-photo/freshness-variety-plate-gourmet-seafood-meal-generated-by-artificial-intelligence_25030-64499.jpg?t=st=1705496252~exp=1705499852~hmac=e3c74468cd6c9997eccb533a7676c4a396b8d401f2295e5ae2fbf9866a67e450&w=1480",
  "https://img.freepik.com/free-photo/expert-male-chef-crafting-fresh-meal-indoors-generated-by-ai_188544-26105.jpg?t=st=1705496724~exp=1705500324~hmac=6fb29d45e7bc53ddfb218a1a344097696b3bcce29999606cc57a2a73ffee2283&w=1480"
];
const index = ref(0);
const currentBanner = computed(() => banners[index.value]);
function changeBanner() {
  setInterval(() => {
    index.value = (index.value + 1) % banners.length;
  }, 5000);
}
onMounted(() => {
  changeBanner();
});

function onHandle() {
  index.value = (index.value + 1) % banners.length;
}
</script>

<style lang="css" scoped>
img {
  height: clamp(75vh, 75vh, 75vh);
  object-fit: cover;
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
