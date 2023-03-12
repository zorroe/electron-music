interface NewestAlbum {
  data: Datum[];
  code: number;
}

interface Datum {
  starred: boolean;
  popularity: number;
  starredNum: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  mp3Url: string;
  rtUrls?: any;
  artists: Artist[];
  score: number;
  copyrightId: number;
  alias: string[];
  audition?: any;
  ringtone: string;
  disc: string;
  no: number;
  fee: number;
  hMusic: HMusic;
  mvid: number;
  ftype: number;
  rtype: number;
  rurl?: any;
  commentThreadId: string;
  copyFrom: string;
  mMusic: HMusic;
  lMusic: HMusic;
  album: Album;
  rtUrl?: any;
  crbt?: any;
  bMusic: HMusic;
  position: number;
  duration: number;
  status: number;
  name: string;
  id: number;
  exclusive: boolean;
  privilege: Privilege;
  transNames?: string[];
}

interface Privilege {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
}

interface Album {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  artists: Artist[];
  copyrightId: number;
  alias: string[];
  blurPicUrl: string;
  companyId: number;
  pic: Img1v1Id;
  publishTime: number;
  picUrl: string;
  commentThreadId: string;
  picId: Img1v1Id;
  artist: Artist;
  briefDesc: string;
  status: number;
  subType: string;
  description: string;
  company: string;
  tags: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
  transNames?: string[];
}

interface HMusic {
  sr: number;
  bitrate: number;
  volumeDelta: number;
  playTime: number;
  dfsId: number;
  name?: any;
  id: number;
  size: number;
  extension: string;
}

interface Artist {
  img1v1Id: Img1v1Id;
  topicPerson: number;
  alias: any[];
  albumSize: number;
  img1v1Url: string;
  picUrl: string;
  trans: string;
  picId: number;
  followed: boolean;
  briefDesc: string;
  musicSize: number;
  name: string;
  id: number;
  img1v1Id_str: string;
}

interface Img1v1Id {
  s: number;
  e: number;
  c: number[];
}

export type { NewestAlbum, Datum };
