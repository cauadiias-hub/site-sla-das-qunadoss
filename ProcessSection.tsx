import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  { num: "01", title: "Entre em contato", desc: "Fale conosco pelo WhatsApp ou telefone." },
  { num: "02", title: "Entendemos sua necessidade", desc: "Avaliamos o ambiente e suas preferências." },
  { num: "03", title: "Indicamos a melhor solução", desc: "Apresentamos opções personalizadas." },
  { num: "04", title: "Instalação profissional", desc: "Realizamos a instalação com excelência." },
];

const ProcessSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-warm" ref={ref}>
      <div className="container max-w-5xl mx-auto px-6">
        <div data-animate className="text-center mb-12 md:mb-16">
          <p className="text-xs sm:text-sm font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Processo
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground title-shimmer">
            Como funciona
          </h2>
          <div className="section-divider-animated mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {steps.map((step, i) => (
            <div
              key={step.num}
              data-animate
              data-animation="count-up"
              className="text-center group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gradient block mb-3 md:mb-4 transition-transform duration-500 group-hover:scale-110">
                {step.num}
              </span>
              <h3 className="font-display text-base md:text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground font-light text-xs sm:text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
