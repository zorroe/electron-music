import http from "@/utils/http";
import pinia from "@/store/store";
import { useUserInfoStore } from "@/store/index";
import router from "@/router";
import Cookies from "js-cookie";

const userInfoStore = useUserInfoStore(pinia);

const setCookie = (cookie: string) => {
  const arr = cookie.split(";");
  arr.forEach((item) => {
    const [key, value] = item.split("=");
    if (key === "MUSIC_U") {
      Cookies.set(key, value);
    }
  });
};

export const checkLoginStatus = async () => {
  const cookie = localStorage.getItem("cookie");
  const res = (await http.post("/login/status", { cookie: cookie })) as any;
  const { account, code, profile } = res.data;
  if (profile && account && code === 200) {
    if (cookie) {
      setCookie(cookie);
    }
    userInfoStore.setUserInfo(profile);
    userInfoStore.setIsLogin(true);
    return true;
  } else {
    userInfoStore.setUserInfo({} as any);
    userInfoStore.setIsLogin(false);
    return false;
  }
};

export const routeTo = (path: string) => {
  checkLoginStatus();
  router.push(path);
};
