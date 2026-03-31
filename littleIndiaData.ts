// Little India Tour Data
export interface TimelineItem {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  category: 'transport' | 'attraction' | 'food' | 'activity' | 'shopping';
  duration: string;
  cost?: string;
  tips?: string[];
  images?: string[];
}

export interface Attraction {
  id: string;
  name: string;
  nameEn: string;
  address: string;
  category: 'art' | 'food' | 'temple' | 'shopping' | 'culture';
  description: string;
  highlights: string[];
  openingHours?: string;
  tips: string[];
  coordinates: { lat: number; lng: number };
  image?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  type: string;
  address: string;
  rating: string;
  specialties: string[];
  averageCost: string;
  recommendations: Array<{ name: string; price: string; description: string }>;
  coordinates: { lat: number; lng: number };
  image?: string;
}

export const timeline: TimelineItem[] = [
  {
    id: 'breakfast',
    time: '08:00 - 08:30',
    title: '飯店早餐 & 準備出發',
    description: '享用飯店早餐或簡單早點，準備帶上相機、防曬用品、輕便背包',
    location: '濱海灣金沙酒店',
    category: 'activity',
    duration: '30 分鐘',
  },
  {
    id: 'transport-to-littleindia',
    time: '08:30 - 09:00',
    title: '前往小印度站',
    description: '從金沙酒店步行至濱海灣站，搭乘濱海市區線前往小印度站',
    location: '濱海灣站 → 小印度站',
    category: 'transport',
    duration: '30 分鐘',
    cost: '2-3 新幣',
    tips: ['使用 EZ-Link 或 NETS 卡', '從 C 出口出站'],
  },
  {
    id: 'art-area',
    time: '09:00 - 09:30',
    title: '小印度藝術區 & 陳東齡故居拍照',
    description: '欣賞五彩繽紛的建築和壁畫，拍照留念',
    location: '水牛巷 (Kerbau Road)',
    category: 'attraction',
    duration: '30 分鐘',
    tips: ['白天光線最好', '是 IG 打卡聖地', '內部不開放'],
  },
  {
    id: 'tekka-breakfast',
    time: '09:30 - 10:30',
    title: '竹腳中心早午餐',
    description: '品嚐道地印度美食，觀察當地人的飲食文化',
    location: '竹腳中心 (Tekka Centre)',
    category: 'food',
    duration: '1 小時',
    cost: '8-15 新幣',
    tips: ['排隊通常 5-10 分鐘', '二樓有印度服飾', '帶現金方便支付'],
  },
  {
    id: 'henna',
    time: '10:30 - 11:30',
    title: '小印度拱廊 & Henna 彩繪體驗',
    description: '體驗天然指甲花彩繪，購買印度香皂和飾品',
    location: '小印度拱廊 (Little India Arcade)',
    category: 'activity',
    duration: '1 小時',
    cost: '10-15 新幣',
    tips: ['Henna 可維持 1-2 週', '現場畫師自由發揮', '購買 Medimix 印度香皂'],
  },
  {
    id: 'campbell-lane',
    time: '11:30 - 12:00',
    title: '甘貝爾巷 & 印度花攤',
    description: '欣賞色彩繽紛的花攤，購買印度花圈和首飾',
    location: '甘貝爾巷 (Campbell Lane)',
    category: 'shopping',
    duration: '30 分鐘',
    cost: '3-5 新幣',
    tips: ['淡淡花香', '色彩繽紛', '當地人採購生活用品'],
  },
  {
    id: 'temple',
    time: '13:00 - 13:30',
    title: '維拉瑪卡里亞曼興都廟參觀',
    description: '欣賞新加坡最古老的印度廟宇，了解印度宗教文化',
    location: '維拉瑪卡里亞曼興都廟',
    category: 'attraction',
    duration: '30 分鐘',
    tips: ['進入需脫鞋', '進出前搖鈴表示尊重', '中午 12:00-16:00 不開放'],
  },
  {
    id: 'muthu-curry',
    time: '13:30 - 14:30',
    title: "Muthu's Curry 午餐（米其林推薦）",
    description: '享受正宗南印度咖哩魚頭，體驗 50 年老字號美食',
    location: "Muthu's Curry",
    category: 'food',
    duration: '1 小時',
    cost: '25-30 新幣',
    tips: ['2018、2019、2021 年米其林推薦', '開放式廚房', '高科技點餐系統'],
  },
  {
    id: 'shopping',
    time: '14:30 - 16:00',
    title: '自由活動 & 購物',
    description: '選擇返回小印度拱廊購物、慕斯達發中心血拼或飯店休息',
    location: '小印度區',
    category: 'activity',
    duration: '1.5 小時',
    tips: ['慕斯達發中心 24 小時營業', '可採購紀念品和伴手禮'],
  },
  {
    id: 'return',
    time: '16:00 - 18:00',
    title: '返回飯店 & 休息',
    description: '搭乘地鐵返回金沙酒店，整理購物戰利品',
    location: '小印度站 → 濱海灣站',
    category: 'transport',
    duration: '2 小時',
    cost: '2-3 新幣',
    tips: ['約 20-30 分鐘車程', '在飯店休息和整理'],
  },
];

