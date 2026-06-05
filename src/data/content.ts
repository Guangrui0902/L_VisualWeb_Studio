import { demoImages } from "../visual/images";

export const brand = {
  name: "L VisualWeb Studio",
  nameZh: "L 视觉网络工作室",
  taglineEn: "Digital · Visual · Local",
  taglineZh: "数字 · 视觉 · 本地商业",
  serviceEn: "Sydney Local Business Digital Upgrade",
  serviceZh: "悉尼本地商业数字化升级",
  email: "lvisualweb.studio@gmail.com",
  wechat: "gary0902_",
  wechatNoteEn: "Please add a short note (business name or trade)",
  wechatNoteZh: "添加时请备注店名或行业",
  instagram: "l_visualweb_studio",
  instagramUrl: "https://www.instagram.com/l_visualweb_studio/",
  areasEn: "Greater Sydney · Inner West · Burwood · Chatswood",
  areasZh: "大悉尼 · 内西 · Burwood · Chatswood",
};

export const hero = {
  line1: "Digital presence",
  line2: "that books",
  zh: "把 Google 上的口碑，变成能直接预约的线上门面。",
  subEn:
    "A comprehensive service combining exquisite website development and refined aesthetics helps local businesses reach customers easily and efficiently.",
  subZh: "网站开发与审美感知复合型服务，助力本地商业轻松高效触达客户",
};

/** Hero 首屏三张特色卡 */
export const heroStats = [
  {
    v: "1-Stop",
    labelEn: "Tailored · full features · worry-free",
    labelZh: "量身定制 · 功能齐全 · 省心省力",
  },
  {
    v: "Value",
    labelEn: "Fixed packages · Starting at $880",
    labelZh: "一口价 · 优秀性价比",
  },
  {
    v: "Mobile+",
    labelEn: "Mobile-first · extend your shop online",
    labelZh: "手机端友好 · 生意线上延伸",
  },
];

export const pillars = [
  {
    titleEn: "Web Systems",
    titleZh: "官网开发",
    descEn: "Services, pricing, booking form — all in one place.",
    descZh: "服务项目、价格、联系方式，预约表单功能完备。",
  },
  {
    titleEn: "Visual Capture",
    titleZh: "悉尼上门实拍",
    descEn: "Visual upgrade for website and social media.",
    descZh: "提高数字化视觉效果，网站与社媒同步升级",
  },
  {
    titleEn: "Search Layer",
    titleZh: "Google 收录与优化",
    descEn: "Indexing, GBP, local SEO — found on Google, not just pretty.",
    descZh: "基础收录 + 可选地图商家优化，不只好看，更要被找到。",
  },
];

export const industries = [
  { en: "Home cleaning", zh: "家庭清洁" },
  { en: "Carpet care", zh: "地毯清洗" },
  { en: "Beauty & nails", zh: "美容美甲" },
  { en: "Removals", zh: "搬家" },
  { en: "Immigration", zh: "留学移民" },
];

export const process = [
  {
    step: "01",
    titleEn: "Deep discovery",
    titleZh: "深度畅聊",
    descEn:
      "Online or in person — we learn your business model, target customers, and what makes you different, so the site reflects your brand tone.",
    descZh:
      "线上或线下，深入了解商业模式、目标客户和独特优势，确保网站精准传达品牌调性。",
  },
  {
    step: "02",
    titleEn: "On-site shoot",
    titleZh: "上门拍摄",
    optional: true,
    descEn:
      "Optional by package — Sydney visit for website-ready visuals, one consistent look for your site and social posts.",
    descZh:
      "根据套餐可选：线下拍摄用于官网的素材，统一视觉主题，亦可用于社交媒体宣发。",
  },
  {
    step: "03",
    titleEn: "Build & refine",
    titleZh: "开发设计",
    descEn:
      "We build from your brief and photos — mobile and desktop, full feature set; revision rounds per your package (see pricing).",
    descZh:
      "根据前期沟通和拍摄为您搭建网站，手机电脑完美适配、功能齐全，按您的意见修改打磨（修改轮次见报价单）。",
  },
  {
    step: "04",
    titleEn: "Launch & SEO",
    titleZh: "上线与维护",
    descEn:
      "Domain and deployment end-to-end — handover plus indexing, Google Business Profile, and local SEO basics per tier.",
    descZh:
      "域名、部署一条龙服务；收录、地图商家与本地搜索等优化（范围见套餐）。",
  },
  {
    step: "05",
    titleEn: "Ongoing updates",
    titleZh: "持续更新",
    optional: true,
    descEn:
      "Optional Monthly Care — $59/mo (Flagship includes complimentary first-month trial $39).",
    descZh:
      "可选月度维护 $59/月（旗舰签约赠送首月 $39 试用，详见报价单）。",
  },
];

