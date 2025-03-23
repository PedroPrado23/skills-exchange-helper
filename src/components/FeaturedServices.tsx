
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";
import { getFeaturedServices, getUserById, getCategoryById } from "@/lib/data";

const FeaturedServices: React.FC = () => {
  const featuredServices = getFeaturedServices();
  
  return (
    <section className="py-12 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Serviços em Destaque</h2>
          <p className="text-muted-foreground mt-2">
            Descubra habilidades e conhecimentos para trocar
          </p>
        </div>
        <Link to="/browse">
          <Button variant="outline" className="gap-2">
            Ver Todos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredServices.map((service) => {
          const user = getUserById(service.userId);
          const category = getCategoryById(service.categoryId);
          
          if (!user || !category) return null;
          
          return (
            <div 
              key={service.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${(parseInt(service.id.replace("service", "")) * 0.1) % 0.5}s` }}
            >
              <ServiceCard 
                service={service} 
                user={user} 
                category={category} 
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedServices;
