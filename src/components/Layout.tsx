
import React from "react";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Navbar />
      <main className={cn("flex-1 px-4 sm:px-6 md:px-8 py-6 max-w-7xl mx-auto w-full", className)}>
        {children}
      </main>
      <footer className="py-6 px-4 sm:px-6 md:px-8 border-t bg-secondary/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-medium text-lg">TrocaTempo</h3>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Conectando pessoas, valorizando o tempo de cada um
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-standard">
              Sobre
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-standard">
              Como Funciona
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-standard">
              Contato
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrocaTempo
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
