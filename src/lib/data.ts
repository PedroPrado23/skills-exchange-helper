
import { Clock, Laptop, Music, BookOpen, Briefcase, Home, Heart, Camera, Scissors, Wrench, Bike, ChefHat } from "lucide-react";

export type CategoryType = {
  id: string;
  name: string;
  icon: any;
};

export const categories: CategoryType[] = [
  { id: "education", name: "Educação", icon: BookOpen },
  { id: "technology", name: "Tecnologia", icon: Laptop },
  { id: "music", name: "Música", icon: Music },
  { id: "professional", name: "Serviços Profissionais", icon: Briefcase },
  { id: "domestic", name: "Tarefas Domésticas", icon: Home },
  { id: "health", name: "Saúde e Bem-estar", icon: Heart },
  { id: "art", name: "Arte e Fotografia", icon: Camera },
  { id: "beauty", name: "Beleza", icon: Scissors },
  { id: "repair", name: "Consertos", icon: Wrench },
  { id: "transportation", name: "Transporte", icon: Bike },
  { id: "food", name: "Gastronomia", icon: ChefHat },
];

export type ServiceType = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  duration: number;
  userId: string;
  image: string;
};

export type UserType = {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  rating: number;
  services: string[];
};

export const users: UserType[] = [
  {
    id: "user1",
    name: "Mariana Silva",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Professora de música e jardineira nas horas vagas",
    rating: 4.9,
    services: ["service1", "service7"]
  },
  {
    id: "user2",
    name: "Carlos Mendes",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Programador e consertador de bicicletas",
    rating: 4.7,
    services: ["service2", "service8"]
  },
  {
    id: "user3",
    name: "Ana Oliveira",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Cozinheira profissional e tutora de matemática",
    rating: 4.8,
    services: ["service3", "service9"]
  },
  {
    id: "user4",
    name: "Paulo Santos",
    avatar: "https://i.pravatar.cc/150?img=7",
    bio: "Fotógrafo e mecânico amador",
    rating: 4.6,
    services: ["service4", "service10"]
  },
  {
    id: "user5",
    name: "Juliana Costa",
    avatar: "https://i.pravatar.cc/150?img=9",
    bio: "Designer gráfica e instrutora de yoga",
    rating: 4.9,
    services: ["service5", "service11"]
  },
  {
    id: "user6",
    name: "Roberto Almeida",
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "Advogado e professor de violão",
    rating: 4.8,
    services: ["service6", "service12"]
  }
];

export const services: ServiceType[] = [
  {
    id: "service1",
    title: "Aulas de Violão",
    description: "Aulas de violão para iniciantes e intermediários. Aprenda a tocar suas músicas favoritas.",
    categoryId: "music",
    duration: 60,
    userId: "user1",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service2",
    title: "Desenvolvimento de Sites",
    description: "Criação de sites responsivos e modernos para seu negócio ou projeto pessoal.",
    categoryId: "technology",
    duration: 120,
    userId: "user2",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service3",
    title: "Aulas de Culinária",
    description: "Aprenda receitas deliciosas e técnicas de cozinha com uma chef experiente.",
    categoryId: "food",
    duration: 90,
    userId: "user3",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service4",
    title: "Sessão de Fotos",
    description: "Sessão fotográfica profissional para retratos, eventos ou produtos.",
    categoryId: "art",
    duration: 60,
    userId: "user4",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service5",
    title: "Design Gráfico",
    description: "Criação de logos, banners e materiais gráficos para sua marca.",
    categoryId: "professional",
    duration: 120,
    userId: "user5",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service6",
    title: "Consultoria Jurídica",
    description: "Orientação jurídica para questões cotidianas e documentos básicos.",
    categoryId: "professional",
    duration: 60,
    userId: "user6",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service7",
    title: "Jardinagem",
    description: "Cuidados com plantas, jardins e hortas domésticas.",
    categoryId: "domestic",
    duration: 120,
    userId: "user1",
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service8",
    title: "Manutenção de Bicicletas",
    description: "Consertos, ajustes e revisão completa da sua bicicleta.",
    categoryId: "repair",
    duration: 90,
    userId: "user2",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service9",
    title: "Aulas de Matemática",
    description: "Reforço escolar e preparação para vestibulares em matemática.",
    categoryId: "education",
    duration: 60,
    userId: "user3",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service10",
    title: "Mecânica Básica",
    description: "Reparos simples em automóveis e motos.",
    categoryId: "repair",
    duration: 120,
    userId: "user4",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service11",
    title: "Aulas de Yoga",
    description: "Sessões de yoga para equilíbrio físico e mental.",
    categoryId: "health",
    duration: 60,
    userId: "user5",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&q=80&w=500&h=350&fit=crop"
  },
  {
    id: "service12",
    title: "Aulas de Violão Avançado",
    description: "Técnicas avançadas, teoria musical e composição no violão.",
    categoryId: "music",
    duration: 90,
    userId: "user6",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&q=80&w=500&h=350&fit=crop"
  }
];

export const getCategoryById = (id: string): CategoryType | undefined => {
  return categories.find(category => category.id === id);
};

export const getUserById = (id: string): UserType | undefined => {
  return users.find(user => user.id === id);
};

export const getServiceById = (id: string): ServiceType | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (categoryId: string): ServiceType[] => {
  return services.filter(service => service.categoryId === categoryId);
};

export const getServicesByUser = (userId: string): ServiceType[] => {
  return services.filter(service => service.userId === userId);
};

export const getFeaturedServices = (count: number = 6): ServiceType[] => {
  return services.slice(0, count);
};
