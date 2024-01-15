<template>
  <NuxtLayout :name="'default'">
    <div class="grid grid-cols-3 mx-5 md:mx-20 py-10">
      <div class="col-span-1">
        <div class="flex flex-col h-full justify-center">
          <div class="flex flex-col p-5">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'location-dot']"
                class="p-2 bg-green-400 text-white rounded-xl mr-3 shadow-lg shadow-green-200"
              />
              <h1 class="text-xl title">Retirada / Entrega</h1>
            </div>

            <div class="flex items-center mt-5">
              <input type="radio" />
              <span class="mx-2 text-zinc-500">Retirar no Local</span>
            </div>

            <div class="flex items-center">
              <input type="radio" />
              <span class="mx-2 text-zinc-500">Receber em Casa</span>
            </div>
          </div>

          <div class="flex flex-col p-5">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['far', 'credit-card']"
                class="p-2 bg-green-400 text-white rounded-xl mr-3 shadow-lg shadow-green-200"
              />
              <h1 class="text-xl title">Forma de Pagamento</h1>
            </div>

            <div class="flex items-center mt-5">
              <input type="radio" />
              <span class="mx-2 text-zinc-500">Pix</span>
            </div>

            <div class="flex items-center">
              <input type="radio" />
              <span class="mx-2 text-zinc-500">Cartão de Crédito</span>
            </div>

            <div class="flex items-center">
              <input type="radio" />
              <span class="mx-2 text-zinc-500">Cartão de Débito</span>
            </div>

            <div class="flex items-center">
              <input type="radio" />
              <span class="mx-2 text-zinc-500">Dinheiro</span>
            </div>

            <div class="flex flex-col mt-3">
              <span class="text-zinc-500">Total</span>
              <span class="text-green-400 font-semibold text-4xl title"
                >R$ 120,00</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-2">
        <div class="flex items-center border-b-2 py-3">
          <font-awesome-icon
            :icon="['fas', 'parachute-box']"
            class="p-2 bg-green-400 text-white rounded-xl mr-3 shadow-lg shadow-green-200"
          />
          <h1 class="text-3xl title">Finalizar Compra</h1>
        </div>
        <div class="flex flex-col gap-10 py-10">
          <CartItem v-for="(item, index) in 3" :key="index" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup></script>

<style lang="scss" scoped></style>
