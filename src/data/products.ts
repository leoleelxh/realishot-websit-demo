import { Product } from '@/types/product';

const manufacturers = [
  'Realibox', 'Luxe Packaging', 'Beauty Container Pro', 'Cosmetic Bottles Co.',
  'Elite Package', 'Pure Beauty Solutions', 'Glamour Pack', 'Premium Containers'
];

const series = [
  '奢华护肤系列', '精致彩妆系列', '清新花香系列', '水润保湿系列',
  '高端香氛系列', '自然有机系列', '轻奢美妆系列', '专业护理系列',
  '东方美学系列', '简约优雅系列'
];

// 创建固定的产品数据而不是随机生成
export const products: Product[] = Array.from({ length: 40 }, (_, i) => ({
  id: String(i + 1),
  manufacturer: manufacturers[i % manufacturers.length], // 使用固定的索引
  series: series[Math.floor(i / 4) % series.length], // 使用固定的索引
  image: `/images/set_${String(i + 1).padStart(2, '0')}.jpg`,
  modelUrl: 'https://studio.realibox.com/share?id=44edc49d082819eebbca7f5fcf21cd03'
})); 