export const attractions: Attraction[] = [
  {
    id: 'tan-teng-niah',
    name: '陳東齡故居',
    nameEn: 'Former House of Tan Teng Niah',
    address: '水牛巷 (Kerbau Road)',
    category: 'art',
    description: '建於 1900 年的華人別墅，五彩繽紛的建築和壁畫，是 IG 打卡聖地',
    highlights: ['五彩繽紛建築', '色彩鮮豔壁畫', 'IG 打卡聖地', '建築歷史悠久'],
    tips: ['白天光線最好', '內部不開放，只能外觀拍照', '適合拍照留念'],
    coordinates: { lat: 1.3068, lng: 103.8504 },
  },
  {
    id: 'tekka-centre',
    name: '竹腳中心',
    nameEn: 'Tekka Centre',
    address: 'Bukit Timah Rd',
    category: 'food',
    description: '一樓各式印度小吃、咖哩、拉茶、香米、捲餅；二樓印度服飾、紗麗、飾品',
    highlights: ['平價美食', '道地印度風味', '二樓印度服飾', '當地人聚集地'],
    openingHours: '06:30 ~ 21:00',
    tips: ['排隊通常 5-10 分鐘', '帶現金方便支付', '二樓瀏覽印度服飾'],
    coordinates: { lat: 1.3082, lng: 103.8485 },
  },
  {
    id: 'little-india-arcade',
    name: '小印度拱廊',
    nameEn: 'Little India Arcade',
    address: '48 Serangoon Road',
    category: 'shopping',
    description: '印度文化主要商圈，傳統紗麗、印度風家具、金飾、宗教用品、Henna 彩繪',
    highlights: ['傳統紗麗', 'Henna 彩繪體驗', 'Medimix 印度香皂', '印度風家具'],
    openingHours: '09:00 ~ 22:00',
    tips: ['Henna 可維持 1-2 週', '現場畫師自由發揮', '購買 Medimix 印度香皂'],
    coordinates: { lat: 1.3076, lng: 103.8508 },
  },
  {
    id: 'campbell-lane',
    name: '甘貝爾巷',
    nameEn: 'Campbell Lane',
    address: 'Campbell Lane',
    category: 'shopping',
    description: '短巷，當地人採購生活用品，沙麗、印度首飾、工藝品、祭祀用品、印度花攤',
    highlights: ['印度花攤', '色彩繽紛', '淡淡花香', '當地人採購地'],
    tips: ['購買印度花圈約 3-5 新幣', '欣賞色彩繽紛的花攤', '購買印度手飾和首飾'],
    coordinates: { lat: 1.3068, lng: 103.8515 },
  },
  {
    id: 'sri-veeramakaliamman',
    name: '維拉瑪卡里亞曼興都廟',
    nameEn: 'Sri Veeramakaliamman Temple',
    address: '141 Serangoon Rd',
    category: 'temple',
    description: '新加坡最古老的印度廟宇之一，供奉 Kali 女神，象徵力量和勇氣',
    highlights: ['新加坡最古老印度廟宇', '色彩鮮豔建築', '刻工細緻', '宗教文化中心'],
    openingHours: '05:30 ~ 12:30，16:00 ~ 20:30',
    tips: ['進入需脫鞋', '進出前搖鈴表示尊重', '中午 12:00-16:00 不開放', '尊重宗教儀式'],
    coordinates: { lat: 1.3066, lng: 103.8517 },
  },
  {
    id: 'serangoon-road',
    name: '實龍崗路',
    nameEn: 'Serangoon Road',
    address: 'Serangoon Road',
    category: 'shopping',
    description: '小印度最熱鬧的主要幹道，兩旁金飾店眾多，五彩繽紛的建築和壁畫',
    highlights: ['金飾店眾多', '五彩繽紛建築', '主要購物街', '街景拍照'],
    tips: ['欣賞金飾店的精美設計', '拍照留念', '購買紀念品'],
    coordinates: { lat: 1.3072, lng: 103.8510 },
  },
  {
    id: 'indian-heritage',
    name: '新加坡印族文化館',
    nameEn: 'Indian Heritage Centre',
    address: '甘貝爾巷左前方（藍色玻璃建築）',
    category: 'culture',
    description: '印度文化遺產中心，展示印度移民歷史和文化，介紹紗麗穿法和演變歷史',
    highlights: ['印度移民歷史', '文化展示', '紗麗穿法介紹', '藍色玻璃建築'],
    openingHours: '通常 10:00 ~ 18:00',
    tips: ['對印度文化有興趣的家庭成員', '室內冷氣，適合炎熱天氣', '傍晚時分建築耀眼迷人'],
    coordinates: { lat: 1.3068, lng: 103.8520 },
  },
];

