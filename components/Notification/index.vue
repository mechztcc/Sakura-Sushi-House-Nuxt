<template>
  <div
    v-if="store.show && store.success"
    class="bg-zinc-50 p-3 px-3 rounded-xl shadow-xl flex flex-col absolute top-0 right-0 z-40 notification"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <font-awesome-icon
          :icon="['fas', 'circle-exclamation']"
          class="text-green-400"
        />
        <h1 class="text-green-400 text-xl font-semibold mx-3">Sucesso!</h1>
      </div>
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        class="text-zinc-500 border p-1 rounded hover:text-green-400 cursor-pointer"
      />
    </div>
    <span class="text-zinc-400 text-sm">{{ store.message }}</span>
    <div
      class="h-1 bg-green-500 rounded-full mt-2"
      :style="{ width: `${width}%` }"
    ></div>
  </div>

  <div
    v-if="store.error && store.show"
    class="bg-zinc-50 p-3 px-3 rounded-xl shadow-xl flex flex-col absolute top-0 right-0 z-40 notification"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <font-awesome-icon
          :icon="['fas', 'circle-exclamation']"
          class="text-orange-400"
        />
        <h1 class="text-orange-400 text-xl font-semibold mx-3">Falha!</h1>
      </div>
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        class="text-zinc-500 border p-1 rounded hover:text-red-400 cursor-pointer"
      />
    </div>
    <span class="text-zinc-400 text-sm">{{ store.message }}</span>
    <div
      class="h-1 bg-orange-500 rounded-full mt-2"
      :style="{ width: `${width}%` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNotificationStore } from "@/stores/notifications";

const store = useNotificationStore();
const width = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (width.value == 100) {
      clearInterval(interval);
      return;
    }

    if (store.show && width.value < 100) {
      width.value = width.value + 10;
    }
  }, 100);
});
</script>

<style lang="css" scoped>
.notification {
  min-width: 300px;
  transition: width 3s ease-out, left 3s ease-out;
}
</style>
