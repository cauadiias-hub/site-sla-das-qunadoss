import { useEffect, useRef } from "react";

type AnimationType = "fade-up" | "slide-up" | "slide-left" | "scale-in" | "count-up";

export function useScrollAnimation(animationType: AnimationType = "fade-up") {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const elements = el.querySelectorAll("[data-animate]");

    const animate = (target: HTMLElement) => {
      if (target.dataset.animated) return;
      target.dataset.animated = "true";
      const anim = target.dataset.animation || animationType;
      target.style.opacity = "1";
      target.classList.add(`animate-${anim}`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "50px 0px 0px 0px" }
    );

    // Small delay to ensure layout is ready
    requestAnimationFrame(() => {
      elements.forEach((child) => {
        const target = child as HTMLElement;
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50 && rect.bottom > 0) {
          animate(target);
        } else {
          observer.observe(target);
        }
      });
    });

    return () => observer.disconnect();
  }, [animationType]);

  return ref;
}
