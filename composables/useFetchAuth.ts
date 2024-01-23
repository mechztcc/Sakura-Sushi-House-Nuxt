interface IParams {
  body: any;
  method: "POST" | "GET" | "PUT" | "DELETE";
}

export const useFetchAuth = (url: string, { body, method }: IParams) => {
  const runtimeConfig = useRuntimeConfig();
  const api = runtimeConfig.public.apiBase;

  const token = computed(() => {
    if (!process.client) {
      return;
    }

    const data = JSON.parse(localStorage.getItem("credentials") ?? "");
    return data.user.token;
  });
  const { error, data, pending, execute } = useFetch(`${api}/${url}`, {
    method,
    body,
    immediate: false,
    watch: false,
    headers: {
      authorization: token,
    },
  });

  return {
    error,
    data,
    pending,
    execute,
  };
};
