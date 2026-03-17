import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/5541987433086?text=Olá! Gostaria de solicitar um orçamento.";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_2px_30px_-10px_hsl(40_30%_50%/0.15)] py-0"
          : "bg-transparent py-1"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#inicio" className="block shrink-0 -my-8 md:-my-8">
          <img
            src={logo}
            alt="Ambienta Cortinas e Persianas"
            className={`transition-all duration-500 ${scrolled ? "w-[130px] md:w-[170px]" : "w-[160px] md:w-[250px] brightness-0 invert"}`}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link-effect text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-foreground" : "text-background"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="btn-glow bg-primary text-primary-foreground hover:bg-gold-dark rounded-full px-6"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Orçamento
            </a>
          </Button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-background"}`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t animate-fade-in">
          <nav className="container py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-foreground font-medium py-3 px-4 rounded-lg hover:bg-warm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="btn-glow bg-primary text-primary-foreground hover:bg-gold-dark mt-3 py-6 text-base rounded-full"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
