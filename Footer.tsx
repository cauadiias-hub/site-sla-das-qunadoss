import { Instagram, Phone, MapPin, CreditCard, Facebook, MapPinned, Truck } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-background/10 py-10 md:py-14">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 items-start">
          {/* Logo e descrição */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-2">
              <img src={logo} alt="Ambienta Cortinas e Persianas" className="w-[160px] sm:w-[200px] brightness-0 invert" />
            </div>
            <p className="text-background/50 font-light text-sm leading-relaxed">
              Cortinas e Persianas sob medida em Curitiba e região. Qualidade, sofisticação e acabamento impecável.
            </p>
          </div>

          {/* Área de Atendimento */}
          <div>
            <h4 className="font-display text-xs font-semibold tracking-wider uppercase text-background mb-3 flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Atendimento
            </h4>
            <ul className="text-background/50 text-xs sm:text-sm space-y-1 font-light">
              <li>Curitiba</li>
              <li>São José dos Pinhais</li>
              <li>Colombo</li>
              <li>Pinhais</li>
              <li>Araucária</li>
              <li>Campo Largo</li>
              <li>Paranaguá</li>
              <li>Matinhos</li>
              <li>Guaratuba</li>
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div>
            <h4 className="font-display text-xs font-semibold tracking-wider uppercase text-background mb-3 flex items-center gap-2">
              <CreditCard className="h-3.5 w-3.5 text-primary" />
              Pagamento
            </h4>
            <ul className="text-background/50 text-xs sm:text-sm space-y-1 font-light">
              <li>Pix</li>
              <li>Cartão de crédito</li>
              <li>Cartão de débito</li>
              <li>Parcelamento</li>
              <li>Transferência bancária</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-xs font-semibold tracking-wider uppercase text-background mb-3">
              Contato
            </h4>
            <a
              href="https://wa.me/5541987433086"
              className="flex items-center gap-2 text-background/50 text-xs sm:text-sm mb-4 hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>(41) 98743-3086</span>
            </a>
            <h4 className="font-display text-xs font-semibold tracking-wider uppercase text-background mb-3">
              Redes Sociais
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/ambientacortinasepersianas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/50 text-xs sm:text-sm hover:text-primary transition-colors"
              >
                <Instagram className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">@ambientacortinasepersianas</span>
              </a>
              <a
                href="https://www.facebook.com/share/1CFquDHVrj/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/50 text-xs sm:text-sm hover:text-primary transition-colors"
              >
                <Facebook className="h-3.5 w-3.5" />
                Facebook
              </a>
              <a
                href="https://www.google.com/search?kgmid=%2Fg%2F11yfc0xksr&q=Ambienta+Cortinas+e+Persianas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/50 text-xs sm:text-sm hover:text-primary transition-colors"
              >
                <MapPinned className="h-3.5 w-3.5" />
                Google
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-background/10 border border-primary/20 rounded-full px-5 py-2.5">
            <Truck className="h-4 w-4 text-primary" strokeWidth={1.8} />
            <span className="text-sm font-body font-medium text-background/70">Enviamos para todo o Brasil</span>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-background/30 text-xs font-light">
            © {new Date().getFullYear()} Ambienta Cortinas e Persianas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
