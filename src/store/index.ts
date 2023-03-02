import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserInfoStore = defineStore("userInfo", () => {
  const userInfo = ref({});
  const isLogin = ref(false);

  const setUserInfo = (info: any) => {
    userInfo.value = info;
  };

  const setIsLogin = (login: boolean) => {
    isLogin.value = login;
  };

  return {
    userInfo,
    isLogin,
    setUserInfo,
    setIsLogin,
  };
});
