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

// 生成40个产品数据
export const products: Product[] = Array.from({ length: 40 }, (_, i) => ({
  id: String(i + 1),
  manufacturer: manufacturers[Math.floor(Math.random() * manufacturers.length)],
  series: series[Math.floor(Math.random() * series.length)],
  image: `/images/set_${String(i + 1).padStart(2, '0')}.jpg`,
  modelUrl: 'https://studio.realibox.com/share?id=44edc49d082819eebbca7f5fcf21cd03'
})); 