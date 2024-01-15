<template>
  <div
    class="bg-orange-300 text-white font-semibold flex items-center justify-center p-2 mb-5 md:mb-0 blinking-text"
  >
    <font-awesome-icon
      :icon="['fas', 'triangle-exclamation']"
      :size="'xl'"
    ></font-awesome-icon>
    <span class="mx-2 text-xl">Estamos fechados no momento!</span>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
@keyframes blink {
  0% {
    color: white;
  }
  50% {
    color: orange;
  }
  100% {
    color: orangered;
  } /* Cor final */
}

.blinking-text {
  animation: blink 3s infinite;
}
</style>
