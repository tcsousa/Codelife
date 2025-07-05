import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dna, Beaker, Microscope, Sparkles, AlertTriangle, X } from 'lucide-react';

const Home = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  const features = [
    {
      title: 'DNA Básico',
      description: 'Descubra os segredos do código da vida de forma simples e divertida',
      icon: Dna,
      href: '/dna-basics',
      color: 'bg-blue-500'
    },
    {
      title: 'Engenharia Genética',
      description: 'Aprenda como os cientistas podem "editar" o livro da vida',
      icon: Beaker,
      href: '/genetic-engineering',
      color: 'bg-green-500'
    },
    {
      title: 'Projeto Dragão',
      description: 'Seria possível criar um dragão usando engenharia genética?',
      icon: '🐉',
      href: '/dragon-project',
      color: 'bg-orange-500',
      featured: true
    },
    {
      title: 'Laboratório Oceânico',
      description: 'Como salvar os oceanos com algas inteligentes',
      icon: '🌊',
      href: '/ocean-lab',
      color: 'bg-cyan-500'
    },
    {
      title: 'Zona Interativa',
      description: 'Jogos e simuladores para aprender brincando',
      icon: '🎮',
      href: '/interactive-zone',
      color: 'bg-purple-500'
    },
    {
      title: 'Comunidade',
      description: 'Conecte-se com outros jovens cientistas',
      icon: '💬',
      href: '/community',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Educational Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-amber-800 mb-2">📚 Aviso Educacional Importante</h4>
                </div>
                <button
                  onClick={() => setShowDisclaimer(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Fechar aviso"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="text-sm text-amber-700 space-y-3">
                <p>
                  <strong>Este projeto educacional contém simplificações científicas</strong> para facilitar o entendimento de crianças e jovens que estão tendo os primeiros contatos com genética e engenharia genética.
                </p>
                
                <p>
                  Os conceitos apresentados são baseados em ciência real, mas foram adaptados para fins educacionais. 
                  <strong> Um conhecimento mais preciso e completo requer estudos mais aprofundados</strong> em biologia molecular, genética e biotecnologia.
                </p>
                
                <p className="text-xs">
                  💡 <em>Recomendamos consultar livros didáticos, artigos científicos e professores especializados para aprofundar seus conhecimentos!</em>
                </p>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowDisclaimer(false)}
                  className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Entendi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Dna className="w-20 h-20 text-primary dna-helix" />
                <Sparkles className="w-8 h-8 text-accent absolute -top-2 -right-2 gene-pulse" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              CodeLife
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Decifrando o Código da Vida
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Do DNA aos Dragões - Uma Aventura Científica para jovens exploradores descobrirem 
              os mistérios da genética e engenharia genética através de jogos interativos e 
              experiências educativas fascinantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/dragon-project"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors dragon-glow"
              >
                🐉 Projeto Dragão
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/dna-basics"
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                <Microscope className="w-5 h-5 mr-2" />
                Começar Aprendendo
              </Link>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={() => setShowDisclaimer(true)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 hover:border-amber-400 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <AlertTriangle className="w-4 h-4 mr-2 text-amber-600" />
                Aviso Educacional
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore o Mundo da Genética
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra como funciona o código da vida através de experiências interativas 
              e projetos fascinantes criados especialmente para jovens cientistas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = typeof feature.icon === 'string' ? null : feature.icon;
              
              return (
                <Link
                  key={index}
                  to={feature.href}
                  className={`group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                    feature.featured ? 'ring-2 ring-accent dragon-glow' : ''
                  }`}
                >
                  {feature.featured && (
                    <div className="absolute -top-3 left-6 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Destaque
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mr-4`}>
                      {IconComponent ? (
                        <IconComponent className="w-6 h-6 text-white" />
                      ) : (
                        <span className="text-2xl">{feature.icon}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium">
                    Explorar
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3.2B</div>
              <div className="text-muted-foreground">Letras no DNA humano</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">20,000+</div>
              <div className="text-muted-foreground">Genes no corpo humano</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">∞</div>
              <div className="text-muted-foreground">Possibilidades de criação</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

