import gallery7 from "@/assets/gallery-7.jpg";
import roloTranslucida from "@/assets/rolo-translucida.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import telaSolar from "@/assets/tela-solar.png";
import gallery1 from "@/assets/gallery-1.jpg";
import instalacao from "@/assets/instalacao.jpg";
import roloBlackout from "@/assets/rolo-blackout.png";
import vertical from "@/assets/vertical.jpg";
import romana from "@/assets/romana.jpg";
import caixaBox from "@/assets/caixa-box.png";
import { Truck, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5541987433086?text=Olá! Gostaria de solicitar um orçamento.";

const services = [
  {
    title: "Cortinas sob medida",
    description: "Cortinas personalizadas com tecidos premium para salas, quartos e escritórios.",
    image: gallery7,
  },
  {
    title: "Tela Solar (Screen)",
    description: "Proteção solar com vários fatores de proteção, permitindo controle da luminosidade e temperatura enquanto mantém a vista externa.",
    image: telaSolar,
  },
  {
    title: "Persiana Rolô Translúcida",
    description: "Praticidade e elegância com controle preciso da luminosidade para qualquer ambiente. Disponível em tecido translúcido e blackout.",
    image: roloTranslucida,
  },
  {
    title: "Persianas Blackout",
    description: "Bloqueio quase total da luz, ideal para quartos, salas de TV e ambientes que exigem máximo conforto visual.",
    image: roloBlackout,
  },
  {
    title: "Caixa Box 100% Escurecimento",
    description: "Sistema de caixa box que elimina a entrada de luz pelas laterais, proporcionando escurecimento total do ambiente. Ideal para quartos e home theaters.",
    image: caixaBox,
  },
  {
    title: "Persianas Verticais",
    description: "Ideal para grandes janelas e portas de vidro. Proporciona controle de luminosidade com um visual moderno e funcional. Disponível em PVC translúcida e blackout.",
    image: vertical,
  },
  {
    title: "Persiana Double Vision",
    description: "Design moderno com faixas translúcidas e opacas que permitem controle elegante da luminosidade e privacidade.",
    image: gallery1,
  },
  {
    title: "Persiana Romana Translúcida",
    description: "Modelo sofisticado com tecido translúcido que permite a entrada suave de luz, mantendo privacidade e elegância no ambiente.",
    image: romana,
  },
  {
    title: "Instalação Profissional",
    description: "Equipe técnica especializada para instalação segura de cortinas e persianas.",
    image: instalacao,
  },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="servicos" className="py-16 md:py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container max-w-6xl mx-auto px-6">
        <div data-animate className="text-center mb-12 md:mb-16">
          <p className="text-xs sm:text-sm font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground title-shimmer">
            Soluções para cada ambiente
          </h2>
          {/* Shipping badge */}
          <div className="mt-6 inline-flex items-center gap-2 bg-warm border border-primary/20 rounded-full px-5 py-2.5 shadow-sm">
            <Truck className="h-4 w-4 text-primary" strokeWidth={1.8} />
            <span className="text-sm font-body font-medium text-foreground/80">Enviamos para todo o Brasil</span>
          </div>
          <div className="mt-6">
            <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-gold-dark text-sm sm:text-base px-8 py-6 rounded-full shadow-[var(--shadow-glow)]">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar orçamento
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-animate
              data-animation="scale-in"
              className="group card-premium rounded-xl overflow-hidden bg-background"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-56 sm:h-60 md:h-68 overflow-hidden img-overlay">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-7">
                <h3 className="font-display text-lg md:text-xl font-semibold mb-2.5 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
