import React from 'react';
import { Heart, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Sobre o CodeLife</h3>
            <p className="text-muted-foreground text-sm">
              Um projeto educacional criado para despertar a curiosidade científica em crianças, 
              explorando os fascinantes mundos da genética e engenharia genética através de 
              jogos interativos e experiências educativas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/dna-basics" className="hover:text-foreground transition-colors">DNA Básico</a></li>
              <li><a href="/dragon-project" className="hover:text-foreground transition-colors">Projeto Dragão</a></li>
              <li><a href="/ocean-lab" className="hover:text-foreground transition-colors">Laboratório Oceânico</a></li>
              <li><a href="/interactive-zone" className="hover:text-foreground transition-colors">Zona Interativa</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contato@codelife.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Github className="w-4 h-4" />
                <span>github.com/codelife</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 CodeLife. Feito com <Heart className="w-4 h-4 inline text-red-500" /> para jovens cientistas.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            "Do DNA aos Dragões - Uma Aventura Científica"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

