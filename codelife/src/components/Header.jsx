import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dna, Beaker, Microscope } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/', icon: Microscope },
    { name: 'DNA Básico', href: '/dna-basics', icon: Dna },
    { name: 'Engenharia Genética', href: '/genetic-engineering', icon: Beaker },
    { name: 'Zona Interativa', href: '/interactive-zone', icon: '🎮' },
    { name: 'Projeto Dragão', href: '/dragon-project', icon: '🐉' },
    { name: 'Laboratório Oceânico', href: '/ocean-lab', icon: '🌊' },
    { name: 'Comunidade', href: '/community', icon: '💬' },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Dna className="w-5 h-5 text-primary-foreground dna-helix" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CodeLife</h1>
              <p className="text-xs text-muted-foreground">Decifrando o Código da Vida</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const IconComponent = typeof item.icon === 'string' ? null : item.icon;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {IconComponent ? (
                    <IconComponent className="w-4 h-4" />
                  ) : (
                    <span className="text-sm">{item.icon}</span>
                  )}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const IconComponent = typeof item.icon === 'string' ? null : item.icon;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2 ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {IconComponent ? (
                      <IconComponent className="w-4 h-4" />
                    ) : (
                      <span className="text-sm">{item.icon}</span>
                    )}
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

