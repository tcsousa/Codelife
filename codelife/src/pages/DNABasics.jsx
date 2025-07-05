import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Zap, Play, ArrowRight, Lightbulb, Microscope, Heart, Brain, Dumbbell, Shield } from 'lucide-react';

const DNABasics = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [showQuizResult, setShowQuizResult] = useState(false);

  const cellTypes = [
    { name: 'Células do Cérebro', function: 'nos ajudam a pensar', icon: Brain, color: 'bg-orange-500' },
    { name: 'Células do Coração', function: 'fazem ele bater', icon: Heart, color: 'bg-red-500' },
    { name: 'Células dos Músculos', function: 'nos tornam fortes', icon: Dumbbell, color: 'bg-purple-500' },
    { name: 'Células da Pele', function: 'nos protegem', icon: Shield, color: 'bg-green-500' }
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
            <div className="dna-helix">🧬</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fundamentos do DNA
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O Manual de Instruções da Vida
          </p>
        </div>

        {/* Introduction - Body as Living Machine */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Microscope className="w-6 h-6 mr-3 text-primary" />
              Nosso Corpo: Uma Máquina Viva Gigante
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  Imagine que nosso corpo é como uma <strong>máquina viva gigante</strong> feita de 
                  bilhões de células, que são como <strong>tijolos vivos</strong> que constroem tudo em nós!
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Cada célula é uma unidade especial com seu próprio trabalho:
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {cellTypes.map((cell, index) => {
                    const IconComponent = cell.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                        <div className={`w-10 h-10 ${cell.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{cell.name}</p>
                          <p className="text-xs text-muted-foreground">{cell.function}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <img 
                  src="/images/body-machine-cells.png" 
                  alt="Corpo como máquina viva de células" 
                  className="w-full max-w-md rounded-lg"
                />
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-accent font-medium">
                💡 <strong>Curiosidade:</strong> Existem muitos tipos diferentes de células humanas, 
                cada uma com uma finalidade única. Seu corpo tem cerca de 37 trilhões de células!
              </p>
            </div>
          </div>
        </section>

        {/* DNA Hierarchy Visualization */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-primary" />
            A Hierarquia da Vida: De Células ao DNA
          </h2>
          
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex justify-center mb-8">
              <img 
                src="/images/cell-to-dna-hierarchy.png" 
                alt="Hierarquia de célula para DNA" 
                className="w-full max-w-4xl rounded-lg"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-semibold text-foreground mb-2">Células</h3>
                <p className="text-sm text-muted-foreground">Os tijolos vivos que constroem nosso corpo</p>
              </div>
              
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl mb-2">📦</div>
                <h3 className="font-semibold text-foreground mb-2">Cromossomos</h3>
                <p className="text-sm text-muted-foreground">Pacotinhos que organizam o DNA (23 pares)</p>
              </div>
              
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl mb-2">🧬</div>
                <h3 className="font-semibold text-foreground mb-2">DNA</h3>
                <p className="text-sm text-muted-foreground">O livro de instruções da vida</p>
              </div>
              
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl mb-2">📄</div>
                <h3 className="font-semibold text-foreground mb-2">Genes</h3>
                <p className="text-sm text-muted-foreground">Receitas especiais para características</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is DNA? */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              🧬 O que é DNA?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg mb-4">
                Dentro de cada célula, há um <strong>manual de instruções</strong> chamado DNA, 
                escrito com "letras mágicas" chamadas <strong>bases nitrogenadas</strong> (A, T, C e G). 
              </p>
              <p className="text-lg mb-4">
                Esse manual tem "páginas" chamados <strong>genes</strong>, que dizem coisas como a cor 
                do seu cabelo ou como você cresce. E para manter tudo organizado, o DNA é guardado em 
                <strong>cromossomos</strong>, como capítulos de um livro — cada célula humana tem 46 deles!
              </p>
              <p className="text-lg">
                Assim, as células, com seus cromossomos, genes e DNA, trabalham juntas para fazer 
                nosso corpo funcionar direitinho!
              </p>
            </div>
          </div>
        </section>

        {/* DNA Fun Fact */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              🌌 Curiosidade Incrível sobre o DNA!
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Cada célula do seu corpo tem um fio de DNA que, se esticado, mediria uns <strong>2 metros</strong>. 
                Se somarmos o DNA de todas as células do seu corpo, que são cerca de <strong>37 trilhões de células</strong>, 
                teríamos um fio de comprimento total de cerca de <strong>74 trilhões de metros de DNA</strong>! 
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Isso é o suficiente para sair da Terra, passar por <strong>Marte, Júpiter, Saturno, Urano</strong> 
                e chegar até <strong>Netuno</strong>, o planeta azul mais distante do Sol. E mesmo depois de chegar lá, 
                o barbante ainda seria tão comprido que daria para <strong>voltar para a Terra e fazer isso várias vezes!</strong> 🚀
              </p>
              <div className="mt-6 p-4 bg-white/50 rounded-lg flex justify-center">
                <img 
                  src="/images/planetas.png" 
                  alt="Sequência dos planetas do sistema solar" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Sections - Reorganized */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            🔍 Explore Cada Conceito
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                id: 'dna',
                title: 'O que é DNA?',
                icon: '📖',
                preview: 'O livro de instruções da vida...',
                image: '/images/dna-book-concept.png',
                content: `O DNA é como um livro gigante de instruções que está dentro de cada célula do seu corpo! 

Este livro mágico contém todas as informações sobre como você é: a cor dos seus olhos, a altura que você vai ter, como seu corpo funciona, e muito mais.

Imagine que é um manual super especial que diz para cada parte do seu corpo como crescer e funcionar direitinho. É por isso que você se parece com seus pais - porque você herdou partes do "livro" deles!`
              },
              {
                id: 'chromosomes',
                title: 'O que são Cromossomos?',
                icon: '📚',
                preview: 'Os capítulos do livro...',
                image: '/images/chromosomes-chapters.png',
                content: `O livrão de instruções é muito grande, então ele é dividido em partes menores para ficar mais fácil de organizar. Essas partes são como capítulos do livro, e cada capítulo é um cromossomo.

Dentro de cada cromossomo, estão muitos genes, ou seja, muitas receitas juntinhas. Nos seres humanos, temos 23 pares de cromossomos, como se fossem 23 pares de capítulos no nosso livrão.

Você pode imaginar os cromossomos como pacotinhos que guardam pedaços do DNA de forma organizada.`
              },
              {
                id: 'genes',
                title: 'O que são Genes?',
                icon: '🍳',
                preview: 'As receitas dentro do livro...',
                image: '/images/genes-recipes.png',
                content: `Dentro desse livrão de instruções chamado DNA, existem várias receitas. Cada receita ensina como fazer uma coisa especial, como a cor dos seus olhos, o tipo do seu cabelo ou até como o seu corpo luta contra um resfriado. Essas receitas são os genes!

Cada gene é uma partezinha do DNA que tem as instruções para criar uma característica única em você.

Pensa assim: o DNA é o livro todo, os cromossomos são os capítulos, e os genes são as receitas mais legais dentro de cada capítulo!`
              },
              {
                id: 'bases',
                title: 'Bases Nitrogenadas',
                icon: '🔤',
                preview: 'As letrinhas mágicas A, T, C, G...',
                image: '/images/bases-letters.png',
                content: `As bases nitrogenadas são como as letrinhas (A, T, C, G) que escrevem as receitas do DNA!

Pensa no DNA como uma escada em espiral bem comprida. Cada degrau dessa escada é feito por um par de bases nitrogenadas:
• A sempre se conecta com T
• C sempre se conecta com G

É como se fossem casais de dança que nunca se separam! Essas letrinhas formam o código que diz ao seu corpo como funcionar. São as letras mágicas que escrevem todas as receitas da vida!`
              }
            ].map((section, index) => (
              <div
                key={section.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === section.id ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              >
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{section.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {activeSection === section.id ? 'Clique para fechar...' : section.preview}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {activeSection && (
            <div className="bg-card border border-border rounded-xl p-6 animate-in slide-in-from-bottom-4">
              {[
                {
                  id: 'dna',
                  image: '/images/dna-book-concept.png',
                  content: `O DNA é como um livro gigante de instruções que está dentro de cada célula do seu corpo! 

Este livro mágico contém todas as informações sobre como você é: a cor dos seus olhos, a altura que você vai ter, como seu corpo funciona, e muito mais.

Imagine que é um manual super especial que diz para cada parte do seu corpo como crescer e funcionar direitinho. É por isso que você se parece com seus pais - porque você herdou partes do "livro" deles!`
                },
                {
                  id: 'chromosomes',
                  image: '/images/chromosomes-chapters.png',
                  content: `O livrão de instruções é muito grande, então ele é dividido em partes menores para ficar mais fácil de organizar. Essas partes são como capítulos do livro, e cada capítulo é um cromossomo.

Dentro de cada cromossomo, estão muitos genes, ou seja, muitas receitas juntinhas. Nos seres humanos, temos 23 pares de cromossomos, como se fossem 23 pares de capítulos no nosso livrão.

Você pode imaginar os cromossomos como pacotinhos que guardam pedaços do DNA de forma organizada.`
                },
                {
                  id: 'genes',
                  image: '/images/genes-recipes.png',
                  content: `Dentro desse livrão de instruções chamado DNA, existem várias receitas. Cada receita ensina como fazer uma coisa especial, como a cor dos seus olhos, o tipo do seu cabelo ou até como o seu corpo luta contra um resfriado. Essas receitas são os genes!

Cada gene é uma partezinha do DNA que tem as instruções para criar uma característica única em você.

Pensa assim: o DNA é o livro todo, os cromossomos são os capítulos, e os genes são as receitas mais legais dentro de cada capítulo!

A quantidade de genes necessários para expressar características físicas em seres vivos não é universal. Para algumas características simples, como certas cores de pelagem ou padrões de escamas, um ou poucos genes podem ser suficientes. Já para características complexas, como tamanho do corpo ou forma, dezenas ou até centenas de genes podem estar envolvidos, trabalhando em conjunto com fatores ambientais.`
                },
                {
                  id: 'bases',
                  image: '/images/bases-letters.png',
                  content: `As bases nitrogenadas são como as letrinhas (A, T, C, G) que escrevem as receitas do DNA!

Pense no DNA como uma escada em espiral bem comprida. Cada degrau dessa escada é feito por um par de bases nitrogenadas: • A sempre se conecta com T • C sempre se conecta com G

É como se fossem casais de dança que nunca se separam! Essas letrinhas formam o código que diz ao seu corpo como funcionar. São as letras mágicas que escrevem todas as receitas da vida!

Você sabia que um único gene pode conter milhares de pares de bases nitrogenadas?`
                }
              ].filter(item => item.id === activeSection).map(item => (
                <div key={item.id}>
                  <div className="flex justify-center mb-6">
                    <img 
                      src={item.image} 
                      alt={`Ilustração de ${activeSection}`} 
                      className="w-full max-w-md rounded-lg"
                    />
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    {item.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* The 4 Letters of Life */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-accent" />
            As 4 Letras do Alfabeto da Vida
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { letter: 'A', name: 'Adenina', connects: 'T', color: 'bg-red-500' },
              { letter: 'T', name: 'Timina', connects: 'A', color: 'bg-blue-500' },
              { letter: 'G', name: 'Guanina', connects: 'C', color: 'bg-green-500' },
              { letter: 'C', name: 'Citosina', connects: 'G', color: 'bg-yellow-500' }
            ].map((base, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${base.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-3xl font-bold text-white">{base.letter}</span>
                </div>
                <h3 className="font-semibold text-foreground">{base.name}</h3>
                <p className="text-sm text-muted-foreground">Conecta com: {base.connects}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              📚 Resumindo Tudo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">🧬</div>
                  <div>
                    <p className="font-semibold text-foreground">DNA:</p>
                    <p className="text-muted-foreground text-sm">O livrão de instruções que está nas suas células e diz como seu corpo funciona.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold">📦</div>
                  <div>
                    <p className="font-semibold text-foreground">Cromossomos:</p>
                    <p className="text-muted-foreground text-sm">Os capítulos do livrão que organizam os genes.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">📄</div>
                  <div>
                    <p className="font-semibold text-foreground">Genes:</p>
                    <p className="text-muted-foreground text-sm">As receitas dentro do livrão que ensinam a fazer coisas como a cor dos seus olhos.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-sm font-bold">🔤</div>
                  <div>
                    <p className="font-semibold text-foreground">Bases nitrogenadas:</p>
                    <p className="text-muted-foreground text-sm">As letrinhas (A, T, C, G) que escrevem as receitas.</p>
                  </div>
                </div>
              </div>
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
                  Pergunta: Quantos pares de cromossomos temos?
                </h3>
                <div className="space-y-2">
                  {[
                    '46 pares',
                    '23 pares',
                    '10 pares',
                    '100 pares'
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
                  quizAnswer === '23 pares' 
                    ? 'bg-green-100 border border-green-300 text-green-800' 
                    : 'bg-red-100 border border-red-300 text-red-800'
                }`}>
                  {quizAnswer === '23 pares' ? (
                    <p>🎉 <strong>Correto!</strong> Temos 23 pares de cromossomos, como 23 pares de capítulos no nosso livrão da vida!</p>
                  ) : (
                    <p>❌ <strong>Ops!</strong> A resposta correta é "23 pares". Cada célula humana tem 23 pares de cromossomos, totalizando 46 cromossomos!</p>
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
              Agora que Você Entende o DNA...
            </h2>
            <p className="text-muted-foreground mb-8">
              Que tal descobrir como os cientistas podem "editar" esse livro da vida?
            </p>
            <Link
              to="/genetic-engineering"
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              ⚗️ Explorar Engenharia Genética
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DNABasics;

