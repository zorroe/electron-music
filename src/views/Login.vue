<template>
  <div>
    登陆界面
    <el-button @click="routeTo('/')">首页</el-button>
  </div>

  <img id="qrLogin" :src="imgSrc">
</template>

<script setup lang="ts">
import { checkLoginStatus, routeTo } from '@/api';
import router from '@/router';
import { http } from '@/utils/http';
import Cookies from 'js-cookie'
import { onMounted, onUnmounted, ref } from 'vue';

const imgSrc = ref<string>("")
let timer: string | number | NodeJS.Timer | undefined

async function checkStatus(key: string) {
  const res = http.get(`/login/qr/check?key=${key}`) as any
  return res
}

const setCookie = (cookie: string) => {
  const arr = cookie.split(';')
  arr.forEach(item => {
    const [key, value] = item.split('=')
    if ((key === 'MUSIC_U')) {
      Cookies.set(key, value)
    }
  })
}

async function login() {
  const res = await http.get(`/login/qr/key`) as any
  const key = res.data.unikey
  const res2 = await http.get(`/login/qr/create?key=${key}&qrimg=true`) as any
  imgSrc.value = res2.data.qrimg

  timer = setInterval(async () => {
    const statusRes = await checkStatus(key) as any
    if (statusRes.code === 800) {
      alert('二维码已过期,请重新获取')
      clearInterval(timer)
    }
    if (statusRes.code === 803) {
      clearInterval(timer)
      localStorage.setItem("cookie", statusRes.cookie)
      setCookie(statusRes.cookie)
      checkLoginStatus()
      router.push('/')
    }
  }, 3000)
}
onMounted(() => {
  login()
})

onUnmounted(() => {
  clearInterval(timer)
})

</script>

<style scoped></style>