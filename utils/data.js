// 时令果蔬数据
const REGIONS = [
  { code: 'cn', name: '全国通用', climateZone: 'national' },
  { code: 'beijing', name: '北京 / 华北', climateZone: 'north' },
  { code: 'shanghai', name: '上海 / 华东', climateZone: 'east' },
  { code: 'guangzhou', name: '广州 / 华南', climateZone: 'south' },
  { code: 'chengdu', name: '成都 / 西南', climateZone: 'southwest' },
];

// 果蔬数据（内置，与之前一致）
const SEASONAL_ITEMS = [
  {
    id: 'dandong99_strawberry',
    name: '丹东99草莓',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'north', start: '11-20', end: '04-30', peak: ['12', '01', '02'] },
      { region: 'east', start: '12-01', end: '03-31', peak: ['01', '02'] },
    ],
    nutritionTags: ['补维C', '抗氧化', '低脂肪'],
    recommendBase: 4.7,
  },
  {
    id: 'cuimi_kumquat',
    name: '脆蜜金桔',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'south', start: '10-01', end: '02-28', peak: ['11', '12'] },
      { region: 'east', start: '11-01', end: '02-28', peak: ['12'] },
    ],
    nutritionTags: ['补维C', '果皮可食', '甜度高'],
    recommendBase: 4.6,
  },
  {
    id: 'gannan_navel_orange',
    name: '赣南脐橙',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'south', start: '11-01', end: '01-31', peak: ['11', '12'] },
      { region: 'east', start: '11-15', end: '02-15', peak: ['12'] },
    ],
    nutritionTags: ['补维C', '增强免疫力'],
    recommendBase: 4.5,
  },
  {
    id: 'aiyuan38_orange',
    name: '爱媛38号（果冻橙）',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'southwest', start: '11-15', end: '03-15', peak: ['12', '01'] },
      { region: 'south', start: '12-01', end: '02-28', peak: ['12', '01'] },
    ],
    nutritionTags: ['补维C', '口感细腻'],
    recommendBase: 4.4,
  },
  {
    id: 'baba_mandarin',
    name: '春见耙粑柑',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'south', start: '12-15', end: '02-28', peak: ['01', '02'] },
      { region: 'east', start: '01-01', end: '03-10', peak: ['01', '02'] },
    ],
    nutritionTags: ['补维C', '多汁易剥', '酸甜适中'],
    recommendBase: 4.4,
  },
  {
    id: 'feizixiao_lychee',
    name: '妃子笑荔枝',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'south', start: '06-01', end: '07-15', peak: ['06'] },
    ],
    nutritionTags: ['补维C', '高糖', '适量食用'],
    recommendBase: 4.3,
  },
  {
    id: 'yangshan_peach',
    name: '阳山水蜜桃',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'east', start: '06-20', end: '08-10', peak: ['07'] },
    ],
    nutritionTags: ['多汁香甜', '较高糖分'],
    recommendBase: 4.2,
  },
  {
    id: 'hongfuji_apple',
    name: '红富士苹果',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'north', start: '10-01', end: '03-31', peak: ['10', '11'] },
      { region: 'east', start: '10-15', end: '03-15', peak: ['11'] },
    ],
    nutritionTags: ['高纤维', '相对耐储存'],
    recommendBase: 4.0,
  },
  {
    id: 'tomato_pinggu',
    name: '平谷西红柿',
    category: 'vegetable',
    isImported: false,
    seasons: [
      { region: 'north', start: '06-01', end: '10-15', peak: ['07', '08'] },
    ],
    nutritionTags: ['补维C', '番茄红素', '有利心血管'],
    recommendBase: 4.3,
  },
  {
    id: 'shanghai_qing',
    name: '上海青（小油菜）',
    category: 'vegetable',
    isImported: false,
    seasons: [
      { region: 'east', start: '10-01', end: '04-30', peak: ['11', '12', '03'] },
      { region: 'south', start: '11-01', end: '03-31', peak: ['12', '01'] },
    ],
    nutritionTags: ['高纤维', '低热量'],
    recommendBase: 4.0,
  },
  {
    id: 'spinach_local',
    name: '本地菠菜（秋冬）',
    category: 'vegetable',
    isImported: false,
    seasons: [
      { region: 'north', start: '10-01', end: '05-15', peak: ['11', '03', '04'] },
      { region: 'east', start: '11-01', end: '04-30', peak: ['12', '03'] },
    ],
    nutritionTags: ['补铁', '叶酸丰富'],
    recommendBase: 4.1,
  },
  {
    id: 'asparagus_spring',
    name: '春季芦笋',
    category: 'vegetable',
    isImported: false,
    seasons: [
      { region: 'east', start: '03-15', end: '06-15', peak: ['04', '05'] },
      { region: 'north', start: '04-01', end: '06-01', peak: ['05'] },
    ],
    nutritionTags: ['低脂肪', '富含叶酸'],
    recommendBase: 3.9,
  },
  {
    id: 'liuao_honey_sweet_potato',
    name: '六鳌蜜薯',
    category: 'vegetable',
    isImported: false,
    seasons: [
      { region: 'south', start: '10-01', end: '02-28', peak: ['11', '12'] },
      { region: 'east', start: '10-15', end: '02-15', peak: ['11'] },
    ],
    nutritionTags: ['高膳食纤维', '饱腹感强'],
    recommendBase: 4.2,
  },
  {
    id: 'guangxi_sugarcane_yunu',
    name: '玉奴甘蔗',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'south', start: '11-01', end: '03-15', peak: ['12', '01'] },
    ],
    nutritionTags: ['补水', '补糖', '适量食用'],
    recommendBase: 4.1,
  },
  {
    id: 'huangyan_miju',
    name: '黄岩蜜橘',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'east', start: '10-15', end: '12-31', peak: ['11', '12'] },
      { region: 'south', start: '11-01', end: '01-15', peak: ['11', '12'] },
    ],
    nutritionTags: ['补维C', '易剥皮'],
    recommendBase: 4.3,
  },
  {
    id: 'guiwei_lychee',
    name: '桂味荔枝',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'south', start: '06-15', end: '07-20', peak: ['06', '07'] },
    ],
    nutritionTags: ['香气浓郁', '高糖', '适量食用'],
    recommendBase: 4.4,
  },
  {
    id: 'qilin_watermelon',
    name: '麒麟西瓜',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'south', start: '03-01', end: '07-31', peak: ['04', '05', '06'] },
    ],
    nutritionTags: ['补水', '解暑'],
    recommendBase: 4.3,
  },
  {
    id: 'peru_blueberry',
    name: '秘鲁蓝莓',
    category: 'fruit',
    isImported: true,
    seasons: [
      { region: 'national', start: '09-01', end: '03-31', peak: ['10', '11', '12'] },
    ],
    nutritionTags: ['抗氧化', '保护视力'],
    recommendBase: 4.2,
  },
  {
    id: 'chile_cherry',
    name: '智利车厘子',
    category: 'fruit',
    isImported: true,
    seasons: [
      { region: 'national', start: '11-15', end: '02-10', peak: ['12', '01'] },
    ],
    nutritionTags: ['补铁', '抗氧化'],
    recommendBase: 4.5,
  },
  {
    id: 'yunnan_broccoli',
    name: '云南西兰花',
    category: 'vegetable',
    isImported: false,
    seasons: [
      { region: 'southwest', start: '10-01', end: '04-30', peak: ['11', '12', '01'] },
    ],
    nutritionTags: ['高维C', '高膳食纤维'],
    recommendBase: 4.1,
  },
  {
    id: 'shandong_green_onion',
    name: '山东大葱',
    category: 'vegetable',
    isImported: false,
    seasons: [
      { region: 'north', start: '10-01', end: '03-31', peak: ['11', '12'] },
    ],
    nutritionTags: ['增香配菜', '含挥发油'],
    recommendBase: 3.8,
  },
  {
    id: 'sunshine_rose_grape',
    name: '阳光玫瑰葡萄',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'south', start: '06-20', end: '09-30', peak: ['07', '08'] },
      { region: 'east', start: '07-15', end: '10-10', peak: ['08', '09'] },
      { region: 'north', start: '08-01', end: '10-15', peak: ['08', '09'] },
    ],
    nutritionTags: ['高糖度', '带玫瑰香'],
    recommendBase: 4.6,
  },
  {
    id: 'monthong_durian',
    name: '泰国金枕榴莲',
    category: 'fruit',
    isImported: true,
    seasons: [
      { region: 'national', start: '05-15', end: '09-30', peak: ['06', '07', '08'] },
    ],
    nutritionTags: ['高能量', '高脂肪', '适量食用'],
    recommendBase: 4.5,
  },
  {
    id: 'red_heart_pitaya',
    name: '红心火龙果',
    category: 'fruit',
    isImported: false,
    seasons: [
      { region: 'south', start: '06-01', end: '11-15', peak: ['07', '08', '09'] },
      { region: 'southwest', start: '06-15', end: '10-31', peak: ['07', '08'] },
    ],
    nutritionTags: ['高纤维', '抗氧化'],
    recommendBase: 4.3,
  },
  {
    id: 'mangosteen_import',
    name: '泰国山竹',
    category: 'fruit',
    isImported: true,
    seasons: [
      { region: 'national', start: '05-15', end: '10-15', peak: ['06', '07', '08'] },
    ],
    nutritionTags: ['补维C', '口感软糯'],
    recommendBase: 4.2,
  },
  {
    id: 'hass_avocado',
    name: '牛油果（Hass）',
    category: 'fruit',
    isImported: true,
    seasons: [
      { region: 'national', start: '03-01', end: '11-30', peak: ['04', '05', '06'] },
    ],
    nutritionTags: ['健康脂肪', '适合代餐'],
    recommendBase: 4.0,
  },
];

