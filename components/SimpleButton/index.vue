<template>
  <button
    :disabled="!pending"
    :class="{
      'bg-green-300 hover:shadow-green-200': !pending,
      'bg-green-500 hover:bg-green-600 hover:shadow-green-200': pending,
    }"
    class="text-white mt-5 font-semibold text-lg py-2 px-3 rounded-full w-full mr-2 cursor-pointer"
  >
    <span v-if="pending">{{ label }}</span>
    <slot v-if="!pending"></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String },
  pending: { type: Boolean },
});
</script>

<style lang="css" scoped></style>