export type ProofSection = {
  labelEn: string;
  labelZh: string;
  titleEn: string;
  titleZh: string;
  h2Tint: "hot" | "pink";
  stats: { value: string; labelEn: string; labelZh: string }[];
  details: { en: string; zh: string }[];
};

/** 签约即享 — 左侧标题+三卡，右侧两条详情 */
export const proofSignUp: ProofSection = {
  labelEn: "Clear scope",
  labelZh: "",
  titleEn: "What you sign up for",
  titleZh: "签约即享 · 边界清晰",
  h2Tint: "hot",
  stats: [
    { value: "Mobile", labelEn: "First build", labelZh: "移动优先" },
    { value: "Local", labelEn: "convertion", labelZh: "本地转化" },
    { value: "3", labelEn: "Free changes", labelZh: "3 次免费大改" },
  ],
  details: [
    {
      en: "Fixed packages with listed deliverables — no surprise modules or scope creep mid-build.",
      zh: "一口价套餐，交付内容写在套餐内，无中途隐藏模块或加价扩项。",
    },
    {
      en: "40% deposit to start · remaining 60% after you approve the preview.",
      zh: "40% 定金开工，预览验收合格后付尾款。",
    },
  ],
};

/** 我们承诺 — 左侧两条详情，右侧标题+三卡（与上面对称） */
export const proofPromise: ProofSection = {
  labelEn: "Our pledge",
  labelZh: "",
  titleEn: "What we promise for",
  titleZh: "我们承诺 · 为您做到",
  h2Tint: "pink",
  stats: [
    { value: "60+ min", labelEn: "Contact", labelZh: "深入对接" },
    { value: "72 h", labelEn: "Preview", labelZh: "出预览" },
    { value: "1 week", labelEn: "Delivery", labelZh: "交付上线" },
  ],
  details: [
    {
      en: "Thorough communication, professional photography, beautiful website design，fast delivered with free revisions.",
      zh: "细致的对接、专业的摄影、精美的建站，极速交付预览且支持免费修改。",
    },
    {
      en: "Contact-shoot-build-launch one-stop delivery, saving your valuable time and consistent brand identity.",
      zh: "沟通-摄影-建站-上线一条龙交付，节省您的宝贵精力，统一的品牌调性",
    },
  ],
};

export const demos = [
  {
    titleEn: "Cleaning · Conversion",
    titleZh: "清洁行业 · 功能完整",
    href: "https://lvisualwebdemo1.vercel.app",
    image: demoImages.cleaning,
    tag: "Cleaning",
  },
  {
    titleEn: "Beauty · Luxury",
    titleZh: "美容行业 · 轻奢视觉",
    href: "https://l-visual-web-demo2.vercel.app",
    image: demoImages.beauty,
    tag: "Beauty",
  },
  {
    titleEn: "Patisserie · Appetite",
    titleZh: "甜品店 · 暖色轻奢",
    href: "https://l-visual-web-demo3.vercel.app",
    image: demoImages.dessert,
    tag: "Dessert",
  },
  {
    titleEn: "Photography · Cinematic",
    titleZh: "摄影师 · 电影感纪实",
    href: "https://www.gary-photos.com",
    image: demoImages.photographer,
    tag: "Photographer",
  },
];
