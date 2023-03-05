<template>
    <el-scrollbar>
        <div class="flex-row">
            <div class="flex">
                <img :src="avatar" class="w-48 rounded-full">
                <div class="flex-row justify-center">
                    <div>
                        <div class="flex-row items-baseline">
                            <div class="text-2xl font-bold my-2 cursor-default">{{ userName }}</div>
                            <div class="flex items-baseline">
                                <el-tag class="ml-2 cursor-default" round type="info">Lv{{ level }}</el-tag>
                                <el-tag v-if="gender === 1" class="ml-2" color="#bff3ff" round>
                                    <icon-park :icon="Male" fill="#409eff"></icon-park>
                                </el-tag>
                                <el-tag v-if="gender === 0" class="ml-2" color="#f57c7c" round>
                                    <icon-park :icon="Female" fill="#ec4141"></icon-park>
                                </el-tag>
                            </div>
                        </div>
                        <div class="flex my-4">
                            <div class="tag flex-row cursor-pointer">
                                <div class="text-center text-xl">{{ eventCount }}</div>
                                <div class="text-center">动态</div>
                            </div>
                            <div class="tag flex-row cursor-pointer">
                                <div class="text-center text-xl">{{ follow }}</div>
                                <div class="text-center">关注</div>
                            </div>
                            <div class="tag flex-row cursor-pointer">
                                <div class="text-center text-xl">{{ fans }}</div>
                                <div class="text-center">粉丝</div>
                            </div>
                        </div>
                        <div class="flex cursor-default">
                            <div class="text-center text-sm">个人介绍：</div>
                            <div class="text-left text-sm text-gray-400">{{ signature }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="创建的歌单" name="createdPlayList">
                    <div class="flex flex-wrap">
                        <div v-for="playList in myPlayLists" @click="routeTo(`/playlist/${playList.id}`)" class="flex-row mx-2 my-2 cursor-pointer">
                            <img :src="playList.coverImgUrl" class="w-32 h-32">
                            <div class="text-xs w-32 text-gray-600">{{ playList.name }}</div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="收藏的歌单" name="staredPlayList">
                    <div class="flex flex-wrap">
                        <div v-for="playList in collectPlayLists" @click="routeTo(`/playlist/${playList.id}`)" class="flex-row mx-2 my-2">
                            <img :src="playList.coverImgUrl" class="w-32 h-32">
                            <div class="text-xs w-32">{{ playList.name }}</div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-scrollbar>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import http from "@/utils/http";
import pinia from "@/store/store";
import { Male, Female } from '@icon-park/vue-next';
import { computed, onMounted, ref } from "vue";
import { useUserInfoStore } from "@/store";
import { UserDetail } from "@/api/types";
import type { TabsPaneContext } from 'element-plus'
import { myPlayLists, collectPlayLists, assignPlayList, clearPlayList, asideItems, myMusicItems } from '@/api/useAside';
import { routeTo } from '@/api';

const userInfoStore = useUserInfoStore(pinia);
const avatar = computed(() => userInfoStore.getUserInfo.avatarUrl);
const userName = computed(() => userInfoStore.getUserInfo.nickname);
const eventCount = ref<number>();
const follow = ref<number>();
const fans = ref<number>();
const gender = ref<number>();
const signature = ref<string>();
const level = ref<number>();
const activeName = ref<string>('createdPlayList');

onMounted(() => {
    const route = useRoute();
    const userId = route.params.id as string;
    getUserDetail(userId);
})

const getUserDetail = async (userId: string) => {
    const res = await http.get(`/user/detail?uid=${userId}`) as UserDetail;
    eventCount.value = res.profile.eventCount;
    follow.value = res.profile.follows;
    fans.value = res.profile.followeds;
    gender.value = res.profile.gender;
    signature.value = res.profile.signature;
    level.value = res.level;
}

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

</script>

<style scoped>
.tag {
    font-size: 12px;
    padding: 5px 10px;
    width: 100px;
}

.tag:not(:last-child) {
    border-right: 1px solid #e2e2e2;
}
</style>