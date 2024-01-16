<template>
  <div class="flex items-center mt-10">
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

  <div class="flex flex-col mt-5">
    <span class="text-zinc-500">Total</span>
    <span class="text-green-400 font-semibold text-4xl title mt-3">
      R$ {{ store.totalPrice }}
    </span>
  </div>

  <div class="flex flex-col mt-5 text-zinc-500">
    <span>Preferecias:</span>
    <textarea
      v-model="store.prefs"
      class="rounded-xl outline-none p-3 border border-green-400 mt-3"
      cols="30"
      rows="10"
      placeholder="Nos diga suas preferencias, por exemplo: Não quero que coloque cebola."
    ></textarea>
  </div>

  <button
    @click="onSubmit"
    class="text-white bg-green-400 hover:bg-green-500 hover:shadow-xl mt-5 hover:shadow-green-200 font-semibold text-lg py-2 px-3 rounded-full w-full mr-2"
  >
    CONCLUIR
  </button>
</template>

<script setup>
const store = useCartStore();

const prefs = ref("");

async function onSubmit() {
  const items = store.items;
  const payload = {
    preferences: store.prefs,
    products: [...items],
  };
}
</script>

<style lang="scss" scoped></style>