// 工具函数
function formatDate(date) {
  const d = date || new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getMonthDay(date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${m}-${day}`;
}

function isInRange(monthDay, start, end) {
  if (start <= end) {
    return monthDay >= start && monthDay <= end;
  }
  return monthDay >= start || monthDay <= end;
}

function matchSeasonForRegion(item, currentMonthDay) {
  const list = item.seasons || [];
  const month = currentMonthDay.slice(0, 2);

  for (const s of list) {
    const inSeason = isInRange(currentMonthDay, s.start, s.end);
    if (!inSeason) continue;
    return s;
  }
  return null;
}

function calcSeasonScore(item, currentMonthDay) {
  const month = currentMonthDay.slice(0, 2);
  let base = 3;
  const isPeak = item._matchedSeason && item._matchedSeason.peak.includes(month);
  if (isPeak) base += 1.5;
  return base;
}

function calcRecommendScore(item, currentMonthDay) {
  const seasonScore = calcSeasonScore(item, currentMonthDay);
  const base = item.recommendBase;
  return Number((seasonScore * 0.6 + base * 0.4).toFixed(1));
}

function getEmojiForItem(item) {
  const name = item.name || '';
  if (name.includes('草莓')) return '🍓';
  if (name.includes('橙') || name.includes('橘') || name.includes('柑')) return '🍊';
  if (name.includes('桃')) return '🍑';
  if (name.includes('荔枝')) return '🔴';
  if (name.includes('葡萄') || name.includes('提子')) return '🍇';
  if (name.includes('西瓜')) return '🍉';
  if (name.includes('苹果')) return '🍎';
  if (name.includes('樱桃') || name.includes('车厘子')) return '🍒';
  if (name.includes('蓝莓')) return '🫐';
  if (name.includes('榴莲')) return '🥣';
  if (name.includes('火龙果')) return '🩷';
  if (name.includes('山竹')) return '💜';
  if (name.includes('牛油果')) return '🥑';
  if (name.includes('西红柿') || name.includes('番茄')) return '🍅';
  if (name.includes('青') || name.includes('菠菜') || name.includes('菜')) return '🥬';
  if (name.includes('芦笋')) return '🎋';
  if (name.includes('薯')) return '🍠';
  if (name.includes('葱')) return '🧅';
  if (name.includes('西兰花')) return '🥦';
  if (name.includes('甘蔗')) return '🎋';
  return item.category === 'fruit' ? '🍎' : '🥬';
}

function getVarietyTag(item) {
  const name = item.name || '';
  if (/丹东|赣南|阳山|平谷|黄岩|六鳌|融安|阳朔/.test(name)) return '地方名品';
  if (/红富士|爱媛|妃子笑|桂味|麒麟|车厘子|脆蜜/.test(name)) return '品牌/知名品种';
  return item.category === 'fruit' ? '常见时令水果' : '常见时令蔬菜';
}

function filterAndScoreItems(state) {
  const { date, category, origin, keyword } = state;
  const currentMonthDay = getMonthDay(date);

  const filtered = [];

  for (const item of SEASONAL_ITEMS) {
    if (keyword && !item.name.includes(keyword)) continue;

    const season = matchSeasonForRegion(item, currentMonthDay);
    if (!season) continue;

    if (category !== 'all' && item.category !== category) continue;
    if (origin === 'domestic' && item.isImported) continue;
    if (origin === 'imported' && !item.isImported) continue;

    const withMeta = { ...item };
    withMeta._matchedSeason = season;
    withMeta._score = calcRecommendScore(withMeta, currentMonthDay);
    withMeta._emoji = getEmojiForItem(item);
    withMeta._varietyTag = getVarietyTag(item);
    filtered.push(withMeta);
  }

  filtered.sort((a, b) => b._score - a._score);
  return filtered;
}

function getComingSoonItems(state) {
  const { date, category, origin, keyword } = state;
  const currentYear = date.getFullYear();
  const next30Days = new Date(date);
  next30Days.setDate(date.getDate() + 30);

  const comingSoon = [];

  for (const item of SEASONAL_ITEMS) {
    if (keyword && !item.name.includes(keyword)) continue;
    if (category !== 'all' && item.category !== category) continue;
    if (origin === 'domestic' && item.isImported) continue;
    if (origin === 'imported' && !item.isImported) continue;

    for (const s of item.seasons || []) {
      const [m, d] = s.start.split('-').map(Number);
      let testDate = new Date(currentYear, m - 1, d);

      if (testDate.getTime() < date.getTime()) {
        testDate.setFullYear(currentYear + 1);
      }

      if (testDate > date && testDate <= next30Days) {
        const withMeta = { ...item };
        withMeta._comingSoonDate = `${m}月${d}日`;
        withMeta._score = item.recommendBase;
        withMeta._emoji = getEmojiForItem(item);
        comingSoon.push(withMeta);
        break;
      }
    }
  }
  return comingSoon;
}

module.exports = {
  REGIONS,
  SEASONAL_ITEMS,
  formatDate,
  getMonthDay,
  isInRange,
  matchSeasonForRegion,
  calcSeasonScore,
  calcRecommendScore,
  getEmojiForItem,
  getVarietyTag,
  filterAndScoreItems,
  getComingSoonItems,
};