<template>
    <el-scrollbar>
        <div class="flex-row p-2">
            <div class="w-full py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                发现音乐
            </div>
            <div class="w-full py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                博客
            </div>
            <div class="w-full py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                视频
            </div>
            <div class="w-full py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                直播
            </div>
            <div class="w-full py-2 rounded-lg pl-2 text-gray-400 text-sm cursor-default">
                我的音乐
            </div>
            <div class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="Like" :size="16" fill="#000"></icon-park>
                <div>我喜欢的音乐</div>
            </div>
            <div class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="Time" :size="16" fill="#000"></icon-park>
                <div>最近播放</div>
            </div>
            <div class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="PersonalCollection" :size="16" fill="#000"></icon-park>
                <div>我的收藏</div>
            </div>
            <div class="w-full py-2 rounded-lg pl-2 text-gray-400 text-sm cursor-default">
                创建的歌单
            </div>
            <div v-for="playList in myPlayLists" class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>{{ playList.name }}</div>
            </div>
            <div class="w-full py-2 rounded-lg pl-2 text-gray-400 text-sm cursor-default">
                收藏的歌单
            </div>
            <div v-for="playList in collectPlayLists" class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>{{ playList.name }}</div>
            </div>
        </div>
    </el-scrollbar>
</template>

<script setup lang="ts">
import {Time,Like,PersonalCollection,MusicList} from '@icon-park/vue-next';
import { reactive, ref, watch } from 'vue';
import { useUserInfoStore } from '@/store';
import pinia from '@/store/store';
import http from '@/utils/http';
import { PlayList } from '@/api/types';

const userInfoStore = useUserInfoStore(pinia);
// 所有歌单
const playLists = reactive<PlayList[]>([])
// 喜欢的音乐
const likePlayList = ref<PlayList>()
// 自己创建的歌单
const myPlayLists = reactive<PlayList[]>([])
// 收藏的歌单
const collectPlayLists = reactive<PlayList[]>([])

// 获取歌单
const getPlayList = async(uid:number,limit:number,offset:number)=>{
    const res = await http.get(`/user/playlist?uid=${uid}&limit=${limit}&offset=${offset}`) as any
    for (let i = 0; i < res.playlist.length; i++) {
        playLists.push(res.playlist[i])
    }
    if (res.more){
        await getPlayList(uid,limit,offset+limit)
    }
}

// 分配歌单
const assignPlayList = async () => {
    const uid = userInfoStore.getUserInfo.userId
    await getPlayList(uid, 2, 0)
    for (let i = 1; i < playLists.length; i++) {
        if (playLists[i].creator.userId === uid) {
            myPlayLists.push(playLists[i])
        } else {
            collectPlayLists.push(playLists[i])
        }
    }
    likePlayList.value = myPlayLists[0]
}

// 监测pinia中的登陆状态，如果登录则获取歌单
watch(() => userInfoStore.isLogin, (isLogin) => {
    if (isLogin) {
        assignPlayList()
    }
})


</script>

<style scoped>

.i-icon{
    margin-right: 0.5rem;
}
</style>