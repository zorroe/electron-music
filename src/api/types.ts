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

  interface PlayListDetail {
    code: number;
    relatedVideos?: any;
    playlist: Playlist;
    urls?: any;
    privileges: Privilege[];
    sharedPrivilege?: any;
    resEntrance?: any;
    fromUsers?: any;
    fromUserCount: number;
    songFromUsers?: any;
  }
  
  interface Privilege {
    id: number;
    fee: number;
    payed: number;
    realPayed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    pc?: any;
    toast: boolean;
    flag: number;
    paidBigBang: boolean;
    preSell: boolean;
    playMaxbr: number;
    downloadMaxbr: number;
    maxBrLevel: string;
    playMaxBrLevel: string;
    downloadMaxBrLevel: string;
    plLevel: string;
    dlLevel: string;
    flLevel: string;
    rscl?: any;
    freeTrialPrivilege: FreeTrialPrivilege;
    chargeInfoList: ChargeInfoList[];
  }
  
  interface ChargeInfoList {
    rate: number;
    chargeUrl?: any;
    chargeMessage?: any;
    chargeType: number;
  }
  
  interface FreeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
    listenType?: any;
  }
  
  interface Playlist {
    id: number;
    name: string;
    coverImgId: CoverImgId;
    coverImgUrl: string;
    coverImgId_str: string;
    adType: number;
    userId: number;
    createTime: number;
    status: number;
    opRecommend: boolean;
    highQuality: boolean;
    newImported: boolean;
    updateTime: number;
    trackCount: number;
    specialType: number;
    privacy: number;
    trackUpdateTime: number;
    commentThreadId: string;
    playCount: number;
    trackNumberUpdateTime: number;
    subscribedCount: number;
    cloudTrackCount: number;
    ordered: boolean;
    description?: any;
    tags: any[];
    updateFrequency?: any;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    titleImageUrl?: any;
    englishTitle?: any;
    officialPlaylistType?: any;
    copied: boolean;
    relateResType?: any;
    subscribers: any[];
    subscribed: boolean;
    creator: Creator;
    tracks: Track[];
    videoIds?: any;
    videos?: any;
    trackIds: TrackId[];
    bannedTrackIds?: any;
    shareCount: number;
    commentCount: number;
    remixVideo?: any;
    sharedUsers?: any;
    historySharedUsers?: any;
    gradeStatus: string;
    score?: any;
    algTags?: any;
  }
  
  interface TrackId {
    id: number;
    v: number;
    t: number;
    at: number;
    alg?: any;
    uid: number;
    rcmdReason: string;
    sc?: any;
    f?: any;
    sr?: any;
  }
  
  interface Track {
    name: string;
    id: number;
    pst: number;
    t: number;
    ar: Ar[];
    alia: any[];
    pop: number;
    st: number;
    rt?: string;
    fee: number;
    v: number;
    crbt?: any;
    cf: string;
    al: Al;
    dt: number;
    h: H;
    m: H;
    l: H;
    sq: H;
    hr?: H;
    a?: any;
    cd: string;
    no: number;
    rtUrl?: any;
    ftype: number;
    rtUrls: any[];
    djId: number;
    copyright: number;
    s_id: number;
    mark: number;
    originCoverType: number;
    originSongSimpleData?: OriginSongSimpleDatum;
    tagPicList?: any;
    resourceState: boolean;
    version: number;
    songJumpInfo?: any;
    entertainmentTags?: any;
    single: number;
    noCopyrightRcmd?: any;
    rtype: number;
    rurl?: any;
    mst: number;
    cp: number;
    mv: number;
    publishTime: number;
  }
  
  interface OriginSongSimpleDatum {
    songId: number;
    name: string;
    artists: Artist[];
    albumMeta: Artist;
  }
  
  interface Artist {
    id: number;
    name: string;
  }
  
  interface H {
    br?: number;
    fid?: number;
    size?: number;
    vd?: number;
  }
  
  interface Al {
    id?: number;
    name?: string;
    picUrl?: string;
    tns?: any[];
    pic_str?: string;
    pic?: CoverImgId;
  }
  
  interface Ar {
    id: number;
    name: string;
    tns: any[];
    alias: any[];
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
    avatarImgId: CoverImgId;
    backgroundImgId: CoverImgId;
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
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    anchor: boolean;
    avatarImgId_str: string;
  }
  
  interface CoverImgId {
    s: number;
    e: number;
    c: number[];
  }

  interface BannerRes {
    banners: Banner[];
    code: number;
  }
  
  interface Banner {
    imageUrl: string;
    targetId: number;
    adid?: any;
    targetType: number;
    titleColor: string;
    typeTitle: string;
    url?: string;
    exclusive: boolean;
    monitorImpress?: any;
    monitorClick?: any;
    monitorType?: any;
    monitorImpressList?: any;
    monitorClickList?: any;
    monitorBlackList?: any;
    extMonitor?: any;
    extMonitorInfo?: any;
    adSource?: any;
    adLocation?: any;
    adDispatchJson?: any;
    encodeId: string;
    program?: any;
    event?: any;
    video?: any;
    song?: any;
    scm: string;
    bannerBizType: string;
  }

  export type{
    userProfile,
    PlayList,
    UserDetail,
    PlayListDetail,
    Banner,
    BannerRes
  }