export const restaurants: Restaurant[] = [
  {
    id: 'muthu-curry',
    name: "Muthu's Curry",
    type: '南印度咖哩',
    address: '小印度站 C 出口步行約 8 分鐘',
    rating: '米其林推薦 (2018, 2019, 2021)',
    specialties: ['咖哩魚頭', '咖哩羊肉', 'Briyani 飯'],
    averageCost: '25-30 新幣',
    recommendations: [
      {
        name: '招牌咖哩魚頭',
        price: '24 新幣 (2-4 人份)',
        description: '用 9 種以上香料調配，肉質新鮮香嫩，搭配羊角豆、黃梨、香菜、茄子',
      },
      {
        name: '咖哩羊肉',
        price: '13 新幣',
        description: '味道濃郁，羊肉肉質鮮美，完全沒有騷味，較辣',
      },
      {
        name: 'Briyani 飯',
        price: '4 新幣',
        description: '長形米飯，香氣十足',
      },
      {
        name: '油炸脆餅 (Papadum)',
        price: '免費或 1-2 新幣',
        description: '香脆可口，開胃小食',
      },
    ],
    coordinates: { lat: 1.3074, lng: 103.8512 },
  },
  {
    id: 'ar-rahman',
    name: 'Ar Rahman Royal Prata',
    type: '印度煎餅',
    address: '竹腳中心',
    rating: '當地人推薦',
    specialties: ['印度煎餅 (Prata)', 'Murtabak'],
    averageCost: '3-5 新幣',
    recommendations: [
      {
        name: '印度煎餅 (Prata)',
        price: '3-5 新幣',
        description: '香脆可口，搭配咖哩醬',
      },
      {
        name: 'Murtabak',
        price: '4-6 新幣',
        description: '印度餡料煎餅（羊肉或雞肉）',
      },
    ],
    coordinates: { lat: 1.3082, lng: 103.8485 },
  },
  {
    id: 'zham-zham',
    name: 'Zham Zham Muslim Food',
    type: '印度美食',
    address: '竹腳中心',
    rating: '當地人推薦',
    specialties: ['印度煎餅配羊肉咖哩', '印度拉茶'],
    averageCost: '5-7 新幣',
    recommendations: [
      {
        name: '印度煎餅配羊肉咖哩',
        price: '5-7 新幣',
        description: '香脆煎餅搭配濃郁羊肉咖哩',
      },
      {
        name: '印度拉茶 (Teh Tarik)',
        price: '1.5-2 新幣',
        description: '傳統印度奶茶，香濃可口',
      },
    ],
    coordinates: { lat: 1.3082, lng: 103.8485 },
  },
];

export const budgetBreakdown = [
  { item: '地鐵車資（往返）', cost: '4-6 新幣', note: '使用 EZ-Link 卡' },
  { item: '竹腳中心早午餐', cost: '8-15 新幣', note: '平價美食' },
  { item: 'Henna 彩繪（可選）', cost: '10-15 新幣', note: '整隻手 15 新幣' },
  { item: '印度花圈購買', cost: '3-5 新幣', note: '可選' },
  { item: '印族文化館門票（可選）', cost: '10 新幣', note: '成人票' },
  { item: "Muthu's Curry 午餐", cost: '25-30 新幣', note: '米其林推薦' },
  { item: '購物和紀念品', cost: '20-50 新幣', note: '依個人購買' },
];

export const tips = {
  timeManagement: [
    '維拉瑪卡里亞曼興都廟中午 12:00-16:00 不開放',
    '如果 13:00 後廟宇已關閉，改為其他活動',
    '建議提前規劃，避免時間浪費',
  ],
  dining: [
    '竹腳中心排隊通常 5-10 分鐘',
    "Muthu's Curry 午餐時間人多，建議提前到達",
    '帶現金方便支付小攤販（部分攤位不接受卡）',
    '印度咖哩可能較辣，不能吃辣者可告知店員',
  ],
  shopping: [
    '小印度拱廊商家眾多，可多比價',
    'Henna 彩繪可維持 1-2 週',
    '購買印度香皂、香料等伴手禮',
    '慕斯達發中心 24 小時營業',
  ],
  safety: [
    '新加坡治安良好，小印度區安全',
    '進入廟宇需脫鞋，進出前搖鈴',
    '尊重宗教儀式和當地文化',
    '拍照時尊重他人祈禱',
    '著裝得體',
  ],
};
