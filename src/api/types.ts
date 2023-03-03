interface userProfile {
    userId: number;
    userType: number;
    nickname: string;
    avatarImgId: AvatarImgId;
    avatarUrl: string;
    backgroundImgId: AvatarImgId;
    backgroundUrl: string;
    signature: string;
    createTime: number;
    userName: string;
    accountType: number;
    shortUserName: string;
    birthday: number;
    authority: number;
    gender: number;
    accountStatus: number;
    province: number;
    city: number;
    authStatus: number;
    description?: any;
    detailDescription?: any;
    defaultAvatar: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    locationStatus: number;
    vipType: number;
    followed: boolean;
    mutual: boolean;
    authenticated: boolean;
    lastLoginTime: number;
    lastLoginIP: string;
    remarkName?: any;
    viptypeVersion: number;
    authenticationTypes: number;
    avatarDetail?: any;
    anchor: boolean;
  }
  
  interface AvatarImgId {
    s: number;
    e: number;
    c: number[];
  }

  interface PlayList {
    subscribers: any[];
    subscribed: boolean;
    creator: Creator;
    artists?: any;
    tracks?: any;
    updateFrequency?: any;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    titleImageUrl?: any;
    englishTitle?: any;
    opRecommend: boolean;
    recommendInfo?: any;
    subscribedCount: number;
    cloudTrackCount: number;
    userId: number;
    totalDuration: number;
    coverImgId: AvatarImgId;
    privacy: number;
    trackUpdateTime: number;
    trackCount: number;
    updateTime: number;
    commentThreadId: string;
    coverImgUrl: string;
    specialType: number;
    anonimous: boolean;
    createTime: number;
    highQuality: boolean;
    newImported: boolean;
    trackNumberUpdateTime: number;
    playCount: number;
    adType: number;
    description?: any;
    tags: any[];
    ordered: boolean;
    status: number;
    name: string;
    id: number;
    coverImgId_str: string;
    sharedUsers?: any;
    shareStatus?: any;
    copied: boolean;
  }
  
  interface Creator {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: AvatarImgId;
    backgroundImgId: AvatarImgId;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    vipType: number;
    remarkName?: any;
    authenticationTypes: number;
    avatarDetail?: any;
    anchor: boolean;
    backgroundImgIdStr: string;
    avatarImgIdStr: string;
    avatarImgId_str: string;
  }
  
  interface AvatarImgId {
    s: number;
    e: number;
    c: number[];
  }


  export type{
    userProfile,
    PlayList,
  }