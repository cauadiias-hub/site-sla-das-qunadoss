import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const ref = useScrollAnimation("slide-up");

  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32 bg-warm particles-bg" ref={ref}>
      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        <div data-animate>
          <p className="text-xs sm:text-sm font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Sobre nós
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8 text-foreground title-shimmer">
            Sobre a Ambienta Cortinas e Persianas
          </h2>
          <div className="section-divider-animated mb-8 md:mb-10" />
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6 font-light max-w-3xl mx-auto">
            Com uma paixão por criar ambientes únicos e sofisticados, a Ambienta Cortinas e Persianas é sua parceira ideal para transformar cada espaço da sua casa.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6 font-light max-w-3xl mx-auto">
            A Ambienta Cortinas e Persianas é especializada em cortinas sob medida, persianas rolô, persianas blackout, persianas verticais e persianas motorizadas em Curitiba e região metropolitana. Atuamos com materiais de alta qualidade, acabamento impecável e instalação profissional para residências e empresas.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light max-w-3xl mx-auto">
            Atendemos Curitiba, São José dos Pinhais, Colombo, Pinhais, Araucária, Campo Largo, Paranaguá, Matinhos e Guaratuba. Solicite seu orçamento pelo WhatsApp e transforme seus ambientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
