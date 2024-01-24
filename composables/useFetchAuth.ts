interface IParams {
  body?: any;
  method: "post" | "get" | "put" | "delete";
  immediate: boolean;
}

export default function useFetchAuth(
  url: string,
  { body, method, immediate }: IParams
) {
  const runtimeConfig = useRuntimeConfig();
  const api = runtimeConfig.public.apiBase;
  const notification = useNotificationStore();

  const token = computed(() => {
    if (!process.client) {
      return;
    }
    const data = JSON.parse(localStorage.getItem("credentials") ?? "");
    return data.user.token;
  });

  const { error, data, pending, execute } = useFetch(`${api}/${url}`, {
    body,
    immediate,
    watch: false,
    headers: {
      authorization: token,
    },
    method,
    server: true,
    onResponseError: (e: any) => {
      notification.onError(e.response._data.message);
    },
  });

  return {
    error,
    data,
    pending,
    execute,
  };
}
