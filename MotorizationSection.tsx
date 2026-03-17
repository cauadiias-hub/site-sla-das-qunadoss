import motorizada from "@/assets/motorizada.jpg";
import { Zap, Smartphone, Mic, Settings, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  { icon: Smartphone, label: "Controle remoto" },
  { icon: Mic, label: "Integração com Alexa" },
  { icon: Settings, label: "Automação residencial" },
];

const MotorizationSection = () => {
  const ref = useScrollAnimation("slide-up");

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-warm particles-bg" ref={ref}>
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div data-animate className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={motorizada}
              alt="Persiana motorizada com automação inteligente"
              className="w-full h-[300px] md:h-[420px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-body font-semibold text-foreground">Automação inteligente</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div data-animate>
            <p className="text-xs sm:text-sm font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Tecnologia
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4 title-shimmer">
              Motorização Inteligente
            </h2>
            <div className="section-divider-animated !mx-0 mb-6" />
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Automatize suas cortinas e persianas para mais conforto no dia a dia. Controle seus ambientes com praticidade e sofisticação.
            </p>

            <p className="text-sm font-body font-semibold text-foreground mb-4 tracking-wide uppercase">
              Compatível com:
            </p>
            <div className="grid grid-cols-1 gap-4">
              {features.map((feat) => (
                <div
                  key={feat.label}
                  className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-sm border border-primary/10 transition-all duration-300 hover:shadow-md hover:border-primary/25"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <feat.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feat.label}</span>
                </div>
              ))}

              {/* E muito mais */}
              <div className="flex items-center gap-3 bg-primary/5 rounded-xl p-4 border border-primary/20">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" strokeWidth={1.8} />
                </div>
                <span className="text-sm font-medium text-primary">E muito mais...</span>
              </div>
            </div>

            <p className="text-muted-foreground font-light text-sm md:text-base mt-6 mb-6 leading-relaxed">
              Transforme sua casa em um ambiente inteligente. Peça seu orçamento e descubra todas as possibilidades.
            </p>

            <div className="text-center lg:text-left">
              <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-gold-dark text-sm sm:text-base px-8 py-6 rounded-full shadow-[var(--shadow-glow)]">
                <a href="https://wa.me/5541987433086?text=Olá! Gostaria de solicitar um orçamento." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotorizationSection;
