import { useEffect, useState, useCallback } from "react";
import heroBg from "@/assets/gallery-3.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5541987433086?text=Olá! Gostaria de solicitar um orçamento.";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    requestAnimationFrame(() => setScrollY(window.scrollY));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const bgTranslate = scrollY * 0.35;
  const bgScale = 1 + scrollY * 0.0003;
  const contentTranslate = scrollY * -0.15;
  const contentOpacity = Math.max(0, 1 - scrollY / 700);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background with scale */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${bgTranslate}px) scale(${bgScale})`,
          transformOrigin: "center center",
        }}
      >
        <img
          src={heroBg}
          alt="Sala de estar elegante com cortinas sob medida"
          className="w-full h-[120%] object-cover"
          loading="eager"
        />
      </div>

      {/* Gradient overlays — warm beige-champagne tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(35_30%_25%/0.80)] via-[hsl(35_25%_30%/0.55)] to-[hsl(40_20%_40%/0.25)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_20%_18%/0.45)] via-transparent to-[hsl(40_30%_50%/0.15)]" />

      {/* Content with inverse parallax */}
      <div
        className="relative container text-center md:text-left max-w-5xl mx-auto px-6 py-20 will-change-transform"
        style={{
          transform: `translateY(${contentTranslate}px)`,
          opacity: contentOpacity,
        }}
      >
        <div className="max-w-3xl">
          <p className="text-sm md:text-base font-body font-medium tracking-[0.25em] uppercase text-gold-glow mb-6 animate-fade-up">
            Ambienta Cortinas & Persianas
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-6 text-background animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Transforme seus ambientes com cortinas e persianas sob medida
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl text-background/80 font-light leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Soluções modernas, elegantes e funcionais para residências e empresas em Curitiba e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-gold-dark text-base px-8 py-6 rounded-full shadow-lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-background/30 text-foreground bg-background/90 hover:bg-background text-base px-8 py-6 rounded-full backdrop-blur-sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#sobre" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/50 hover:text-background transition-colors animate-fade-in" style={{ animationDelay: "1s" }}>
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
