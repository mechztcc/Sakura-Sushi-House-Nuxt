<template>
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

  <div class="grid grid-cols-3 mx-5 md:mx-20 py-10">
    <div class="col-span-1">
      <img class="rounded-xl" src="~assets/sushi/sushi.jpg" alt="" />
    </div>
    
    <div class="col-span-1">
      <div class="flex flex-col mx-5">
        <span class="my-2">Items do pedido</span>
        <div class="flex justify-between">
          <span>8 Peças JoyJoy (1x)</span>
          <span>R$ 21,99</span>
        </div>
        <div class="flex justify-between">
          <span>Yakissoba P (1x)</span>
          <span>R$ 21,99</span>
        </div>
        <div class="flex flex-col mt-5">
          <span>Preferências:</span>
          <span>Não colocar cebolinha</span>
        </div>

        <div class="flex flex-col mt-5">
          <span>Pagamento </span>
          <span>Cartão de débito na hora da entrega</span>
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <div class="flex flex-col">
        <span>Retirada / Entrega </span>
        <span>Delivery no endereço</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped></style>
