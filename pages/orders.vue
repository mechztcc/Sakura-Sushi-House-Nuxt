<template>
  <NuxtLayout :name="'default'">
    <div class="grid grid-cols-1 mx-5 md:mx-20 py-10">
      <div class="col-span-1 mb-10">
        <div class="flex items-center border-b-2 py-3">
          <font-awesome-icon
            :icon="['fas', 'receipt']"
            class="p-2 bg-green-400 text-white rounded-xl mr-3 shadow-lg shadow-green-200"
          />
          <h1 class="text-3xl title">Meus Pedidos</h1>
        </div>
      </div>
    </div>

    <Load v-if="pending"/>
    <OrderItem :order="item" v-for="(item, index) in data" :key="index" />
  </NuxtLayout>
</template>

<script setup lang="ts">

const { data, error, pending, execute } = useFetchAuth(`orders`, {
  method: "get",
  immediate: false,
});

onMounted(async () => {
  await execute();
});
</script>

<style lang="css" scoped></style>
