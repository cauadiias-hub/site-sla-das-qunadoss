import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WHATSAPP_URL = "https://wa.me/5541987433086?text=Olá! Gostaria de solicitar um orçamento.";

const CTASection = () => {
  const ref = useScrollAnimation("slide-up");

  return (
    <section id="contato" className="relative py-20 md:py-28 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-gold-light/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container max-w-3xl mx-auto px-6 text-center relative z-10">
        <div data-animate>
          <p className="text-xs sm:text-sm font-body font-semibold tracking-[0.25em] uppercase text-primary mb-6">
            Vamos começar?
          </p>
           <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight title-shimmer">
            Solicite seu orçamento agora
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 font-light max-w-xl mx-auto">
            Transforme seu ambiente com cortinas e persianas sob medida. Atendimento rápido e personalizado.
          </p>
          <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-gold-dark text-sm sm:text-base md:text-lg px-6 sm:px-10 py-7 rounded-full shadow-[var(--shadow-glow)] w-full sm:w-auto">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar orçamento no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
