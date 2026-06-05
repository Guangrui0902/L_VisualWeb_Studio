export type FeatureItem = {
  labelEn: string;
  labelZh: string;
  detailEn?: string;
  detailZh?: string;
  included: boolean;
};

export type PackageTier = {
  id: string;
  nameEn: string;
  nameZh: string;
  price: number;
  priceNoteEn?: string;
  priceNoteZh?: string;
  deliveryEn: string;
  deliveryZh: string;
  highlight?: boolean;
  taglineEn: string;
  taglineZh: string;
  sections: {
    titleEn: string;
    titleZh: string;
    /** Single-line “includes lower tier” — no duplicate feature list */
    rollup?: boolean;
    items: FeatureItem[];
  }[];
};

export const packages: PackageTier[] = [
  {
    id: "essential",
    nameEn: "Essential Refresh",
    nameZh: "基础焕新站",
    price: 880,
    deliveryEn: "Preview in 3 business days once assets are ready",
    deliveryZh: "资料齐全后 3 个工作日内出预览",
    taglineEn: "Site build + technical indexing — you supply the photos",
    taglineZh: "适合：已有图片，要专业页面与收录",
    sections: [
      {
        titleEn: "Site structure (up to 5 pages)",
        titleZh: "网站结构与页面（≤5 页）",
        items: [
          { labelEn: "Home hero + key offers", labelZh: "首页 Hero + 核心卖点", included: true },
          { labelEn: "Services list page", labelZh: "服务项目页", included: true },
          { labelEn: "Pricing / from-price table", labelZh: "价格页 / 起价表", included: true },
          { labelEn: "About the business", labelZh: "关于我们", included: true },
          { labelEn: "Contact page", labelZh: "联系页", included: true },
          {
            labelEn: "Extra pages (6th+)",
            labelZh: "额外子页面（第 6 页起）",
            included: false,
            detailEn: "+$120/page",
            detailZh: "+$120/页",
          },
        ],
      },
      {
        titleEn: "Mobile & UX",
        titleZh: "移动端与体验",
        items: [
          { labelEn: "Fully responsive layout", labelZh: "全站响应式", included: true },
          { labelEn: "Tap-to-call or WhatsApp above the fold", labelZh: "首屏电话 / WhatsApp", included: true },
          { labelEn: "Contact form → email to you", labelZh: "联系表单邮件通知", included: true },
          {
            labelEn: "Image compression + deploy to static hosting",
            labelZh: "图片压缩 + 部署至静态托管",
            included: true,
            detailEn: "Hosting platform fees separate if any",
            detailZh: "托管平台若有年费另计（常用免费档）",
          },
          {
            labelEn: "Live quote calculator",
            labelZh: "即时在线报价计算器",
            included: false,
            detailEn: "Standard tier or add-on",
            detailZh: "见标准包或加购",
          },
        ],
      },
      {
        titleEn: "Local conversion",
        titleZh: "本地化与转化",
        items: [
          { labelEn: "Google Maps embed + directions", labelZh: "Google Maps 嵌入", included: true },
          { labelEn: "Hours, address, phone on site", labelZh: "网站展示营业时间、地址、电话", included: true },
          {
            labelEn: "EN/ZH language toggle",
            labelZh: "中/英双语切换",
            included: false,
            detailEn: "+$200 add-on",
            detailZh: "加购 +$200",
          },
          { labelEn: "WeChat / Ins / WhatsApp links", labelZh: "微信 / Ins / WhatsApp 入口", included: true },
        ],
      },
      {
        titleEn: "Basic SEO — indexing & on-page tech",
        titleZh: "基础 SEO（收录与页面技术）",
        items: [
          {
            labelEn: "Page titles & meta descriptions (per page)",
            labelZh: "每页 Title / Meta（按页面写清）",
            included: true,
          },
          {
            labelEn: "One clear H1 + heading order per page",
            labelZh: "每页一个 H1 + 标题层级",
            included: true,
          },
          {
            labelEn: "Alt text on images you provide",
            labelZh: "您提供图片的补充 Alt 说明",
            included: true,
          },
          { labelEn: "sitemap.xml + robots.txt", labelZh: "sitemap.xml + robots.txt", included: true },
          {
            labelEn: "Google Search Console: verify + submit sitemap",
            labelZh: "Search Console 验证 + 提交站点地图",
            included: true,
          },
          {
            labelEn: "Request indexing for key URLs (one-time)",
            labelZh: "核心页面提交收录请求（一次性）",
            included: true,
          },
          {
            labelEn: "Basic LocalBusiness schema (contact page)",
            labelZh: "联系页基础 LocalBusiness 结构化数据",
            included: true,
          },
          {
            labelEn: "GBP photo upload & local keyword pass",
            labelZh: "GBP 上图 + 本地词写入",
            included: false,
            detailEn: "Standard — local SEO starter",
            detailZh: "见标准包「本地 SEO 起步」",
          },
          {
            labelEn: "GBP deep audit, bilingual copy & 2nd landing page",
            labelZh: "GBP 深度体检、双语简介、第 2 套区域页",
            included: false,
            detailEn: "Flagship tier",
            detailZh: "见旗舰包",
          },
          {
            labelEn: "Ongoing SEO monitoring or ranking guarantee",
            labelZh: "持续 SEO 托管或排名保证",
            included: false,
            detailEn: "Not offered",
            detailZh: "不提供",
          },
        ],
      },
      {
        titleEn: "Photography",
        titleZh: "摄影与视觉",
        items: [
          { labelEn: "Optimise your supplied images", labelZh: "使用您提供的图片并优化", included: true },
          { labelEn: "Sydney on-site shoot", labelZh: "悉尼上门实拍", included: false },
          {
            labelEn: "Before/After slider",
            labelZh: "Before/After 对比滑块",
            included: false,
            detailEn: "Standard / Flagship",
            detailZh: "见标准包或旗舰包",
          },
        ],
      },
      {
        titleEn: "Delivery",
        titleZh: "交付与售后",
        items: [
          { labelEn: "3 rounds of content revisions", labelZh: "3 轮合理内容修改", included: true },
          { labelEn: "Preview link before go-live", labelZh: "预览先用临时链接", included: true },
          {
            labelEn: "DNS setup: bind your domain after balance paid",
            labelZh: "尾款到账后：DNS 解析绑定您的正式域名",
            included: true,
            detailEn: "Binding & HTTPS — not registration fee",
            detailZh: "含解析与 HTTPS，不含注册费",
          },
          {
            labelEn: "Domain registration / annual renewal",
            labelZh: "域名注册费 / 每年续费",
            included: false,
            detailEn: "You pay registrar (~$20–50 AUD/yr typical)",
            detailZh: "客户在注册商自付（常见约 $20–50 澳元/年）",
          },
          {
            labelEn: "Domain registered in your business name",
            labelZh: "域名登记在客户名下（我们指导）",
            included: true,
          },
          {
            labelEn: "Walkthrough: add website link on GBP",
            labelZh: "指导：在 Google 地图商家添加网站链接",
            included: true,
            detailEn: "You keep GBP access; we guide",
            detailZh: "您保留商家权限，我们指导操作",
          },
          {
            labelEn: "RAW + retouched photo pack",
            labelZh: "摄影底片 + 精修全赠",
            included: false,
            detailEn: "Standard / Flagship tiers include full pack",
            detailZh: "标准包 / 旗舰包含底片与全部精修",
          },
          {
            labelEn: "Monthly care plan",
            labelZh: "月度维护",
            included: false,
            detailEn: "$59/mo separate",
            detailZh: "$59/月 另签",
          },
        ],
      },
    ],
  },
  {
    id: "standard",
    nameEn: "Standard Launch",
    nameZh: "标准上线包",
    price: 1280,
    deliveryEn: "Preview in 3 business days once brief and photos are ready",
    deliveryZh: "资料与拍摄素材齐全后 3 个工作日内出预览",
    highlight: true,
    taglineEn: "Essential + shoot + local SEO starter (audit & bilingual on Flagship)",
    taglineZh: "主力推荐：建站 + 实拍 + 本地 SEO",
    sections: [
      {
        titleEn: "Everything in Essential Refresh",
        titleZh: "包含「基础焕新站」全部打勾项",
        rollup: true,
        items: [
          {
            labelEn: "All ✓ items from Essential (incl. basic SEO)",
            labelZh: "含基础 SEO：收录、Meta、Search Console 等",
            included: true,
          },
        ],
      },
      {
        titleEn: "Curated on-site photography",
        titleZh: "摄影（精选实拍）",
        items: [
          { labelEn: "One Sydney shoot visit", labelZh: "悉尼上门拍摄 1 次", included: true },
          {
            labelEn: "12 retouched images",
            labelZh: "12 张精修",
            included: true,
            detailEn: "Storefront, environment & interior details",
            detailZh: "侧重门头、环境、店面细节",
          },
          {
            labelEn: "RAW files + all retouched photos included",
            labelZh: "底片 + 全部精修图全赠",
            included: true,
            detailEn: "Delivered after final payment",
            detailZh: "尾款到账后一并交付",
          },
          {
            labelEn: "Commercial use for social media",
            labelZh: "可商用于社交媒体",
            included: true,
            detailEn: "IG, Facebook, 小红书, WeChat posts, etc.",
            detailZh: "含 IG、Facebook、小红书、朋友圈等发帖商用",
          },
          { labelEn: "Consistent grade for web + Maps", 
            labelZh: "统一色调用于网站与地图", 
            included: true 
          },
          {
            labelEn: "25 retouched + service-process coverage",
            labelZh: "25 张精修 + 更多服务过程",
            included: false,
            detailEn: "Flagship tier",
            detailZh: "见旗舰包",
          },
        ],
      },
      {
        titleEn: "Local SEO starter",
        titleZh: "本地 SEO 起步",
        items: [
          {
            labelEn: "Alt text on shoot photos used on your site",
            labelZh: "网站所用实拍图补充 Alt 说明",
            included: true,
          },
          {
            labelEn: "NAP match: site ↔ GBP name, address, phone",
            labelZh: "NAP 一致：网站与地图姓名/地址/电话核对",
            included: true,
          },
          {
            labelEn: "Upload up to 12 shoot photos to GBP",
            labelZh: "上传实拍至 GBP（最多 12 张）",
            included: true,
          },
          {
            labelEn: "GBP business description refresh (EN, one pass)",
            labelZh: "GBP 商家简介润色（英文一轮）",
            included: true,
            detailZh: "非旗舰级双语深度改写",
          },
          {
            labelEn: "1 local keyword set → home + services meta/H1",
            labelZh: "1 套本地词 → 首页/服务页 Meta·H1",
            included: true,
          },
          {
            labelEn: "Service-area suburbs in on-page copy (1 area)",
            labelZh: "页面文案点名服务郊区（1 组）",
            included: true,
          },
          {
            labelEn: "GBP deep audit · categories overhaul",
            labelZh: "GBP 深度体检 + 分类梳理",
            included: false,
            detailEn: "Flagship tier",
            detailZh: "见旗舰包",
          },
          {
            labelEn: "Bilingual GBP / meta · GBP Q&A",
            labelZh: "GBP·Meta 双语 · GBP 问答",
            included: false,
            detailEn: "Flagship tier",
            detailZh: "见旗舰包",
          },
          {
            labelEn: "2nd keyword page · JSON-LD · 30-day GSC review",
            labelZh: "第 2 套词子页 · 结构化数据 · 30 天复查",
            included: false,
            detailEn: "Flagship tier",
            detailZh: "见旗舰包",
          },
          {
            labelEn: "Bing / Apple listings · booking link on GBP",
            labelZh: "Bing/Apple 商家 · GBP 预约链接",
            included: false,
            detailEn: "Flagship tier",
            detailZh: "见旗舰包",
          },
        ],
      },
      {
        titleEn: "Conversion modules",
        titleZh: "增强模块",
        items: [
          { labelEn: "FAQ accordion", labelZh: "FAQ 手风琴", included: true },
          {
            labelEn: "Simple quote / estimate entry",
            labelZh: "即时报价入口",
            included: true,
            detailEn: "Industry template logic",
            detailZh: "行业模板逻辑",
          },
        ],
      },
      {
        titleEn: "Delivery",
        titleZh: "套餐新增交付",
        items: [
          { labelEn: "3 revision rounds", labelZh: "3 轮内容修改", included: true },
          {
            labelEn: "Post-launch walkthrough (within 15mins)",
            labelZh: "上线后 15 分钟交付指引",
            included: true,
          },
          {
            labelEn: "First month care trial $39",
            labelZh: "首月维护 $39 试用",
            included: false,
            detailEn: "Then $59/mo optional",
            detailZh: "可选签 $59/月",
          },
          {
            labelEn: "Photo delivery: RAW + all 12 retouched files",
            labelZh: "摄影交付：底片 + 12 张精修全赠",
            included: true,
            detailEn: "social commercial use included",
            detailZh: "一并交付 · 含社媒商用",
          },
        ],
      },
    ],
  },
  {
    id: "flagship",
    nameEn: "Flagship Visual",
    nameZh: "品牌尊享包",
    price: 1880,
    deliveryEn: "Preview in 4–5 business days once assets are ready",
    deliveryZh: "资料齐全后 4–5 个工作日出预览",
    taglineEn: "Premium visual+ deeper local SEO pass",
    taglineZh: "高级感视觉 + 进阶本地 SEO 复查（不含广告代投）",
    sections: [
      {
        titleEn: "Everything in Standard Launch",
        titleZh: "包含「标准上线包」全部打勾项",
        rollup: true,
        items: [
          {
            labelEn: "All ✓ items from Standard (shoot, local SEO starter, conversion)",
            labelZh: "含标准包全部：实拍、本地 SEO 起步、转化模块等",
            included: true,
          },
        ],
      },
      {
        titleEn: "Photography upgrade",
        titleZh: "摄影升级",
        items: [
          {
            labelEn: "25 retouched images",
            labelZh: "25 张精修",
            included: true,
            detailEn: "More service-in-action, team & detail shots",
            detailZh: "更多服务过程、团队与细节镜头 · 底片与社媒商用规则同标准包",
          },
          {
            labelEn: "Creative web visuals (scope-fit)",
            labelZh: "创意呈现（按项目择项）",
            included: true,
            detailEn: "e.g. loop GIF, Before/After slider, comparison layout — what fits your trade",
            detailZh: "如动图循环、Before/After 滑块、对比排版等，按行业与素材选最合适形式",
          },
        ],
      },
      {
        titleEn: "Local  SEO  advanced",
        titleZh: "本地 SEO 进阶",
        items: [
          {
            labelEn: "GBP deep audit: categories, services, attributes",
            labelZh: "GBP 深度体检：分类、服务项目、属性项",
            included: true,
          },
          {
            labelEn: "Extra GBP photos (profile total ~20)",
            labelZh: "GBP 追加实拍（资料累计约 20 张）",
            included: true,
            detailEn: "Standard includes up to 12",
            detailZh: "标准包已含最多 12 张",
          },
          {
            labelEn: "Bilingual GBP description (EN + ZH)",
            labelZh: "GBP 商家简介中英双版本（深度改写）",
            included: true,
          },
          {
            labelEn: "GBP Q&A: draft & publish up to 5 FAQs (you approve)",
            labelZh: "GBP 问答：撰写并发布最多 5 条（您确认后上架）",
            included: true,
          },
          {
            labelEn: "2nd local keyword theme + dedicated suburb/service page",
            labelZh: "第 2 套本地词 + 独立区域/服务子页",
            included: true,
          },
          {
            labelEn: "Website + booking link on GBP (where applicable)",
            labelZh: "GBP 挂网站/预约链接（如平台支持）",
            included: true,
          },
          {
            labelEn: "Bilingual meta titles & descriptions (key pages)",
            labelZh: "主要页面中英分别撰写 Meta",
            included: true,
          },
          {
            labelEn: "FAQPage + Service JSON-LD on key URLs",
            labelZh: "FAQ / 服务项目结构化数据（JSON-LD）",
            included: true,
            detailEn: "No ranking guarantee",
            detailZh: "不承诺排名",
          },
          {
            labelEn: "Post-launch Search Console handoff guide",
            labelZh: "上线后 Search Console 只读查看指引",
            included: true,
          },
          {
            labelEn: "30-day post-launch: GSC coverage review + fix pass",
            labelZh: "上线后 30 天内：收录复查 + 关键项修正（一次性）",
            included: true,
            detailEn: "One pass · not monthly SEO",
            detailZh: "非按月 SEO 托管",
          },
          {
            labelEn: "Bing Places & Apple Business Connect listing guide",
            labelZh: "Bing / Apple 商家资料创建指引（一次性）",
            included: true,
            detailEn: "You own the accounts; we guide setup",
            detailZh: "账号归您，我们指导填写",
          },
          {
            labelEn: "Google Ads, backlinks, PR, or ranking guarantee",
            labelZh: "Google Ads、外链、公关或排名保证",
            included: false,
            detailEn: "Not offered",
            detailZh: "不提供",
          },
          {
            labelEn: "Monthly SEO reports or retainer",
            labelZh: "按月 SEO 报告或托管",
            included: false,
            detailEn: "Not offered",
            detailZh: "不提供",
          },
        ],
      },
      {
        titleEn: "Brand & motion",
        titleZh: "品牌与体验升级",
        items: [
          {
            labelEn: "Refined page layout & visual polish",
            labelZh: "更精致的网页版式与视觉打磨",
            included: true,
            detailEn: "Beyond standard template feel — spacing, imagery hierarchy, premium sections",
            detailZh: "区别于标准包模板感 · 留白、图层级与版块质感更讲究",
          },
          { labelEn: "Custom palette & type scale", labelZh: "定制配色与字体层级", included: true },
          { labelEn: "Bilingual key pages (UI toggle)", labelZh: "主要页面中英切换", included: true },
          { labelEn: "Refined scroll motion (no gimmicks)", labelZh: "克制滚动动效", included: true },
          { labelEn: "Testimonial carousel", labelZh: "客户评价轮播", included: true },
        ],
      },
      {
        titleEn: "Delivery",
        titleZh: "本档新增交付",
        items: [
          {
            labelEn: "4 revisions round",
            labelZh: "4 轮修改",
            included: true,
          },
          { labelEn: "Priority scheduling", labelZh: "优先排期", included: true },
          {
            labelEn: "First month care trial $39 (complimentary)",
            labelZh: "首月维护 $39 试用（赠送）",
            included: true,
            detailEn: "Then $59/mo optional · minor edits & backups",
            detailZh: "到期后可选签 $59/月 · 小改与备份",
          },
          {
            labelEn: "Post-launch walkthrough (within 15mins)",
            labelZh: "上线后 30 分钟交付指引",
            included: true,
          },
          {
            labelEn: "Photo delivery: RAW + all 25 retouched files",
            labelZh: "摄影交付：底片 + 25 张精修全赠",
            included: true,
            detailEn: "delivered after balance · social commercial use included",
            detailZh: "一并交付 · 含社媒商用",
          },
        ],
      },
    ],
  },
];

