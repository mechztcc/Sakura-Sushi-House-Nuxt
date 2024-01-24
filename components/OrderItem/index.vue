<template>
  <div class="grid grid-cols-1 md:grid-cols-3 mx-5 md:mx-20 py-10 border-b-2">
    <div class="col-span-1">
      <div class="flex justify-center items-center">
        <img class="rounded-xl" src="~assets/sushi/sushi.jpg" alt="" />
      </div>
    </div>

    <div class="col-span-1">
      <div class="flex flex-col mx-5">
        <div class="flex items-center mt-5 md:mt-0">
          <font-awesome-icon
            :icon="['fas', 'basket-shopping']"
            class="p-2 bg-green-400 mr-2 text-white rounded-xl shadow-lg shadow-green-200"
          />
          <span class="my-2 mx-2 text-green-400 font-semibold">Pedido</span>
        </div>
        <div
          class="flex justify-between mt-3"
          v-for="(prod, index) in order.products"
          :key="index"
        >
          <span class="text-zinc-600">{{ prod.name }}</span>
          <div class="flex text-green-400">
            <span class="">({{ prod.count }}x)</span>
            <span class="mx-5 font-semibold"> R$ {{ prod.price }}</span>
          </div>
        </div>

        <div class="flex flex-col mt-5">
          <span class="text-zinc-600">Preferências:</span>
          <span class="text-zinc-600">{{ order.preferences }}</span>
        </div>
      </div>
    </div>
    <div class="col-span-1 mx-5">
      <div class="flex flex-col">
        <div class="flex items-center mt-5 md:mt-0">
          <font-awesome-icon
            :icon="['fas', 'money-bill-1-wave']"
            class="p-2 bg-green-400 text-white rounded-xl shadow-lg shadow-green-200"
          />
          <span class="mx-2 text-green-400 font-semibold">
            Pagamento / Entrega
          </span>
        </div>
        <span class="mt-3 text-zinc-600">{{ order.paymentType }}</span>
      </div>

      <div class="flex flex-col mt-3">
        <span class="text-zinc-600">Retiada no balcão</span>
      </div>

      <div
        class="flex flex-col justify-center w-full items-center md:flex-row p-1 px-2 mt-3 bg-green-400 text-white rounded-xl shadow-lg shadow-green-200"
      >
        <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
        <b class="ml-2"> {{ created }}</b>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import type { PropType } from "vue";
import type { IOrder } from "~/interfaces/order.interface";

const props = defineProps({
  order: {
    type: Object as PropType<IOrder>,
    required: true,
  },
});

const created = useDateFormat(props.order.createdAt, 'DD/MM/YYYY HH:mm')

</script>

<style lang="css" scoped>
img {
  min-height: 200px;
  max-height: 200px;
  min-width: 300px;
  max-width: 300px;
  object-fit: cover;
}
</style>
