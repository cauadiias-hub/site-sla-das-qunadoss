import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GalleryLightbox from "./GalleryLightbox";

const WHATSAPP_URL = "https://wa.me/5541987433086?text=Olá! Gostaria de solicitar um orçamento.";

const images = [
  { src: gallery1, alt: "Persiana double vision em escritório moderno" },
  { src: gallery2, alt: "Persianas rolo em apartamento amplo" },
  { src: gallery3, alt: "Sala de estar com cortinas elegantes" },
  { src: gallery4, alt: "Persiana double vision em sala de jantar" },
  { src: gallery5, alt: "Sala com persianas painel" },
  { src: gallery6, alt: "Sala de jantar com persiana double vision" },
  { src: gallery7, alt: "Cortinas em sala de jantar sofisticada" },
  { src: gallery8, alt: "Cortinas translúcidas em escadaria" },
  { src: gallery9, alt: "Persiana horizontal em cozinha moderna" },
  { src: gallery10, alt: "Persiana double vision em sala de jantar" },
  { src: gallery11, alt: "Cortinas em sala integrada com jardim vertical" },
  { src: gallery12, alt: "Persiana double vision escura em sala de jantar" },
  { src: gallery13, alt: "Detalhe de mecanismo de persiana rolo" },
  { src: gallery14, alt: "Persiana double vision branca em varanda" },
  { src: gallery15, alt: "Tela solar em escritório corporativo" },
  { src: gallery16, alt: "Cortinas em quarto de casal elegante" },
  { src: gallery17, alt: "Persiana horizontal preta em ambiente moderno" },
  { src: gallery18, alt: "Cortinas brancas em sala de estar clássica" },
  { src: gallery19, alt: "Persiana plissada em quarto com vista" },
  { src: gallery20, alt: "Persiana rolô blackout em quarto" },
  { src: gallery21, alt: "Persiana double vision em sala de estar aconchegante" },
];

const GallerySection = () => {
  const ref = useScrollAnimation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-16 md:py-24 lg:py-32 bg-warm" ref={ref}>
      <div className="container max-w-6xl mx-auto px-6">
        <div data-animate className="text-center mb-12 md:mb-16">
          <p className="text-xs sm:text-sm font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Portfólio
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Galeria de Projetos
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              data-animate
              data-animation="scale-in"
              className="break-inside-avoid overflow-hidden rounded-lg group cursor-pointer relative img-overlay"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-background text-sm font-light">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-animate className="text-center mt-12">
          <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-gold-dark text-sm sm:text-base px-8 py-6 rounded-full shadow-[var(--shadow-glow)]">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
};

export default GallerySection;
