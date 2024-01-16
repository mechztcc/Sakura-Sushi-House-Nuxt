import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notification", {
  state: () => {
    return { show: false, message: "", error: false, success: false };
  },
  actions: {
    onHandle() {
      this.show = !this.show;
    },
    onSuccess(message: string) {
      this.show = true;
      this.message = message;
      this.error = false;
      this.success = true;

      const timeout = setTimeout(() => {
        this.$reset();
      }, 2000);
    },
    onError(message: string) {
      this.show = true;
      this.message = message;
      this.error = true;
      this.success = false;

      const timeout = setTimeout(() => {
        this.$reset();
      }, 2000);
    },
  },
});
