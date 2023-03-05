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


  interface UserDetail {
    level: number;
    listenSongs: number;
    userPoint: UserPoint;
    mobileSign: boolean;
    pcSign: boolean;
    profile: Profile;
    peopleCanSeeMyPlayRecord: boolean;
    bindings: Binding[];
    adValid: boolean;
    code: number;
    newUser: boolean;
    recallUser: boolean;
    createTime: number;
    createDays: number;
    profileVillageInfo: ProfileVillageInfo;
  }
  
  interface ProfileVillageInfo {
    title: string;
    imageUrl: string;
    targetUrl: string;
  }
  
  interface Binding {
    url: string;
    expired: boolean;
    userId: number;
    expiresIn: number;
    refreshTime: number;
    bindingTime: number;
    tokenJsonStr?: any;
    id: number;
    type: number;
  }
  
  interface Profile {
    privacyItemUnlimit: PrivacyItemUnlimit;
    avatarDetail?: any;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    description: string;
    userId: number;
    accountStatus: number;
    vipType: number;
    userType: number;
    createTime: number;
    avatarUrl: string;
    mutual: boolean;
    followed: boolean;
    remarkName?: any;
    authStatus: number;
    detailDescription: string;
    experts: Experts;
    expertTags?: any;
    djStatus: number;
    province: number;
    city: number;
    defaultAvatar: boolean;
    backgroundImgId: BackgroundImgId;
    backgroundUrl: string;
    avatarImgId: BackgroundImgId;
    birthday: number;
    gender: number;
    nickname: string;
    signature: string;
    authority: number;
    followeds: number;
    follows: number;
    blacklist: boolean;
    eventCount: number;
    allSubscribedCount: number;
    playlistBeSubscribedCount: number;
    avatarImgId_str: string;
    followTime?: any;
    followMe: boolean;
    artistIdentity: any[];
    cCount: number;
    inBlacklist: boolean;
    sDJPCount: number;
    playlistCount: number;
    sCount: number;
    newFollows: number;
  }
  
  interface BackgroundImgId {
    s: number;
    e: number;
    c: number[];
  }
  
  interface Experts {
  }
  
  interface PrivacyItemUnlimit {
    area: boolean;
    college: boolean;
    gender: boolean;
    age: boolean;
    villageAge: boolean;
  }
  
  interface UserPoint {
    userId: number;
    balance: number;
    updateTime: number;
    version: number;
    status: number;
    blockBalance: number;
  }

  export type{
    userProfile,
    PlayList,
    UserDetail
  }