<template>
    <div>
        首页
        <el-button @click="handleToLogin" v-if="!isLogin">登录</el-button>
        <el-button @click="checkLoginStatus">检测登陆状态</el-button>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { checkLoginStatus } from '@/api';
import { useUserInfoStore } from '@/store';
import { computed, onMounted, ref } from 'vue';

const userInfoStore = useUserInfoStore()

const isLogin = computed(() => userInfoStore.isLogin)

const handleToLogin = () => {
    router.push("/login")
}

onMounted(() => {
    checkLoginStatus()
})


</script>

<style scoped></style>