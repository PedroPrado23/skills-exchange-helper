
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import { categories } from "@/lib/data";
import { Clock, ArrowRight, Users, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="pt-16">
        <Hero />
        
        {/* Categories Section */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
            Categorias de Serviços
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link 
                key={category.id} 
                to={`/browse?category=${category.id}`}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center p-4 border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-standard">
                  <category.icon className="h-8 w-8 mb-2 text-primary" />
                  <span className="text-sm font-medium text-center">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        <FeaturedServices />
        
        {/* How It Works Section */}
        <section className="py-12 md:py-20 bg-secondary/50 rounded-3xl my-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-12">
              Como Funciona
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Ofereça seu Tempo</h3>
                <p className="text-muted-foreground">
                  Cadastre suas habilidades, talentos e serviços que você pode oferecer.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Conecte-se</h3>
                <p className="text-muted-foreground">
                  Encontre pessoas que oferecem o que você precisa e combine trocas de serviços.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <RefreshCw className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Troque Serviços</h3>
                <p className="text-muted-foreground">
                  Realize a troca baseada em tempo - uma hora de serviço por uma hora de outro serviço.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/how-it-works">
                <Button className="gap-2">
                  Saiba Mais
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Pronto para começar a trocar serviços?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a nossa comunidade e descubra como o seu tempo pode ser valioso para outras pessoas.
          </p>
          <Link to="/browse">
            <Button size="lg" className="rounded-full">
              Explorar Agora
            </Button>
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
