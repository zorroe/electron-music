<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="个性推荐" name="recommend">
                <div>
                    <Recommend @moveTo="moveTo" />
                </div>
            </el-tab-pane>
            <el-tab-pane label="歌单" name="playList">
                <div>歌单</div>
            </el-tab-pane>
            <el-tab-pane label="排行榜" name="rankList">
                <div>排行榜</div>
            </el-tab-pane>
            <el-tab-pane label="歌手" name="singer">
                <div>歌手</div>
            </el-tab-pane>
            <el-tab-pane label="最新音乐" name="newsetMusic">
                <div>最新音乐</div>
            </el-tab-pane>
        </el-tabs>
</template>

<script setup lang="ts">
import { TabsPaneContext } from 'element-plus';
import { ref } from 'vue';
import Recommend from '@/views/Recommend.vue';

// 选中的tab
const activeName = ref<string>('recommend')

const moveTo = (tabName: string) => {
    activeName.value = tabName
}

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style scoped></style>