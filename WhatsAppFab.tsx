import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5541987433086?text=Olá! Gostaria de solicitar um orçamento.";

const WhatsAppFab = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20b858] rounded-full p-4 shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)] group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-background transition-transform duration-300 group-hover:rotate-12" />
    </a>
  );
};

export default WhatsAppFab;
