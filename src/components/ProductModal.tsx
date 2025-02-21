interface ProductModalProps {
  modelUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ modelUrl, isOpen, onClose }: ProductModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 md:p-8">
      <div className="relative bg-white rounded-xl w-full max-w-[calc(100vw-2rem)] md:max-w-[calc(100vw-4rem)] mx-auto">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-purple-200
                    transition-colors duration-300 text-3xl"
        >
          ×
        </button>
        <iframe 
          src={modelUrl}
          className="w-full h-[80vh] rounded-xl"
          frameBorder="0"
        />
      </div>
    </div>
  );
} 