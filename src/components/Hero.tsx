
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Uma nova maneira de compartilhar habilidades</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Seu tempo é valioso. <br />
          <span className="text-primary">Troque-o</span> por aquilo que precisa.
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Conectamos pessoas para trocar serviços baseados em tempo. 
          Uma hora de aula de violão pode ser trocada por uma hora de jardinagem.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/browse">
            <Button size="lg" className="rounded-full gap-2">
              Explorar Serviços
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/how-it-works">
            <Button variant="outline" size="lg" className="rounded-full">
              Como Funciona
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
