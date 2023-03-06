<template>
  <div>
    <el-carousel :interval="400000" type="card" class="w-full">
      <el-carousel-item v-for="item, index in banners" :key="index">
        <img :src="item.imageUrl">
      </el-carousel-item>
    </el-carousel>
    <div @click="handleMoveTo('playList')" class="flex items-center cursor-pointer text-gray-600 hover:text-gray-900">
      <div>
        推荐歌单
      </div>
      <icon-park :icon="Right"></icon-park>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Banner, BannerRes } from '@/api/types';
import http from '@/utils/http';
import { onMounted, ref, defineEmits, computed, watch } from 'vue';
import { Right } from '@icon-park/vue-next';
import { useUserInfoStore } from '@/store';
import pinia from '@/store/store';

const userInfoStore = useUserInfoStore(pinia);
const banners = ref<Banner[]>();


const isLogin = computed(() => userInfoStore.isLogin);
const emit = defineEmits(['moveTo']);

// 获取轮播图数据
const getBanner = async () => {
  const res = await http.get("/banner?type=0") as BannerRes;
  banners.value = res.banners;
}

// 获取每日推荐歌单
watch(isLogin, (isLogin) => {
  if (isLogin) {
    getRecommendPlayList();
  }
})

const getRecommendPlayList = async () => {
  // 配置get请求携带cookie
  const res = await http.get("/recommend/resource");
  console.log(res)
}

const handleMoveTo = (tabName: string) => {
  emit('moveTo', tabName)
}

onMounted(() => {
  setTimeout(() => {
    getBanner();
  }, 0);
})

</script>

<style scoped>
.el-carousel__item img {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  height: min-content;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: min-content;
}
</style>