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

  <SimpleButton :pending="pending" label="CONCLUIR" @click="onHandleSubmit()">
    <font-awesome-icon :icon="['fas', 'shrimp']" />
  </SimpleButton>
</template>

<script setup lang="ts">
import { useFetchAuth } from "../../composables/useFetchAuth";
const store = useCartStore();
const notification = useNotificationStore();

const payload = computed(() => {
  return {
    preferences: store.prefs,
    product: store.items,
  };
});

const router = useRouter();
const timeout = ref<any>(null);
const { data, error, execute, pending } = useFetchAuth("orders", {
  body: payload,
  method: "POST",
});

onUnmounted(() => {
  clearTimeout(timeout);
});

async function onHandleSubmit() {
  const items = store.items;
  if (items.length == 0) {
    return;
  }

  await execute();

  if (error.value?.data) {
    notification.onError(error.value.data.message);
  }

  if (data.value) {
    notification.onSuccess("Compra realizada com sucesso!");
    store.$reset();
    timeout.value = setTimeout(() => {
      router.push("/");
    }, 2000);
  }
}
</script>

<style lang="scss" scoped></style>
