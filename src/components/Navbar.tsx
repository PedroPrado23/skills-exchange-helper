
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-standard py-4 px-4 sm:px-6 md:px-8",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-medium text-lg">
          <Clock className="h-6 w-6 text-primary" />
          <span>TrocaTempo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-foreground/80 hover:text-foreground transition-standard"
          >
            Início
          </Link>
          <Link
            to="/browse"
            className="text-foreground/80 hover:text-foreground transition-standard"
          >
            Explorar
          </Link>
          <Link
            to="/how-it-works"
            className="text-foreground/80 hover:text-foreground transition-standard"
          >
            Como Funciona
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/profile">
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              <User size={16} />
              <span>Perfil</span>
            </Button>
          </Link>
          <Link to="/browse">
            <Button size="sm" className="rounded-full">
              Trocar Serviços
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background pt-16 px-4 md:hidden animate-slide-in">
            <nav className="flex flex-col gap-6 py-8">
              <Link
                to="/"
                className="text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/browse"
                className="text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explorar
              </Link>
              <Link
                to="/how-it-works"
                className="text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Como Funciona
              </Link>
              <Link
                to="/profile"
                className="text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Perfil
              </Link>
              <hr className="border-border my-2" />
              <Link
                to="/browse"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full">Trocar Serviços</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
