import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const GalleryLightbox = ({ images, currentIndex, onClose, onNavigate }: GalleryLightboxProps) => {
  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 text-background/70 hover:text-background transition-colors p-2"
        aria-label="Fechar"
      >
        <X className="h-7 w-7" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-3 md:left-6 z-10 text-background/50 hover:text-background transition-colors p-2"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" />
      </button>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-in"
          key={currentIndex}
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-3 md:right-6 z-10 text-background/50 hover:text-background transition-colors p-2"
        aria-label="Próxima"
      >
        <ChevronRight className="h-8 w-8 md:h-10 md:w-10" />
      </button>

      {/* Caption + counter */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-background/80 text-sm font-light mb-1">{images[currentIndex].alt}</p>
        <p className="text-background/40 text-xs">{currentIndex + 1} / {images.length}</p>
      </div>
    </div>
  );
};

export default GalleryLightbox;
