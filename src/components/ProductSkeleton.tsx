export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm animate-pulse">
      <div className="relative aspect-[4/3] bg-gray-200"></div>
      <div className="p-4">
        <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  );
} 