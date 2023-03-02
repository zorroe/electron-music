import { userProfile } from "@/api/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useUserInfoStore = defineStore("userInfo", () => {
  const userInfo = ref({} as userProfile);
  const isLogin = ref(false);

  const setUserInfo = (info: userProfile) => {
    userInfo.value = info;
  };

  const setIsLogin = (login: boolean) => {
    isLogin.value = login;
  };

  const getUserInfo = computed(() => {
    return userInfo.value;
  });

  return {
    userInfo,
    isLogin,
    getUserInfo,
    setUserInfo,
    setIsLogin,
  };
});

