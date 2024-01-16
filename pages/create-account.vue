<template>
  <Form
    ref="registrationForm"
    :validation-schema="schema"
    @submit="onHandleSubmit"
  >
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
            Crie sua conta para explorar nosso delicioso menu e fazer pedidos
            online
          </span>

          <label for="" class="mb-2 mt-10 font-semibold">E-mail</label>
          <div class="flex w-full items-center border rounded-full px-5">
            <font-awesome-icon
              :icon="['far', 'envelope']"
              class="text-green-400 rounded-full"
            />
            <Field
              name="email"
              type="text"
              class="p-3 rounded-xl outline-none w-full"
            />
          </div>
          <ErrorMessage
            name="email"
            class="text-orange-400 text-sm mt-2 text-end"
          />

          <label for="" class="mb-2 mt-5 font-semibold">Nome</label>
          <div class="flex w-full items-center border rounded-full px-5">
            <font-awesome-icon
              :icon="['far', 'user']"
              class="text-green-400 rounded-full"
            />
            <Field
              name="name"
              type="text"
              class="p-3 rounded-xl outline-none w-full"
            />
          </div>
          <ErrorMessage
            name="name"
            class="text-orange-400 text-sm mt-2 text-end"
          />

          <label for="" class="mb-2 mt-5 font-semibold">Telefone</label>
          <div class="flex w-full items-center border rounded-full px-5">
            <font-awesome-icon
              :icon="['fas', 'phone']"
              class="text-green-400 rounded-full"
            />
            <Field
              name="phone"
              type="text"
              class="p-3 rounded-xl outline-none w-full"
              v-maska
              data-maska="(##) # ####-####"
            />
          </div>
          <ErrorMessage
            name="phone"
            class="text-orange-400 text-sm mt-2 text-end"
          />

          <label for="" class="mb-2 mt-5 font-semibold">Senha</label>
          <div class="flex w-full items-center border rounded-full px-5">
            <Field
              name="password"
              :type="isPass ? 'text' : 'password'"
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

          <button
            v-if="!pending"
            class="text-white bg-green-400 hover:bg-green-500 hover:shadow-xl mt-5 hover:shadow-green-200 font-semibold text-lg py-2 px-3 rounded-full w-full mr-2"
          >
            CRIAR CONTA
            <font-awesome-icon
              :icon="['fas', 'right-to-bracket']"
              class="ml-2"
            />
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
            Possui uma conta?
            <NuxtLink to="/login">
              <b class="text-green-400 mx-2">Login</b>
            </NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { Form, Field, ErrorMessage, useResetForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import { useNotificationStore } from "@/stores/notifications";
definePageMeta({ layout: "no-navbar" });

const store = useNotificationStore();
const runtimeConfig = useRuntimeConfig();

const schema = toTypedSchema(
  zod.object({
    email: zod.string().email({ message: "E-mail inválido" }),
    name: zod.string().nonempty({ message: "Nome inválido" }),
    phone: zod.string().min(9, { message: "Telefone é obrigatório" }),
    password: zod.string().min(6, { message: "Senha é obrigatório" }),
  })
);
const isPass = ref(false);
const payload = ref({});

const url = runtimeConfig.public.apiBase;
const { execute, data, pending, error } = useLazyFetch(`${url}/users`, {
  method: "POST",
  body: payload,
});

const registrationForm = ref(null);

async function onHandleSubmit(v, { resetForm }) {
  payload.value = {
    ...v,
    role: "CUSTOMER",
  };
  await execute().then(() => {
    if (data.value) {
      store.onSuccess("Conta criada com sucesso!");
      resetForm();
    }
  });

  if (error.value.data) {
    store.onError(error.value.data.message);
  }
}

function onHandleVisibility() {
  isPass.value = !isPass.value;
}
</script>

<style lang="css" scoped>
.bg-cover {
  background-image: url("assets/sushi/login.jpg");
  background-size: cover;
  background-position: center;
  height: 300px;
}
</style>
