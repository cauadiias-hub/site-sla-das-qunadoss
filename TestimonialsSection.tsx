import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=c50016dede84fb5a&hl=pt-BR&authuser=0&kgmid=%2Fg%2F11yfc0xksr&q=Ambienta%20Cortinas%20e%20Persianas&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F2&kgs=6b225c44aabc29ad";

const reviews = [
  {
    name: "Mariana S.",
    text: "Excelente atendimento! As persianas ficaram perfeitas, instalação rápida e profissional. Super recomendo a Ambienta!",
    date: "2 meses atrás",
  },
  {
    name: "Carlos R.",
    text: "Produtos de altíssima qualidade e preço justo. A equipe foi muito atenciosa desde o orçamento até a instalação.",
    date: "3 meses atrás",
  },
  {
    name: "Fernanda L.",
    text: "Transformaram minha sala com as cortinas sob medida. O resultado ficou lindo e sofisticado. Trabalho impecável!",
    date: "4 meses atrás",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 272 92" width="80" height="27" className="inline-block">
    <path
      d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      fill="#EA4335"
    />
    <path
      d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      fill="#FBBC05"
    />
    <path
      d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
      fill="#4285F4"
    />
    <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
    <path
      d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
      fill="#EA4335"
    />
    <path
      d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.21z"
      fill="#4285F4"
    />
  </svg>
);

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="depoimentos" className="py-16 md:py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div data-animate className="text-center mb-12 md:mb-16">
          <p className="text-xs sm:text-sm font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            O que nossos clientes dizem
          </h2>

          {/* Google Rating Badge */}
          <div data-animate className="inline-flex flex-col items-center gap-3 bg-card border border-border rounded-2xl px-8 py-5 shadow-sm">
            <GoogleLogo />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-bold text-foreground">5,0</span>
              <Stars />
            </div>
            <p className="text-sm text-muted-foreground">
              Baseado em <span className="font-semibold text-foreground">7 avaliações</span> no Google
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              data-animate
              data-animation="scale-in"
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <Stars />
              <p className="text-muted-foreground text-sm leading-relaxed font-light flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center gap-1.5 pt-2 border-t border-border">
                <svg viewBox="0 0 48 48" width="16" height="16">
                  <path fill="#4285F4" d="M24 9.5c3.54 0 6.36 1.22 8.73 3.22l6.5-6.5C35.09 2.67 30.05.5 24 .5 14.74.5 6.89 5.95 3.17 13.78l7.57 5.88C12.67 13.58 17.9 9.5 24 9.5z" />
                  <path fill="#34A853" d="M46.5 24.5c0-1.73-.15-3.39-.44-5H24v9.38h12.66c-.55 2.92-2.19 5.39-4.66 7.05l7.19 5.58C43.13 37.77 46.5 31.65 46.5 24.5z" />
                  <path fill="#FBBC05" d="M10.74 28.34A14.36 14.36 0 019.5 24.5c0-1.33.23-2.63.63-3.84L2.56 14.78A23.94 23.94 0 00.5 24.5c0 3.89.93 7.56 2.56 10.8l7.68-6.96z" />
                  <path fill="#EA4335" d="M24 47.5c6.05 0 11.13-2 14.84-5.45l-7.19-5.58c-2 1.34-4.56 2.13-7.65 2.13-5.88 0-10.87-3.97-12.65-9.34l-7.57 5.88C6.89 43.05 14.74 47.5 24 47.5z" />
                </svg>
                <span className="text-xs text-muted-foreground">Avaliação do Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div data-animate className="text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <GoogleLogo />
            <span>Ver todas as avaliações</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
