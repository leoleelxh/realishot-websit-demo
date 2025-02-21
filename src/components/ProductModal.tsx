interface ProductModalProps {
  modelUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ modelUrl, isOpen, onClose }: ProductModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4">
      <div className="relative w-full max-w-[1200px] aspect-[16/9] bg-white rounded-xl shadow-2xl">
        {/* 关闭按钮 */}
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-purple-200 
                   transition-colors duration-300 w-8 h-8 flex items-center justify-center 
                   rounded-full hover:bg-white/10"
        >
          ×
        </button>

        <iframe 
          src={modelUrl}
          className="w-full h-full rounded-xl"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
} 