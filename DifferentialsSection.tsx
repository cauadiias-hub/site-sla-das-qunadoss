import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart, Shield, Wrench, Sparkles, Home } from "lucide-react";

const items = [
  { icon: Heart, title: "Atendimento personalizado", desc: "Entendemos cada detalhe do seu projeto." },
  { icon: Shield, title: "Materiais de alta qualidade", desc: "Tecidos e componentes premium." },
  { icon: Wrench, title: "Instalação profissional", desc: "Equipe técnica especializada." },
  { icon: Sparkles, title: "Acabamento impecável", desc: "Atenção a cada detalhe final." },
  { icon: Home, title: "Soluções para qualquer ambiente", desc: "Residencial e corporativo." },
];

const DifferentialsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="diferenciais" className="py-16 md:py-24 lg:py-32 bg-background particles-bg" ref={ref}>
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div data-animate className="text-center mb-12 md:mb-16">
          <p className="text-xs sm:text-sm font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Diferenciais
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground title-shimmer">
            Por que escolher a Ambienta
          </h2>
          <div className="section-divider-animated mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {items.map((item, i) => (
            <div
              key={item.title}
              data-animate
              data-animation="scale-in"
              className={`text-center group ${i === items.length - 1 ? "col-span-2 lg:col-span-1 max-w-xs mx-auto" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-warm mb-4 md:mb-5 transition-all duration-500 group-hover:shadow-[var(--shadow-glow)] group-hover:bg-primary/10">
                <item.icon className="h-6 w-6 md:h-7 md:w-7 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base md:text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