export type AddOn = {
  nameEn: string;
  nameZh: string;
  price: string;
  noteEn?: string;
  noteZh?: string;
};

export type AddOnSection = {
  titleEn: string;
  titleZh: string;
  items: AddOn[];
};

/** Add-ons only — packages are fixed. Prices tuned for Sydney solo-studio scope (deliverable in-house). */
export const addOnSections: AddOnSection[] = [
  {
    titleEn: "Care",
    titleZh: "订阅维护",
    items: [
      {
        nameEn: "Monthly Care",
        nameZh: "长期维护",
        price: "$59/mo",
        noteEn: "Minor text/image edits ≤30 min · backup check · not SEO retainer",
        noteZh: "小改文案/图片 ≤30 分钟 · 备份巡检 · 不含按月 SEO 托管 · 旗舰签约赠首月 $39 试用",
      },
    ],
  },
  {
    titleEn: "New build extras",
    titleZh: "新站项目加购",
    items: [
      {
        nameEn: "Rush · 48h preview",
        nameZh: "加急预览",
        price: "+$150",
        noteEn: "Queue jump when your brief & assets are complete",
        noteZh: "资料齐的前提下优先排期出预览",
      },
      {
        nameEn: "Extra page (6th+)",
        nameZh: "额外页面",
        price: "+$120/page",
        noteEn: "New page + nav link + basic meta",
        noteZh: "含导航入口与基础 Meta",
      },
      {
        nameEn: "Extra revision round",
        nameZh: "额外修改轮次",
        price: "+$80",
        noteEn: "Beyond package revision count · reasonable scope",
        noteZh: "超出套餐约定轮次 · 合理范围",
      },
      {
        nameEn: "Bilingual EN / ZH",
        nameZh: "中英双语",
        price: "+$200",
        noteEn: "Key pages UI toggle + meta per language · Essential / Standard only",
        noteZh: "主要页面切换 + 分语言 Meta · 仅基础/标准包（旗舰已含）",
      },
      {
        nameEn: "Live quote / estimate module",
        nameZh: "即时报价入口",
        price: "+$120",
        noteEn: "Industry template logic · Essential only",
        noteZh: "行业模板逻辑 · 仅基础包（标准·旗舰已含）",
      },
      {
        nameEn: "Online booking embed",
        nameZh: "在线预约嵌入",
        price: "+$120",
        noteEn: "Calendly or similar — you keep the booking account",
        noteZh: "如 Calendly 嵌入 · 预约账号归您",
      },
      {
        nameEn: "Google reviews strip",
        nameZh: "Google 评价展示条",
        price: "+$80",
        noteEn: "Curated review carousel on site · you approve quotes",
        noteZh: "站内评价轮播 · 文案经您确认，仅基础/标准包（旗舰已含）",
      },
    ],
  },
  {
    titleEn: "Photography & assets",
    titleZh: "摄影与素材",
    items: [
      {
        nameEn: "Extra shoot visit",
        nameZh: "追加拍摄（含精修）",
        price: "from +$189",
        noteEn: "2nd Sydney visit or add-on set · ~8–12 retouched, matched grade",
        noteZh: "第二次上门或加拍一组 · 约 8–12 张精修 · 色调与套餐一致",
      },
      {
        nameEn: "Shoot only · half day",
        nameZh: "影音高定摄影",
        price: "from +$399",
        noteEn: "No website build · RAW + retouched count quoted in scope",
        noteZh: "不含建站 · 底片与精修张数按范围报价",
      },
    ],
  },
  {
    titleEn: "Existing website (one-off)",
    titleZh: "已有网站 · 单次优化",
    items: [
      {
        nameEn: "Tech indexing check",
        nameZh: "技术收录体检",
        price: "$120",
        noteEn: "Meta, H1 order, sitemap, GSC verify & URL inspect — no GBP rewrite",
        noteZh: "等同基础包技术 SEO · 不改写 GBP 文案",
      },
      {
        nameEn: "Local SEO · starter",
        nameZh: "地图本地 SEO · 入门",
        price: "$280",
        noteEn: "Same scope as Standard tier local SEO starter · site must be editable",
        noteZh: "等同标准包「本地 SEO 起步」· 需能改站与 GBP 权限",
      },
      {
        nameEn: "Local SEO · advanced",
        nameZh: "地图本地 SEO · 进阶",
        price: "$480",
        noteEn: "Same scope as Flagship local SEO advanced block · no new shoot",
        noteZh: "等同旗舰「本地 SEO 进阶」块 · 不含新实拍",
      },
    ],
  },
  {
    titleEn: "Admin",
    titleZh: "内容后台",
    items: [
      {
        nameEn: "Simple staff admin",
        nameZh: "基础后台（简易）",
        price: "from +$180",
        noteEn: "One login · update images, prices & short copy · Decap / similar",
        noteZh: "单账号 · 改图/价/短文案 · 三档套餐均不含",
      },
      {
        nameEn: "Full CMS / advanced admin",
        nameZh: "深度后台（CMS）",
        price: "from +$350",
        noteEn: "Multi-user, more sections, new pages, workflows · quoted by scope",
        noteZh: "多账号、更多栏目、可加页 · 按范围报价 · 三档套餐均不含",
      },
    ],
  },
];

