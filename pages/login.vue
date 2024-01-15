<template>
  <Form :validation-schema="schema">
    <div class="grid grid-cols-1 md:grid-cols-2 bg-cover min-h-screen">
      <div
        class="col-span-1 md:col-span-1 px-5 md:px-20 py-5 md:py-20 flex items-center"
      >
        <div class="flex flex-col p-5 bg-zinc-50 w-full rounded-xl md:p-10">
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
          <span class="text-xl text-zinc-500 text-center mt-3"
            >Entre com sua conta para explorar nosso delicioso menu e fazer
            pedidos online</span
          >

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
          <ErrorMessage name="password" />

          <span
            class="text-end hover:text-green-400 text-zinc-500 mt-2 cursor-pointer"
          >
            Esqueceu a senha?
          </span>

          <button
            @click="onHandleSubmit()"
            class="text-white bg-green-400 hover:bg-green-500 hover:shadow-xl mt-5 hover:shadow-green-200 font-semibold text-lg py-2 px-3 rounded-full w-full mr-2"
          >
            ENTRAR
            <font-awesome-icon
              :icon="['fas', 'right-to-bracket']"
              class="ml-2"
            />
          </button>

          <hr class="my-5" />
          <span class="text-center text-zinc-500 cursor-pointer"
            >Não possui conta?
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

const { errors, isSubmitting, handleSubmit, values } = useForm({
  initialValues: { email: "aaaaaa", password: "" },
  initialErrors: { email: "E-mail é obrigatório", password: "" },
});
const schema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Must be a valid email" }),

    password: zod.string().min(6, { message: "Password is required" }),
  })
);

const isPass = ref(false);

definePageMeta({ layout: "no-navbar" });

function onHandleVisibility() {
  isPass.value = !isPass.value;
}

function onHandleSubmit() {
  console.log(values);
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
