<template>
    <div class="flex-row">
        <div class="flex">
            <img :src="playListDetail?.playlist.coverImgUrl" class="w-32 h-32 rounded">
            <div class="flex flex-col ml-4 justify-end">
                <div class="flex items-center my-1">
                    <el-tag class="mx-1" type="danger" effect="plain">歌单</el-tag>
                    <div class="text-xl font-bold cursor-default">{{ playListDetail?.playlist.name }}</div>
                </div>
                <div class="flex items-center my-1">
                    <img class="w-6 h-6 rounded-full mx-1" :src="playListDetail?.playlist.creator.avatarUrl">
                    <div class="text-xs cursor-pointer text-sky-600 mx-1"
                        @click="routeTo(`/user/${playListDetail?.playlist.creator.userId}`)">{{
                            playListDetail?.playlist.creator.nickname }}</div>
                    <div class="text-xs text-gray-400 mx-1 cursor-default">{{ playListCreateTime }}创建</div>
                </div>
                <div class="flex items-center my-1">
                    <el-button :icon="Play" round class="mx-1">播放全部</el-button>
                    <el-button :icon="Like" round class="mx-1">收藏</el-button>
                    <el-button :icon="Share" round class="mx-1">分享</el-button>
                    <el-button :icon="Download" round class="mx-1">下载全部</el-button>
                </div>
                <div class="flex items-center my-1">
                    <div class="text-sm align-text-bottom mx-1">
                        歌曲：{{ playListDetail?.playlist.trackCount }}
                    </div>
                    <div class="text-sm align-text-bottom mx-1">
                        播放：{{ playListDetail?.playlist.playCount }}
                    </div>
                </div>
            </div>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="歌曲列表" name="songList">
                    <div>歌曲列表</div>
                </el-tab-pane>
                <el-tab-pane :label="`评论(${commentCount})`" name="comment">
                    <div>评论</div>
                </el-tab-pane>
                <el-tab-pane label="收藏者" name="collectUsers">
                    <div>收藏者</div>
                </el-tab-pane>
            </el-tabs>
    </div>
</template>

<script setup lang="ts">
import http from '@/utils/http';
import { Play, Like, Share, Download } from '@icon-park/vue-next';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { PlayListDetail } from '@/api/types';
import { routeTo } from '@/api';
import dayjs from 'dayjs';
import { TabsPaneContext } from 'element-plus';

const activeName = ref<string>('songList')
const playListDetail = ref<PlayListDetail>();
const playListCreateTime = ref<string>()
// 评论数
const commentCount = ref<number>()

// 获取歌单详情
const getPlayListDetail = async () => {
    const route = useRoute();
    // 获取传入的路径参数
    const id = route.params.id as string;
    const res = await http.get(`/playlist/detail?id=${id}`) as PlayListDetail;
    playListDetail.value = res
    commentCount.value = res.playlist.commentCount
    // 将歌单创建时间转换为年-月-日格式
    playListCreateTime.value = dayjs(res.playlist.createTime).format('YYYY-MM-DD')
}

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

onMounted(() => {
    getPlayListDetail();
})

</script>

<style scoped></style>