import http from "@/utils/http"
import pinia from "@/store/store"
import { useUserInfoStore } from "@/store/index"
import router from "@/router"

const userInfoStore = useUserInfoStore(pinia)

export const checkLoginStatus = async () => {
    const cookie = localStorage.getItem("cookie")
    const res = await http.post("/login/status", { cookie: cookie }) as any
    const { account, code, profile } = res.data
    if (profile && account && code === 200) {
        userInfoStore.setUserInfo(profile)
        userInfoStore.setIsLogin(true)
        return true
    } else {
        userInfoStore.setUserInfo({} as any)
        userInfoStore.setIsLogin(false)
        return false
    }
}

export const routeTo = (path: string) => { 
    checkLoginStatus()
    router.push(path)
}