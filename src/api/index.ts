import http from "@/utils/http"
import { useUserInfoStore } from "@/store"

const userInfpStore = useUserInfoStore()

export const checkLoginStatus = async () => {
    const cookie = localStorage.getItem("cookie")
    const res = await http.post("/login/status", { cookie: cookie }) as any
    const { account, code, profile } = res.data
    if (profile && account && code === 200) {
        userInfpStore.setUserInfo(profile)
        userInfpStore.setIsLogin(true)
        return true
    } else {
        userInfpStore.setUserInfo({})
        userInfpStore.setIsLogin(false)
        return false
    }
}