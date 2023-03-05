import { reactive, ref } from 'vue';
import { useUserInfoStore } from '@/store';
import pinia from '@/store/store';
import http from '@/utils/http';
import { PlayList } from '@/api/types';
import { Cloudy, Like, Time } from '@icon-park/vue-next';

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

// 清空歌单
const clearPlayList = () => {
    playLists.splice(0, playLists.length)
    myPlayLists.splice(0, myPlayLists.length)
    collectPlayLists.splice(0, collectPlayLists.length)
}

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

export{
    asideItems,
    myMusicItems,
    myPlayLists,
    collectPlayLists,
    assignPlayList,
    clearPlayList,
}