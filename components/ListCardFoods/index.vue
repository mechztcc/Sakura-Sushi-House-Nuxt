<template>
  <div class="px-5 py-5 md:px-10 mb-20">
    <div class="flex items-center mb-10 border-b-2 py-3">
      <font-awesome-icon
        :icon="props.icon"
        class="p-2 bg-green-400 text-white rounded-xl mr-3 shadow-lg shadow-green-200"
        :size="'lg'"
      />
      <h1 class="text-3xl title">{{ props.title }}</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
      <div
        class="col-span-1 md:col-span-1 lg:col-span-1"
        v-for="(item, index) in 4"
        :key="index"
      >
        <CardFood />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  icon: { type: Array, default: () => ["fas", "bowl-food"] },
});
</script>

<style lang="scss" scoped></style>
