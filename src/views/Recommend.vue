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
    <div class="flex flex-wrap justify-around">
      <div v-for="item, index in playList.splice(0,5)" :key="index" class="mx-2 my-2 cursor-pointer ">
        <div class="w-32 h-32">
          <img :src="item.picUrl" class="w-full h-full object-cover rounded-lg">
        </div>
        <div class="w-32 pic-item-text text-gray-700 hover:text-gray-900">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Banner, BannerRes } from '@/api/types';
import { http } from '@/utils/http';
import { onMounted, ref, defineEmits, computed, watch } from 'vue';
import { Right } from '@icon-park/vue-next';
import { useUserInfoStore } from '@/store';
import pinia from '@/store/store';

const playList = ref<any[]>([]);
const userInfoStore = useUserInfoStore(pinia);
const banners = ref<Banner[]>();


const isLogin = computed(() => userInfoStore.isLogin);
const emit = defineEmits(['moveTo']);

// 获取轮播图数据
const getBanner = async () => {
  const res = await http.get("/banner?type=0") as BannerRes;
  banners.value = res.banners;
}

const getRecommendPlayList = async () => {
  const res:any = await http.get(`/recommend/resource`);
  playList.value = res.recommend;
  console.log(res);
}

// 获取每日推荐歌单
watch(isLogin, (isLogin) => {
  if (isLogin) {
    getRecommendPlayList();
  }
})


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

.pic-item-text{
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
  font-size: 14px;
}
</style>