/** @deprecated Use addOnSections — flat list for legacy imports */
export const addOns: AddOn[] = addOnSections.flatMap((s) => s.items);

export const paymentTerms = [
  {
    en: "40% deposit to book · 60% balance within 7 days of approval",
    zh: "签约付 40% 定金，验收合格后 7 日内付 60% 尾款",
  },
  {
    en: "Package price excludes domain registration/renewal — client pays registrar (~$20–50 AUD/yr typical); we provide DNS binding & HTTPS only",
    zh: "套餐价不含域名注册/续费 — 客户在注册商自付（常见约 $20–50 澳元/年）；我方仅提供 DNS 解析绑定与 HTTPS",
  },
  {
    en: "Preview on temporary link or online; formal domain connected after balance paid",
    zh: "预览使用临时链接、线上展示；尾款到账后绑定客户名下正式域名",
  },
  {
    en: "Domain must be registered in the client's business name (we guide setup)",
    zh: "域名须登记在客户本人/公司名下（我们指导注册与绑定）",
  },
  {
    en: "GST noted on contract if applicable",
    zh: "报价含 GST 与否签约时注明",
  },
  {
    en: "Travel: Greater Sydney included · outer areas +$50–80",
    zh: "大悉尼免费；远郊（如 Central Coast）+$50–80",
  },
];
