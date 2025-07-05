import React, { useState } from 'react';
import { Flame, Snowflake, Plane, Mountain, Shield, Zap, Dna, Sparkles, RotateCcw } from 'lucide-react';

const DragonProject = () => {
  const [selectedTraits, setSelectedTraits] = useState({
    size: '',
    element: '',
    flight: '',
    defense: ''
  });
  const [createdDragon, setCreatedDragon] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [points, setPoints] = useState(0);

  // Mapeamento de características genéticas com símbolos visuais
  const geneticTraits = {
    size: {
      small: { 
        symbol: '/symbols/size_small_symbol.png',
        description: 'Genes de aves pequenas (beija-flor) - estrutura compacta e ágil',
        scientificBasis: 'Genes que controlam fatores de crescimento limitado'
      },
      large: { 
        symbol: '/symbols/size_large_symbol.png',
        description: 'Genes de grandes mamíferos (elefante) - crescimento robusto',
        scientificBasis: 'Genes que promovem crescimento acelerado e estrutura robusta'
      }
    },
    element: {
      fire: { 
        symbol: '/symbols/element_fire_symbol.png',
        description: 'Genes do escaravelho bombardeiro - produção de químicos quentes',
        scientificBasis: 'Genes para produção de compostos termogênicos'
      },
      ice: { 
        symbol: '/symbols/element_ice_symbol.png',
        description: 'Genes de peixes antárticos - proteínas anticongelantes',
        scientificBasis: 'Genes para crioproteção e resistência ao frio'
      }
    },
    flight: {
      winged: { 
        symbol: '/symbols/flight_winged_symbol.png',
        description: 'Genes de morcegos e pterossauros - ossos pneumáticos para voo',
        scientificBasis: 'Genes para desenvolvimento de estruturas de voo'
      },
      ground: { 
        symbol: '/symbols/movement_ground_symbol.png',
        description: 'Genes de répteis terrestres - músculos poderosos para terra',
        scientificBasis: 'Genes para força muscular e locomoção terrestre'
      }
    },
    defense: {
      scales: { 
        symbol: '/symbols/defense_scales_crocodile_symbol.png',
        description: 'Genes de tartarugas e crocodilos - escamas resistentes',
        scientificBasis: 'Genes para desenvolvimento de armadura natural'
      },
      spikes: { 
        symbol: '/symbols/defense_spikes_symbol.png',
        description: 'Genes de porco-espinho e estegossauro - espinhos defensivos',
        scientificBasis: 'Genes para crescimento de estruturas defensivas pontiagudas'
      }
    }
  };

  // Mapeamento de imagens para cada combinação
  const dragonImages = {
    'small-fire-winged-scales': '/images/dragon-small-fire-winged-scales.png',
    'small-fire-winged-spikes': '/images/dragon-small-fire-winged-spikes.png',
    'small-fire-ground-scales': '/images/dragon-small-fire-ground-scales.png',
    'small-fire-ground-spikes': '/images/dragon-small-fire-ground-spikes.png',
    'small-ice-winged-scales': '/images/dragon-small-ice-winged-scales.png',
    'small-ice-winged-spikes': '/images/dragon-small-ice-winged-spikes.png',
    'small-ice-ground-scales': '/images/dragon-small-ice-ground-scales.png',
    'small-ice-ground-spikes': '/images/dragon-small-ice-ground-spikes.png',
    'large-fire-winged-scales': '/images/dragon-large-fire-winged-scales.png',
    'large-fire-winged-spikes': '/images/dragon-large-fire-winged-spikes.png',
    'large-fire-ground-scales': '/images/dragon-large-fire-ground-scales.png',
    'large-fire-ground-spikes': '/images/dragon-large-fire-ground-spikes.png',
    'large-ice-winged-scales': '/images/dragon-large-ice-winged-scales.png',
    'large-ice-winged-spikes': '/images/dragon-large-ice-winged-spikes.png',
    'large-ice-ground-scales': '/images/dragon-large-ice-ground-scales.png',
    'large-ice-ground-spikes': '/images/dragon-large-ice-ground-spikes.png'
  };

  // Nomes épicos para os dragões
  const dragonNames = {
    'small-fire-winged-scales': 'Pyrion, o Guardião das Chamas',
    'small-fire-winged-spikes': 'Ignis, o Espinho Ardente',
    'small-fire-ground-scales': 'Ember, o Protetor Terrestre',
    'small-fire-ground-spikes': 'Blaze, o Guerreiro Espinhoso',
    'small-ice-winged-scales': 'Glacius, o Senhor do Gelo',
    'small-ice-winged-spikes': 'Frost, o Espinho Gelado',
    'small-ice-ground-scales': 'Crystal, o Guardião Glacial',
    'small-ice-ground-spikes': 'Icicle, o Defensor Congelado',
    'large-fire-winged-scales': 'Infernus, o Titã das Chamas',
    'large-fire-winged-spikes': 'Volcano, o Colosso Espinhoso',
    'large-fire-ground-scales': 'Magma, o Gigante Terrestre',
    'large-fire-ground-spikes': 'Titan, o Devastador Flamejante',
    'large-ice-winged-scales': 'Blizzard, o Imperador Gelado',
    'large-ice-winged-spikes': 'Avalanche, o Colosso de Gelo',
    'large-ice-ground-scales': 'Glacier, o Titã Congelado',
    'large-ice-ground-spikes': 'Iceberg, o Gigante dos Espinhos'
  };

  const handleTraitSelection = (category, value) => {
    setSelectedTraits(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const createDragon = () => {
    if (Object.values(selectedTraits).every(trait => trait !== '')) {
      const dragonKey = `${selectedTraits.size}-${selectedTraits.element}-${selectedTraits.flight}-${selectedTraits.defense}`;
      const dragonData = {
        name: dragonNames[dragonKey],
        image: dragonImages[dragonKey],
        traits: selectedTraits,
        sequences: {
          size: geneticSequences.size[selectedTraits.size],
          element: geneticSequences.element[selectedTraits.element],
          flight: geneticSequences.flight[selectedTraits.flight],
          defense: geneticSequences.defense[selectedTraits.defense]
        }
      };
      setCreatedDragon(dragonData);
      setPoints(prev => prev + 200);
    }
  };

  const resetLab = () => {
    setSelectedTraits({
      size: '',
      element: '',
      flight: '',
      defense: ''
    });
    setCreatedDragon(null);
  };

  const allTraitsSelected = Object.values(selectedTraits).every(trait => trait !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-purple-500/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Dna className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">🐉 Projeto Dragão</h1>
                <p className="text-purple-200">Laboratório de Criação Genética</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500/20 px-4 py-2 rounded-lg border border-yellow-500/30">
                <span className="text-yellow-300 font-semibold">⭐ {points} pontos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Instruções */}
        <div className="mb-8">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>{showInstructions ? 'Ocultar' : 'Ver'} Instruções</span>
          </button>

          {showInstructions && (
            <div className="mt-4 bg-purple-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">🧬 Como Criar Seu Dragão:</h3>
              <div className="space-y-3 text-purple-100">
                <p>• <strong>Escolha 4 características:</strong> Tamanho, Elemento, Voo e Defesa</p>
                <p>• <strong>Cada característica</strong> é determinada por sequências genéticas baseadas em animais reais</p>
                <p>• <strong>Combine os genes</strong> para criar dragões únicos com poderes especiais</p>
                <p>• <strong>Descubra</strong> como a genética real inspira criaturas fantásticas!</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Laboratório de Criação */}
          <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Dna className="w-6 h-6 text-purple-400" />
              <span>Laboratório Genético</span>
            </h2>

            <div className="space-y-6">
              {/* Tamanho */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <span>📏 Tamanho</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleTraitSelection('size', 'small')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTraits.size === 'small'
                        ? 'border-green-400 bg-green-400/20 text-green-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-green-400/50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">🐲</div>
                      <div className="font-semibold">Pequeno</div>
                      <div className="text-sm opacity-75">ATG</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleTraitSelection('size', 'large')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTraits.size === 'large'
                        ? 'border-green-400 bg-green-400/20 text-green-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-green-400/50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">🐉</div>
                      <div className="font-semibold">Grande</div>
                      <div className="text-sm opacity-75">GCA</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Elemento */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <span>⚡ Elemento</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleTraitSelection('element', 'fire')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTraits.element === 'fire'
                        ? 'border-red-400 bg-red-400/20 text-red-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-red-400/50'
                    }`}
                  >
                    <div className="text-center">
                      <Flame className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-semibold">Fogo</div>
                      <div className="text-sm opacity-75">TAC</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleTraitSelection('element', 'ice')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTraits.element === 'ice'
                        ? 'border-blue-400 bg-blue-400/20 text-blue-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-blue-400/50'
                    }`}
                  >
                    <div className="text-center">
                      <Snowflake className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-semibold">Gelo</div>
                      <div className="text-sm opacity-75">CGT</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Voo */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <span>🪶 Capacidade de Voo</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleTraitSelection('flight', 'winged')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTraits.flight === 'winged'
                        ? 'border-purple-400 bg-purple-400/20 text-purple-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-purple-400/50'
                    }`}
                  >
                    <div className="text-center">
                      <Plane className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-semibold">Alado</div>
                      <div className="text-sm opacity-75">GAT</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleTraitSelection('flight', 'ground')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTraits.flight === 'ground'
                        ? 'border-purple-400 bg-purple-400/20 text-purple-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-purple-400/50'
                    }`}
                  >
                    <div className="text-center">
                      <Mountain className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-semibold">Terrestre</div>
                      <div className="text-sm opacity-75">CTA</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Defesa */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <span>🛡️ Defesa</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleTraitSelection('defense', 'scales')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTraits.defense === 'scales'
                        ? 'border-yellow-400 bg-yellow-400/20 text-yellow-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-yellow-400/50'
                    }`}
                  >
                    <div className="text-center">
                      <Shield className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-semibold">Escamas</div>
                      <div className="text-sm opacity-75">ATC</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleTraitSelection('defense', 'spikes')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTraits.defense === 'spikes'
                        ? 'border-yellow-400 bg-yellow-400/20 text-yellow-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-yellow-400/50'
                    }`}
                  >
                    <div className="text-center">
                      <Zap className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-semibold">Espinhos</div>
                      <div className="text-sm opacity-75">TAG</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={createDragon}
                  disabled={!allTraitsSelected}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    allTraitsSelected
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  🧬 Criar Dragão
                </button>
                <button
                  onClick={resetLab}
                  className="px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Resultado */}
          <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span>Seu Dragão Criado</span>
            </h2>

            {createdDragon ? (
              <div className="space-y-6">
                {/* Imagem do Dragão */}
                <div className="text-center">
                  <img
                    src={createdDragon.image}
                    alt={createdDragon.name}
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                  />
                </div>

                {/* Nome e Características */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{createdDragon.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                      {createdDragon.traits.size === 'small' ? 'Pequeno' : 'Grande'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      createdDragon.traits.element === 'fire' 
                        ? 'bg-red-500/20 text-red-300' 
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {createdDragon.traits.element === 'fire' ? 'Fogo' : 'Gelo'}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {createdDragon.traits.flight === 'winged' ? 'Alado' : 'Terrestre'}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                      {createdDragon.traits.defense === 'scales' ? 'Escamas' : 'Espinhos'}
                    </span>
                  </div>
                </div>

                {/* Sequências Genéticas */}
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">🧬 Sequências Genéticas:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Tamanho:</span>
                      <span className="text-green-300 font-mono">{createdDragon.sequences.size.sequence}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Elemento:</span>
                      <span className="text-red-300 font-mono">{createdDragon.sequences.element.sequence}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Voo:</span>
                      <span className="text-purple-300 font-mono">{createdDragon.sequences.flight.sequence}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Defesa:</span>
                      <span className="text-yellow-300 font-mono">{createdDragon.sequences.defense.sequence}</span>
                    </div>
                  </div>
                </div>

                {/* Base Científica */}
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">🔬 Base Científica:</h4>
                  <div className="space-y-2 text-sm text-blue-100">
                    <p><strong>Tamanho:</strong> {createdDragon.sequences.size.description}</p>
                    <p><strong>Elemento:</strong> {createdDragon.sequences.element.description}</p>
                    <p><strong>Voo:</strong> {createdDragon.sequences.flight.description}</p>
                    <p><strong>Defesa:</strong> {createdDragon.sequences.defense.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🧬</div>
                <p className="text-gray-400 text-lg">Selecione todas as características para criar seu dragão!</p>
                <p className="text-gray-500 text-sm mt-2">
                  Escolha: Tamanho, Elemento, Voo e Defesa
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Informações Científicas */}
        <div className="mt-8 bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
            <Dna className="w-6 h-6 text-purple-400" />
            <span>Como a Genética Real Inspira Dragões Fantásticos</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-purple-100">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">🔥 Elementos Baseados em Animais Reais:</h3>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Fogo:</strong> Escaravelho bombardeiro ejeta químicos quentes</li>
                <li>• <strong>Gelo:</strong> Peixes antárticos produzem proteínas anticongelantes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">🛡️ Defesas da Natureza:</h3>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Escamas:</strong> Proteção de crocodilos e tartarugas</li>
                <li>• <strong>Espinhos:</strong> Defesa de porcos-espinhos e estegossauros</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">🪶 Adaptações para Voo:</h3>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Ossos pneumáticos:</strong> Aves e pterossauros</li>
                <li>• <strong>Membranas de voo:</strong> Morcegos e dragões de Komodo planadores</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">📏 Variação de Tamanho:</h3>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Genes de crescimento:</strong> Determinam tamanho em mamíferos</li>
                <li>• <strong>Hormônios:</strong> Controlam desenvolvimento corporal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonProject;

