import React, { useState } from 'react';
import { Droplets, Recycle, Shield, Sparkles, RotateCcw, Beaker, Microscope, Waves } from 'lucide-react';

const OceanLab = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedGenes, setSelectedGenes] = useState([]);
  const [createdAlgae, setCreatedAlgae] = useState(null);
  const [points, setPoints] = useState(parseInt(localStorage.getItem('codelife-points') || '0'));

  const specializations = [
    {
      id: 'metal-remover',
      name: 'Removedora de Metais',
      description: 'Remove metais pesados como mercúrio, chumbo e cádmio',
      icon: Shield,
      color: 'from-gray-500 to-gray-700',
      image: '/images/algae-metal-remover.png',
      scientificBasis: 'Genes de biossorção de algas marinhas naturais',
      mechanism: 'Alginatos e polissacarídeos capturam íons metálicos'
    },
    {
      id: 'plastic-eater',
      name: 'Comedora de Plástico',
      description: 'Degrada microplásticos e fragmentos de PET',
      icon: Recycle,
      color: 'from-green-500 to-green-700',
      image: '/images/algae-plastic-eater.png',
      scientificBasis: 'Enzimas degradadoras de polímeros plásticos',
      mechanism: 'Enzimas quebram plásticos em moléculas inofensivas'
    },
    {
      id: 'water-purifier',
      name: 'Purificadora Geral',
      description: 'Purifica água através de múltiplos mecanismos',
      icon: Droplets,
      color: 'from-blue-500 to-blue-700',
      image: '/images/algae-water-purifier.png',
      scientificBasis: 'Combinação de biossorção, bioacumulação e biodegradação',
      mechanism: 'Três processos simultâneos de biorremediação'
    }
  ];

  const geneLibrary = {
    'metal-remover': [
      { 
        id: 'ALG1', 
        symbol: '/symbols/purification_alginate_symbol.png',
        function: 'Produção de alginatos', 
        source: 'Algas pardas marinhas',
        scientificBasis: 'Genes que codificam enzimas para síntese de alginatos'
      },
      { 
        id: 'POL2', 
        symbol: '/symbols/purification_biosorption_symbol.png',
        function: 'Polissacarídeos quelantes', 
        source: 'Kelp gigante',
        scientificBasis: 'Genes para produção de polissacarídeos com propriedades quelantes'
      },
      { 
        id: 'BIO3', 
        symbol: '/symbols/purification_biosorption_symbol.png',
        function: 'Sítios de biossorção', 
        source: 'Sargassum',
        scientificBasis: 'Genes que criam sítios específicos para captura de metais'
      }
    ],
    'plastic-eater': [
      { 
        id: 'ENZ1', 
        symbol: '/symbols/purification_enzyme_symbol.png',
        function: 'Enzimas PETase', 
        source: 'Bactérias degradadoras',
        scientificBasis: 'Genes que codificam enzimas capazes de quebrar PET'
      },
      { 
        id: 'POL4', 
        symbol: '/symbols/purification_enzyme_symbol.png',
        function: 'Polimerases modificadas', 
        source: 'Microalgas adaptadas',
        scientificBasis: 'Genes para enzimas que processam polímeros plásticos'
      },
      { 
        id: 'CAR5', 
        symbol: '/symbols/purification_biosorption_symbol.png',
        function: 'Metabolismo de carbono', 
        source: 'Chlorella vulgaris',
        scientificBasis: 'Genes para metabolizar carbono de plásticos degradados'
      }
    ],
    'water-purifier': [
      { 
        id: 'BIO6', 
        symbol: '/symbols/purification_biosorption_symbol.png',
        function: 'Biossorção ampla', 
        source: 'Spirulina platensis',
        scientificBasis: 'Genes para biossorção de múltiplos contaminantes'
      },
      { 
        id: 'ACC7', 
        symbol: '/symbols/purification_biosorption_symbol.png',
        function: 'Bioacumulação', 
        source: 'Dunaliella salina',
        scientificBasis: 'Genes que permitem acúmulo seguro de toxinas'
      },
      { 
        id: 'DEG8', 
        symbol: '/symbols/purification_enzyme_symbol.png',
        function: 'Biodegradação', 
        source: 'Nannochloropsis',
        scientificBasis: 'Genes para degradação enzimática de poluentes'
      }
    ]
  };

  const algaeNames = {
    'metal-remover': 'Metallophagus marinus',
    'plastic-eater': 'Plastivorus oceanicus',
    'water-purifier': 'Purificans universalis'
  };

  const createAlgae = () => {
    if (!selectedSpecialization || selectedGenes.length !== 3) return;

    const newAlgae = {
      specialization: selectedSpecialization,
      genes: selectedGenes,
      name: algaeNames[selectedSpecialization],
      image: specializations.find(s => s.id === selectedSpecialization)?.image,
      capabilities: specializations.find(s => s.id === selectedSpecialization)?.description,
      scientificBasis: specializations.find(s => s.id === selectedSpecialization)?.scientificBasis
    };

    setCreatedAlgae(newAlgae);
    const newPoints = points + 250;
    setPoints(newPoints);
    localStorage.setItem('codelife-points', newPoints.toString());
  };

  const resetLab = () => {
    setSelectedSpecialization('');
    setSelectedGenes([]);
    setCreatedAlgae(null);
  };

  const toggleGene = (gene) => {
    setSelectedGenes(prev => {
      if (prev.find(g => g.id === gene.id)) {
        return prev.filter(g => g.id !== gene.id);
      } else if (prev.length < 3) {
        return [...prev, gene];
      }
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-cyan-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Waves className="w-12 h-12 mr-4" />
            <h1 className="text-4xl font-bold">Laboratório Oceânico</h1>
          </div>
          <p className="text-xl mb-6">Crie algas geneticamente modificadas para limpar os oceanos</p>
          <div className="bg-blue-700/50 rounded-lg p-4 max-w-4xl mx-auto">
            <p className="text-lg">
              🧬 Use ciência real para desenvolver algas purificadoras baseadas em organismos existentes
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Pontuação */}
        <div className="text-center mb-8">
          <div className="bg-blue-800/50 rounded-lg p-4 inline-block">
            <div className="flex items-center">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-white text-xl font-bold">{points} pontos</span>
            </div>
          </div>
        </div>

        {/* Alga Criada */}
        {createdAlgae && (
          <div className="bg-gradient-to-r from-cyan-800 to-blue-800 rounded-lg p-6 mb-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">🌊 Sua Alga Purificadora Criada!</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <img 
                  src={createdAlgae.image} 
                  alt={createdAlgae.name}
                  className="w-64 h-64 mx-auto rounded-lg shadow-lg mb-4"
                />
                <h4 className="text-xl font-bold text-cyan-200">{createdAlgae.name}</h4>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">📋 Características:</h4>
                <p className="mb-3"><strong>Capacidade:</strong> {createdAlgae.capabilities}</p>
                <p className="mb-3"><strong>Base Científica:</strong> {createdAlgae.scientificBasis}</p>
                
                <h4 className="text-lg font-semibold mb-3">🧬 Sequências Genéticas:</h4>
                <div className="space-y-2">
                  {createdAlgae.genes.map((gene, index) => (
                    <div key={index} className="bg-blue-700/50 p-3 rounded">
                      <div className="font-mono text-cyan-200">{gene.sequence}</div>
                      <div className="text-sm">{gene.function} ({gene.source})</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Seleção de Especialização */}
        <div className="bg-blue-800/30 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            <Beaker className="w-8 h-8 inline mr-2" />
            Escolha a Especialização da Alga
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {specializations.map((spec) => {
              const IconComponent = spec.icon;
              return (
                <div
                  key={spec.id}
                  className={`cursor-pointer rounded-lg p-6 transition-all duration-300 ${
                    selectedSpecialization === spec.id
                      ? 'bg-gradient-to-br ' + spec.color + ' text-white scale-105 shadow-lg'
                      : 'bg-blue-700/50 text-white hover:bg-blue-700/70'
                  }`}
                  onClick={() => {
                    setSelectedSpecialization(spec.id);
                    setSelectedGenes([]);
                  }}
                >
                  <div className="text-center">
                    <IconComponent className="w-12 h-12 mx-auto mb-3" />
                    <h4 className="text-lg font-bold mb-2">{spec.name}</h4>
                    <p className="text-sm mb-3">{spec.description}</p>
                    <div className="text-xs bg-black/20 rounded p-2">
                      <strong>Base:</strong> {spec.scientificBasis}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Seleção de Genes */}
        {selectedSpecialization && (
          <div className="bg-blue-800/30 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <Microscope className="w-8 h-8 inline mr-2" />
              Selecione 3 Sequências Genéticas
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {geneLibrary[selectedSpecialization]?.map((gene) => (
                <div
                  key={gene.id}
                  className={`cursor-pointer rounded-lg p-4 transition-all duration-300 ${
                    selectedGenes.find(g => g.id === gene.id)
                      ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white scale-105 shadow-lg'
                      : 'bg-blue-700/50 text-white hover:bg-blue-700/70'
                  }`}
                  onClick={() => toggleGene(gene)}
                >
                  <div className="text-center">
                    <div className="font-mono text-lg font-bold mb-2 text-cyan-200">
                      {gene.sequence}
                    </div>
                    <div className="text-sm font-semibold mb-1">{gene.function}</div>
                    <div className="text-xs opacity-80">Fonte: {gene.source}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-white mb-4">
                Genes selecionados: {selectedGenes.length}/3
              </p>
              
              <div className="space-x-4">
                <button
                  onClick={createAlgae}
                  disabled={selectedGenes.length !== 3}
                  className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                    selectedGenes.length === 3
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  🧬 Criar Alga Purificadora (+250 pts)
                </button>
                
                <button
                  onClick={resetLab}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <RotateCcw className="w-5 h-5 inline mr-2" />
                  Reiniciar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Informações Científicas */}
        <div className="bg-blue-800/30 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            🔬 Base Científica Real
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="bg-blue-700/50 rounded-lg p-4">
              <h4 className="font-bold mb-2 text-cyan-200">🛡️ Remoção de Metais Pesados</h4>
              <p className="text-sm">
                Algas marinhas naturalmente removem mercúrio, chumbo e cádmio através de 
                biossorção usando alginatos e polissacarídeos em suas paredes celulares.
              </p>
            </div>
            
            <div className="bg-blue-700/50 rounded-lg p-4">
              <h4 className="font-bold mb-2 text-green-200">♻️ Degradação de Plásticos</h4>
              <p className="text-sm">
                Pesquisas mostram que algas podem produzir enzimas que quebram microplásticos 
                e PET, usando os produtos da degradação como fonte de carbono.
              </p>
            </div>
            
            <div className="bg-blue-700/50 rounded-lg p-4">
              <h4 className="font-bold mb-2 text-blue-200">💧 Purificação de Água</h4>
              <p className="text-sm">
                Algas realizam biorremediação através de três mecanismos: biossorção, 
                bioacumulação e biodegradação de poluentes orgânicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OceanLab;

