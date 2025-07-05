import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Zap, Play, ArrowRight, Lightbulb, Microscope, Beaker, Dna, Target, Shield } from 'lucide-react';

const GeneticEngineering = () => {
  const [activeExample, setActiveExample] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [showQuizResult, setShowQuizResult] = useState(false);

  const examples = [
    {
      title: 'Insulina para Diabéticos',
      description: 'Cientistas colocaram o gene humano da insulina em bactérias, que agora produzem insulina para pessoas com diabetes!',
      icon: '💉',
      color: 'bg-blue-500'
    },
    {
      title: 'Plantas Resistentes',
      description: 'Plantas modificadas podem resistir a pragas e crescer em lugares secos, ajudando a alimentar mais pessoas!',
      icon: '🌱',
      color: 'bg-green-500'
    },
    {
      title: 'Peixes Brilhantes',
      description: 'Alguns peixes receberam genes de águas-vivas e agora brilham no escuro - como lanternas vivas!',
      icon: '🐠',
      color: 'bg-cyan-500'
    },
    {
      title: 'Medicamentos Especiais',
      description: 'Novos remédios são criados modificando células para combater doenças específicas de cada pessoa!',
      icon: '💊',
      color: 'bg-purple-500'
    }
  ];

  const handleQuizSubmit = () => {
    setShowQuizResult(true);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Scissors className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Engenharia Genética
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As Ferramentas dos Cientistas Modernos
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-primary" />
              O que é Engenharia Genética?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg mb-4">
                Lembra do <strong>livro gigante do DNA</strong> que aprendemos? A engenharia genética é como 
                ser um <strong>editor super especial</strong> desse livro! Os cientistas podem "corrigir erros", 
                "adicionar novas páginas" ou até mesmo "trocar receitas" entre diferentes seres vivos.
              </p>
              <p className="text-lg mb-4">
                É como se você pudesse pegar a "receita para voar" de um pássaro e colocar em outro animal, 
                ou pegar a "receita para ser forte" de um elefante e dar para uma planta!
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
                <p className="text-accent font-medium">
                  💡 <strong>Analogia:</strong> Se o DNA é como um documento no computador, a engenharia 
                  genética é como usar o "Ctrl+C" e "Ctrl+V" para copiar e colar partes entre diferentes documentos!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CRISPR Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Scissors className="w-6 h-6 mr-3 text-accent" />
            CRISPR: A Tesoura Molecular Mais Precisa do Mundo
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Como Funciona?</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                  <div>
                    <p><strong>Encontrar:</strong> O CRISPR encontra exatamente o pedaço do DNA que queremos mudar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold">2</div>
                  <div>
                    <p><strong>Cortar:</strong> Como uma tesoura super precisa, ele corta apenas onde deve</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">3</div>
                  <div>
                    <p><strong>Colar:</strong> Coloca um novo pedaço de DNA no lugar, como trocar uma peça de LEGO</p>
                  </div>
                </div>
              </div>
            </div>
              <div className="flex justify-center items-center">
                <img 
                  src="/images/crispr-scissors.png" 
                  alt="CRISPR como tesoura molecular" 
                  className="w-full max-w-md rounded-lg"
                />
              </div>          </div>
        </section>

        {/* Real World Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-primary" />
            Engenharia Genética na Vida Real
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {examples.map((example, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeExample === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveExample(activeExample === index ? null : index)}
              >
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${example.color} rounded-lg flex items-center justify-center mr-4`}>
                      <span className="text-2xl">{example.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{example.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Clique para saber mais...
                  </p>
                </div>
              </div>
            ))}
          </div>

          {activeExample !== null && (
            <div className="bg-card border border-border rounded-xl p-6 animate-in slide-in-from-bottom-4">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{examples[activeExample].icon}</span>
                <h3 className="text-xl font-semibold text-foreground">
                  {examples[activeExample].title}
                </h3>
              </div>
              <p className="text-muted-foreground">
                {examples[activeExample].description}
              </p>
            </div>
          )}
        </section>

        {/* Analogy with Text Editing */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Lightbulb className="w-6 h-6 mr-3 text-accent" />
              É Como Editar um Texto no Computador!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">No Computador:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✏️ <strong>Ctrl+F:</strong> Encontrar uma palavra específica</li>
                  <li>✂️ <strong>Ctrl+X:</strong> Cortar um pedaço do texto</li>
                  <li>📋 <strong>Ctrl+V:</strong> Colar em outro lugar</li>
                  <li>💾 <strong>Ctrl+S:</strong> Salvar as mudanças</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Com DNA:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🔍 <strong>CRISPR encontra:</strong> O gene específico que queremos</li>
                  <li>✂️ <strong>CRISPR corta:</strong> Remove o pedaço do DNA</li>
                  <li>🧬 <strong>CRISPR cola:</strong> Coloca um novo gene no lugar</li>
                  <li>🔬 <strong>Célula salva:</strong> A mudança fica permanente</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ethics Section */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              É Sempre Certo Usar Engenharia Genética?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">✅ Coisas Boas:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Curar doenças graves</li>
                  <li>• Criar alimentos mais nutritivos</li>
                  <li>• Ajudar plantas a crescer em lugares secos</li>
                  <li>• Produzir medicamentos importantes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">⚠️ Precisamos Pensar:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• É seguro para o meio ambiente?</li>
                  <li>• Todos terão acesso aos benefícios?</li>
                  <li>• Estamos respeitando a natureza?</li>
                  <li>• Quais podem ser os efeitos no futuro?</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-muted-foreground text-center">
                <strong>Lembre-se:</strong> Com grandes poderes vêm grandes responsabilidades! 
                Os cientistas sempre discutem muito antes de fazer mudanças importantes.
              </p>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Play className="w-6 h-6 mr-3 text-primary" />
              Teste seus Conhecimentos!
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Pergunta: O que é CRISPR?
                </h3>
                <div className="space-y-2">
                  {[
                    'Um tipo de biscoito',
                    'Uma tesoura molecular para editar DNA',
                    'Um animal modificado geneticamente',
                    'Um computador especial'
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="quiz"
                        value={option}
                        onChange={(e) => setQuizAnswer(e.target.value)}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-muted-foreground">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <button
                onClick={handleQuizSubmit}
                disabled={!quizAnswer}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verificar Resposta
              </button>
              
              {showQuizResult && (
                <div className={`p-4 rounded-lg ${
                  quizAnswer === 'Uma tesoura molecular para editar DNA' 
                    ? 'bg-green-100 border border-green-300 text-green-800' 
                    : 'bg-red-100 border border-red-300 text-red-800'
                }`}>
                  {quizAnswer === 'Uma tesoura molecular para editar DNA' ? (
                    <p>🎉 <strong>Correto!</strong> CRISPR é como uma tesoura molecular super precisa que pode cortar e editar o DNA!</p>
                  ) : (
                    <p>❌ <strong>Ops!</strong> A resposta correta é "Uma tesoura molecular para editar DNA". CRISPR é a ferramenta mais precisa que temos para editar genes!</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Pronto para Criar Algo Incrível?
            </h2>
            <p className="text-muted-foreground mb-8">
              Agora que você entende como funciona a engenharia genética, que tal descobrir se é possível criar um dragão?
            </p>
            <Link
              to="/dragon-project"
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors dragon-glow"
            >
              🐉 Explorar o Projeto Dragão
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GeneticEngineering;

