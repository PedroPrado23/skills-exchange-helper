
import React from "react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { users, getServicesByUser, getCategoryById } from "@/lib/data";
import { Clock, Mail, Phone, Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Profile: React.FC = () => {
  // Flag para indicar se o usuário está autenticado (em uma aplicação real, isso viria de um contexto de autenticação)
  const isAuthenticated = false;
  
  // Se o usuário não estiver autenticado, mostrar tela de login/cadastro
  if (!isAuthenticated) {
    return (
      <Layout className="pt-24">
        <div className="max-w-md mx-auto text-center p-8">
          <h1 className="text-3xl font-bold mb-4">Acesse sua conta</h1>
          <p className="text-muted-foreground mb-8">
            Faça login ou crie uma conta para acessar seu perfil e começar a trocar serviços.
          </p>
          <div className="space-y-4">
            <Button className="w-full" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/signup">Criar Conta</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Mock user - in a real app, this would come from authentication
  const user = users[0];
  const userServices = getServicesByUser(user.id);
  
  return (
    <Layout className="pt-24">
      <div className="max-w-5xl mx-auto">
        <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            <Avatar className="h-24 w-24 md:h-32 md:w-32">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{user.name}</h1>
              <p className="text-muted-foreground mb-4">{user.bio}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">{user.rating}</span>
                  <span className="text-muted-foreground text-sm">(24 avaliações)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Membro desde Set 2023</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Mensagem</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Contato</span>
                </Button>
                <Button variant="default" size="sm">Propor Troca</Button>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="services" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="services">Serviços Oferecidos</TabsTrigger>
            <TabsTrigger value="history">Histórico de Trocas</TabsTrigger>
          </TabsList>
          <TabsContent value="services" className="pt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Meus Serviços</h2>
              <Button size="sm" variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                <span>Adicionar</span>
              </Button>
            </div>
            
            {userServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {userServices.map((service) => {
                  const category = getCategoryById(service.categoryId);
                  
                  if (!category) return null;
                  
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
                <h3 className="text-lg font-medium mb-2">Nenhum serviço oferecido</h3>
                <p className="text-muted-foreground mb-4">
                  Você ainda não oferece nenhum serviço para troca
                </p>
                <Button>Adicionar Serviço</Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="history" className="pt-6">
            <h2 className="text-xl font-bold mb-6">Histórico de Trocas</h2>
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Nenhuma troca realizada</h3>
              <p className="text-muted-foreground mb-4">
                Você ainda não realizou nenhuma troca de serviços
              </p>
              <Button>Explorar Serviços</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
