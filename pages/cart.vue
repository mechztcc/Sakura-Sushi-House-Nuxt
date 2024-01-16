<template>
  <NuxtLayout :name="'default'">
    <div class="grid grid-cols-1 md:grid-cols-3 mx-5 md:mx-20 py-10">
      <div class="col-span-1 md:col-span-3 mb-10">
        <div class="flex items-center border-b-2 py-3">
          <font-awesome-icon
            :icon="['fas', 'parachute-box']"
            class="p-2 bg-green-400 text-white rounded-xl mr-3 shadow-lg shadow-green-200"
          />
          <h1 class="text-3xl title">Finalizar Compra</h1>
        </div>
      </div>
      <div class="col-span-1 md:col-span-1 relative mr-5 md:mr-10">
        <div class="flex flex-col justify-center sticky top-20 py-10">
          <CardDelivery />
          <CardPayment />
        </div>
      </div>

      <div class="col-span-1 md:col-span-2">
        <div class="flex flex-col gap-10 py-10">
          <CartItem
            v-for="(item, index) in store.items"
            :key="index"
            :prod="item"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const store = useCartStore();
</script>

<style lang="scss" scoped></style>
