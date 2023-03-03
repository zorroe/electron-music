<template>
    <el-scrollbar>
        <div class="flex-row px-3">
            <div v-for="(item,index) in asideItems" :key="index" class="aside-item">
                {{ item.name }}
            </div>
            <div class="aside-title">
                我的音乐
            </div>
            <div v-for="(item,index) in myMusicItems" :key="index" class="aside-item">
                <icon-park :icon="item.icon" :size="16" fill="#000"></icon-park>
                <div>{{ item.name }}</div>
            </div>
            <div class="aside-title">
                创建的歌单
            </div>
            <div v-for="playList in myPlayLists" class="aside-item">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>{{ playList.name }}</div>
            </div>
            <div class="aside-title">
                收藏的歌单
            </div>
            <div v-for="playList in collectPlayLists" class="aside-item">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>{{ playList.name }}</div>
            </div>
        </div>
    </el-scrollbar>
</template>

<script setup lang="ts">
import {Time,Like,Cloudy,MusicList} from '@icon-park/vue-next';
import { watch } from 'vue';
import { useUserInfoStore } from '@/store';
import pinia from '@/store/store';
import {myPlayLists,collectPlayLists,assignPlayList} from '@/api/useAside';
const userInfoStore = useUserInfoStore(pinia);

// 监测pinia中的登陆状态，如果登录则获取歌单
watch(() => userInfoStore.isLogin, (isLogin) => {
    if (isLogin) {
        assignPlayList()
    }
})

const asideItems = [
    {
        name: '发现音乐',
        to: '/discover',
    },
    {
        name: '播客',
        to: '/podcast',
    },
    {
        name: '视频',
        to: '/video',
    },
    {
        name: '直播',
        to: '/live',
    }
];

const myMusicItems = [
    {
        name: '我喜欢的音乐',
        to: '/myMusic/like',
        icon: Like,
    },
    {
        name: '最近播放',
        to: '/myMusic/recent',
        icon: Time,
    },
    {
        name: '我的音乐云盘',
        to: '/myMusic/cloud',
        icon: Cloudy,
    }
]

</script>

<style scoped>

.i-icon{
    margin-right: 0.5rem;
}

.aside-item{
    @apply flex w-full items-center text-sm py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-pointer truncate
}

.aside-title{
    @apply w-full py-2 rounded-lg pl-2 text-gray-400 text-xs cursor-default
}
</style>