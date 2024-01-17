<template>
  <Form :validation-schema="schema" @submit="onHandleSubmit">
    <div class="grid grid-cols-1 md:grid-cols-2 bg-cover min-h-screen">
      <div
        class="col-span-1 md:col-span-1 px-5 md:px-20 py-5 md:py-20 flex items-center"
      >
        <div
          class="flex flex-col p-5 bg-zinc-50 w-full rounded-xl md:p-10 fade-in"
        >
          <font-awesome-icon
            class="mr-2 text-orange-400"
            :icon="['fas', 'shrimp']"
            :size="'3x'"
          />
          <NuxtLink to="/">
            <h1 class="title text-3xl text-center cursor-pointer">
              Sakura House
            </h1>
          </NuxtLink>
          <span class="text-xl text-zinc-500 text-center mt-3">
            Entre com sua conta para explorar nosso delicioso menu e fazer
            pedidos online
          </span>

          <label for="" class="mb-2 mt-10 font-semibold">E-mail</label>
          <div class="flex w-full items-center border rounded-full px-5">
            <font-awesome-icon
              :icon="['far', 'envelope']"
              class="text-green-400 rounded-full"
            />
            <Field name="email" class="p-3 rounded-xl outline-none w-full" />
          </div>
          <ErrorMessage
            name="email"
            class="text-orange-400 text-sm mt-2 text-end"
          />

          <label for="" class="mb-2 mt-5 font-semibold">Senha</label>
          <div class="flex w-full items-center border rounded-full px-5">
            <Field
              :type="isPass ? 'text' : 'password'"
              name="password"
              class="p-3 rounded-xl outline-none w-full"
            />
            <font-awesome-icon
              class="p-2 bg-green-400 rounded-full text-white cursor-pointer w-6 hover:shadow-xl hover:shadow-green-200"
              @click="onHandleVisibility"
              :icon="isPass ? ['fas', 'eye'] : ['fas', 'eye-slash']"
            />
          </div>
          <ErrorMessage
            name="password"
            class="text-orange-400 text-sm mt-2 text-end"
          />

          <span
            class="text-end hover:text-green-400 text-zinc-500 mt-2 cursor-pointer"
          >
            Esqueceu a senha?
          </span>

          <button
            v-if="!pending"
            class="text-white bg-green-400 hover:bg-green-500 hover:shadow-xl mt-5 hover:shadow-green-200 font-semibold text-lg py-2 px-3 rounded-full w-full mr-2"
          >
            ENTRAR
          </button>

          <button
            v-if="pending"
            disabled
            class="text-white bg-green-300 mt-5 hover:shadow-green-200 font-semibold text-lg py-2 px-3 rounded-full w-full mr-2"
          >
            <font-awesome-icon :icon="['fas', 'shrimp']" />
          </button>

          <hr class="my-5" />
          <span class="text-center text-zinc-500 cursor-pointer">
            Não possui conta?
            <NuxtLink to="/create-account">
              <b class="text-green-400 mx-2">Criar conta</b>
            </NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import { useNotificationStore } from "@/stores/notifications";
import { useStorage } from "@vueuse/core";

definePageMeta({ layout: "no-navbar" });

const store = useNotificationStore();
const cartStore = useCartStore();
const runtimeConfig = useRuntimeConfig();
const router = useRouter();

const schema = toTypedSchema(
  zod.object({
    email: zod.string().email({ message: "E-mail inválido" }),
    password: zod.string().min(6, { message: "Senha é obrigatório" }),
  })
);
const isPass = ref(false);
const payload = ref({});
const timeout = ref(null);

const url = runtimeConfig.public.apiBase;
const { execute, data, pending, error } = useLazyFetch(`${url}/auth`, {
  method: "POST",
  body: payload,
});

onMounted(() => {
  if (process.client) {
    localStorage.clear();
    cartStore.$reset();
  }
});

onUnmounted(() => {
  clearTimeout(timeout);
});

function onHandleVisibility() {
  isPass.value = !isPass.value;
}

async function onHandleSubmit(v, { resetForm }) {
  payload.value = {
    ...v,
  };

  await execute().then(() => {
    if (data.value && process.client) {
      store.onSuccess("Login realizado com sucesso!");
      resetForm();
      useStorage("credentials", JSON.stringify(data.value));
      timeout.value = setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  });

  if (error.value.data) {
    store.onError(error.value.data.message);
  }
}
</script>

<style lang="css" scoped>
.bg-cover {
  background-image: url("https://img.freepik.com/free-photo/top-view-delicious-sushi-with-copy-space_23-2150857970.jpg?t=st=1705496106~exp=1705499706~hmac=1389a574115ba4e33e85189b26c64ae7d539a4eb82ffc1d4324b8d710af172ac&w=1480");
  background-size: cover;
  background-position: center;
  height: 300px;
}
</style>
