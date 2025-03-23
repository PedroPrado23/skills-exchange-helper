
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import CategoryBadge from "@/components/CategoryBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services, categories, getUserById, getCategoryById } from "@/lib/data";
import { Search, Clock, Filter } from "lucide-react";

const Browse: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredServices, setFilteredServices] = useState(services);
  
  // Get category from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location]);
  
  // Filter services based on search term and selected category
  useEffect(() => {
    let filtered = services;
    
    if (searchTerm) {
      filtered = filtered.filter(
        service => 
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(service => service.categoryId === selectedCategory);
    }
    
    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory]);
  
  return (
    <Layout className="pt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explorar Serviços</h1>
          <p className="text-muted-foreground">
            Descubra habilidades e serviços disponíveis para troca
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Buscar serviços..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedCategory ? "default" : "outline"}
              className="gap-2"
              onClick={() => setSelectedCategory(null)}
            >
              <Clock className="h-4 w-4" />
              <span>Todos</span>
            </Button>
            <Button
              variant="outline"
              className="gap-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filtros</span>
            </Button>
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 pb-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                className="rounded-full gap-2 whitespace-nowrap"
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
        
        {/* Results */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const user = getUserById(service.userId);
              const category = getCategoryById(service.categoryId);
              
              if (!user || !category) return null;
              
              return (
                <div key={service.id} className="animate-fade-in">
                  <ServiceCard 
                    service={service} 
                    user={user} 
                    category={category} 
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">Nenhum serviço encontrado</h3>
            <p className="text-muted-foreground">
              Tente ajustar seus filtros ou buscar por outros termos
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Browse;
