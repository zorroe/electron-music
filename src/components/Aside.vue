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
            <div class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>歌单1</div>
            </div>
            <div class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>歌单2</div>
            </div>
            <div class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>歌单3</div>
            </div>
            <div class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>歌单4</div>
            </div>
            <div class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>歌单5</div>
            </div>
            <div class="w-full py-2 rounded-lg pl-2 text-gray-400 text-sm cursor-default">
                收藏的歌单
            </div>
            <div class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>歌单6</div>
            </div>
            <div class="flex w-full items-center py-2 rounded-lg pl-2 hover:bg-slate-200 cursor-default">
                <icon-park :icon="MusicList" :size="16" fill="#000"></icon-park>
                <div>歌单7</div>
            </div>
        </div>
    </el-scrollbar>
</template>

<script setup lang="ts">
import {Time,Like,PersonalCollection,MusicList} from '@icon-park/vue-next';


</script>

<style scoped>

.i-icon{
    margin-right: 0.5rem;
}
</style>