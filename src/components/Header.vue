<template>
    <div class="header-bar">
        <div class="w-1/6 flex items-center justify-center">
            <icon-park :icon="SoundWave" fill="#fbd9d9"></icon-park>
            <div class="text-white text-opacity-80 cursor-default min-w-max">
                网易云音乐
            </div>
        </div>
        <div class="w-1/3 flex justify-center items-center">
            <el-input :prefix-icon="Search" v-model="searchKey" :placeholder="`大家都在搜:  ${defaultSearchKey}`" />
        </div>
        <div class="w-1/3 flex justify-end items-center">
            <div v-if="!isLogin" @click="routeTo('/login')">
                未登录
            </div>
            <el-dropdown trigger="click" v-else>
                <div class="flex justify-center items-center">
                    <img :src="avatar" class="w-8 rounded-full mx-2 cursor-pointer">
                    <div class="text-white text-sm text-opacity-80 cursor-pointer hover:text-opacity-90">{{ userName }}
                    </div>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="routeTo(`/user/${userId}`)">主页</el-dropdown-item>
                        <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <icon-park :icon="Setting" :size="18" fill="#fbd9d9"></icon-park>
        </div>
        <div class="w-1/6 flex justify-end items-center">
            <icon-park :icon="Minus" :size="18" fill="#fbd9d9" class="cursor-pointer"></icon-park>
            <icon-park :icon="RectangleOne" :size="18" fill="#fbd9d9" class="cursor-pointer"></icon-park>
            <icon-park :icon="Close" :size="18" fill="#fbd9d9"
                class="cursor-pointer text-opacity-80 hover:text-opacity-100"></icon-park>
        </div>
    </div>
</template>

<script setup lang="ts">
import http from "@/utils/http";
import pinia from "@/store/store";
import { checkLoginStatus, routeTo } from "@/api/index";
import { SoundWave, Search, Setting, Minus, RectangleOne, Close } from "@icon-park/vue-next";
import { computed, onMounted, ref } from "vue";
import { useUserInfoStore } from "@/store";
import { userProfile } from "@/api/types";

const userInfoStore = useUserInfoStore(pinia);

const searchKey = ref('');
const isLogin = computed(() => userInfoStore.isLogin);
const avatar = computed(() => userInfoStore.getUserInfo.avatarUrl);
const defaultSearchKey = ref<string>("")
const userName = computed(() => userInfoStore.getUserInfo.nickname);
const userId = computed(() => userInfoStore.getUserInfo.userId);

const getDefaultSearchKey = async () => {
    const res = await http.get("/search/default") as any;
    const { data } = res;
    defaultSearchKey.value = data.showKeyword;
}

const handleLogout = async () => {
    await http.get("/logout");
    userInfoStore.setIsLogin(false);
    userInfoStore.setUserInfo({} as userProfile);
    localStorage.removeItem("cookie");
    routeTo("/login");
}

onMounted(() => {
    getDefaultSearchKey();
    checkLoginStatus()
})

</script>

<style scoped>
.el-input {
    width: 200px;
}

.i-icon {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>