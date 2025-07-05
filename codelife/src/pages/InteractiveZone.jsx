import React, { useState } from 'react';
import { Play, Trophy, Star, RotateCcw, CheckCircle, XCircle, Gamepad2, Dna, Eye, Palette, HelpCircle, Info, ArrowRight, AlertTriangle } from 'lucide-react';

const InteractiveZone = () => {
  const [currentGame, setCurrentGame] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [showInstructions, setShowInstructions] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  // Animal Genetics Lab State
  const [selectedAnimal, setSelectedAnimal] = useState('cat');
  const [animalGenes, setAnimalGenes] = useState({
    eyeColor: '',
    furColor: ''
  });

  // DNA Pairing Game State
  const [dnaStrand1, setDnaStrand1] = useState(['A', 'T', 'G', 'C', 'A']);
  const [dnaStrand2, setDnaStrand2] = useState(['', '', '', '', '']);
  const [pairingComplete, setPairingComplete] = useState(false);
  const [pairingErrors, setPairingErrors] = useState([]);

  // Animal Designer State
  const [targetAnimal, setTargetAnimal] = useState(null);
  const [playerGenes, setPlayerGenes] = useState({});
  const [designComplete, setDesignComplete] = useState(false);

  // Using visual symbols instead of base sequences for better scientific accuracy
  const animals = {
    cat: {
      name: 'Gato',
      emoji: '🐱',
      image: '/images/cat-realistic.png',
      traits: {
        eyeColor: {
          'blue_eyes': { 
            color: 'azuis', 
            symbol: '/symbols/eye_blue_symbol.png', 
            description: 'Olhos azuis brilhantes',
            scientificBasis: 'Genes que controlam a produção de melanina na íris'
          },
          'green_eyes': { 
            color: 'verdes', 
            symbol: '/symbols/eye_green_symbol.png', 
            description: 'Olhos verdes intensos',
            scientificBasis: 'Combinação específica de melanina e lipocromos'
          }
        },
        furColor: {
          'black_fur': { 
            color: 'preta', 
            symbol: '/symbols/fur_black_symbol.png', 
            description: 'Pelagem preta brilhante',
            scientificBasis: 'Alta produção de eumelanina'
          },
          'white_fur': { 
            color: 'branca', 
            symbol: '/symbols/fur_white_symbol.png', 
            description: 'Pelagem branca pura',
            scientificBasis: 'Ausência ou inibição da produção de melanina'
          }
        }
      }
    },
    dog: {
      name: 'Cachorro',
      emoji: '🐶',
      image: '/images/dog-realistic.png',
      traits: {
        eyeColor: {
          'brown_eyes': { 
            color: 'castanhos', 
            symbol: '/symbols/eye_brown_symbol_corrected.png', 
            description: 'Olhos castanhos calorosos',
            scientificBasis: 'Alta concentração de melanina na íris'
          },
          'green_eyes': { 
            color: 'verdes', 
            symbol: '/symbols/eye_green_symbol.png', 
            description: 'Olhos verdes únicos',
            scientificBasis: 'Combinação rara de pigmentos na íris'
          }
        },
        furColor: {
          'golden_fur': { 
            color: 'dourada', 
            symbol: '/symbols/fur_golden_symbol.png', 
            description: 'Pelagem dourada brilhante',
            scientificBasis: 'Produção moderada de feomelanina'
          },
          'black_fur': { 
            color: 'preta', 
            symbol: '/symbols/fur_black_symbol.png', 
            description: 'Pelagem preta elegante',
            scientificBasis: 'Dominância de genes para eumelanina'
          }
        }
      }
    },
    horse: {
      name: 'Cavalo',
      emoji: '🐴',
      image: '/images/horse-realistic.png',
      traits: {
        eyeColor: {
          'brown_eyes': { 
            color: 'castanhos', 
            symbol: '/symbols/eye_brown_symbol_corrected.png', 
            description: 'Olhos castanhos profundos',
            scientificBasis: 'Pigmentação rica em melanina'
          },
          'blue_eyes': { 
            color: 'azuis', 
            symbol: '/symbols/eye_blue_symbol.png', 
            description: 'Olhos azuis raros',
            scientificBasis: 'Redução de melanina na íris'
          }
        },
        furColor: {
          'brown_fur': { 
            color: 'marrom', 
            symbol: '/symbols/fur_brown_symbol.png', 
            description: 'Pelagem marrom clássica',
            scientificBasis: 'Equilíbrio de eumelanina e feomelanina'
          },
          'white_fur': { 
            color: 'branca', 
            symbol: '/symbols/fur_white_symbol.png', 
            description: 'Pelagem branca majestosa',
            scientificBasis: 'Genes que inibem a produção de pigmentos'
          }
        }
      }
    }
  };

  // Updated specific animal images for new trait combinations
  const specificAnimalImages = {
    // Cats
    'cat-blue_eyes-black_fur': '/images/cat-blue-black.png',    // Azul + Preta
    'cat-blue_eyes-white_fur': '/images/cat-blue-white.png',    // Azul + Branca
    'cat-green_eyes-black_fur': '/images/cat-green-black.png',   // Verde + Preta
    'cat-green_eyes-white_fur': '/images/cat-green-white.png',   // Verde + Branca
    
    // Dogs
    'dog-brown_eyes-golden_fur': '/images/dog-brown-golden.png',  // Castanho + Dourada
    'dog-brown_eyes-black_fur': '/images/dog-brown-black.png',   // Castanho + Preta
    'dog-green_eyes-golden_fur': '/images/dog-green-golden.png',  // Verde + Dourada
    'dog-green_eyes-black_fur': '/images/dog-green-black.png',   // Verde + Preta
    
    // Horses
    'horse-brown_eyes-brown_fur': '/images/horse-brown-brown.png',  // Castanho + Marrom
    'horse-brown_eyes-white_fur': '/images/horse-brown-white.png',  // Castanho + Branca
    'horse-blue_eyes-brown_fur': '/images/horse-blue-brown.png',   // Azul + Marrom
    'horse-blue_eyes-white_fur': '/images/horse-blue-white.png'    // Azul + Branca
  };

  const games = [
    {
      id: 'animal-genetics',
      title: 'Laboratório de Genética Animal',
      icon: <Eye className="w-8 h-8" />,
      description: 'Descubra como sequências genéticas determinam características dos animais',
      difficulty: 'Iniciante',
      points: 100,
        instructions: [
          'Escolha um animal (gato, cachorro ou cavalo)',
          'Cada característica é determinada por uma sequência genética (sequência de 3 bases: A, T, G, C)',
          'Selecione sequências para cor dos olhos e pelagem',
          'Veja como diferentes sequências criam animais únicos!',
          'Experimente todas as combinações possíveis'
        ]  },
    {
      id: 'dna-pairing',
      title: 'Pareamento de DNA',
      icon: <Dna className="w-8 h-8" />,
      description: 'Complete a dupla hélice respeitando as regras científicas A-T e C-G',
      difficulty: 'Intermediário',
      points: 150,
      instructions: [
        '🧬 Observe a primeira fita de DNA com suas bases',
        '🔗 Complete a segunda fita seguindo as regras de pareamento:',
        '   • A (vermelho) sempre se conecta com T (verde)',
        '   • T (verde) sempre se conecta com A (vermelho)',
        '   • G (azul) sempre se conecta com C (amarelo)',
        '   • C (amarelo) sempre se conecta com G (azul)',
        '🖱️ Clique nos números abaixo de cada base para completar',
        '✅ Acerte todas as conexões para ganhar pontos!'
      ]
    },
    {
      id: 'animal-designer',
      title: 'Designer de Animais',
      icon: <Palette className="w-8 h-8" />,
      description: 'Recrie animais específicos usando as sequências genéticas corretas',
      difficulty: 'Avançado',
      points: 200,
      instructions: [
        '🎯 Veja o animal alvo com suas características específicas',
        '🧬 Use as sequências genéticas corretas para recriar cada característica',
        '📋 Consulte a tabela de referência para descobrir as sequências',
        '🧠 Use seu conhecimento dos jogos anteriores para deduzir',
        '🏆 Complete todas as características para ganhar!'
      ]
    }
  ];

  const baseColors = {
    'A': 'bg-red-500 text-white',
    'T': 'bg-green-500 text-white', 
    'G': 'bg-blue-500 text-white',
    'C': 'bg-yellow-500 text-black'
  };

  const basePairs = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' };

  const generateRandomSequence = (length) => {
    const bases = ['A', 'T', 'G', 'C'];
    return Array.from({length}, () => bases[Math.floor(Math.random() * 4)]);
  };

  const generateTargetAnimal = () => {
    const animalTypes = Object.keys(animals);
    const randomAnimal = animalTypes[Math.floor(Math.random() * animalTypes.length)];
    const animal = animals[randomAnimal];
    
    const traits = Object.keys(animal.traits);
    const targetTraits = {};
    
    traits.forEach(trait => {
      const sequences = Object.keys(animal.traits[trait]);
      const randomSeq = sequences[Math.floor(Math.random() * sequences.length)];
      targetTraits[trait] = {
        sequence: randomSeq,
        ...animal.traits[trait][randomSeq]
      };
    });

    return {
      type: randomAnimal,
      name: animal.name,
      emoji: animal.emoji,
      image: animal.image,
      traits: targetTraits
    };
  };

  const getAnimalImage = (animalType, traits) => {
    // Check for specific combinations first
    const eyeColorSeq = traits.eyeColor;
    const furColorSeq = traits.furColor;
    
    if (eyeColorSeq && furColorSeq) {
      const specificKey = `${animalType}-${eyeColorSeq}-${furColorSeq}`;
      
      if (specificAnimalImages[specificKey]) {
        return specificAnimalImages[specificKey];
      }
    }
    
    // Return default animal image
    return animals[animalType].image;
  };

  const getTargetAnimalImage = (targetAnimal) => {
    if (!targetAnimal) return null;
    
    const eyeColorSeq = targetAnimal.traits.eyeColor.sequence;
    const furColorSeq = targetAnimal.traits.furColor.sequence;
    const specificKey = `${targetAnimal.type}-${eyeColorSeq}-${furColorSeq}`;
    
    if (specificAnimalImages[specificKey]) {
      return specificAnimalImages[specificKey];
    }
    
    return animals[targetAnimal.type].image;
  };

  const checkAnimalTraits = () => {
    const animal = animals[selectedAnimal];
    const results = {};
    
    Object.keys(animalGenes).forEach(trait => {
      const sequence = animalGenes[trait];
      if (sequence && animal.traits[trait] && animal.traits[trait][sequence]) {
        results[trait] = animal.traits[trait][sequence];
      }
    });
    
    return results;
  };

  const setGeneSequence = (trait, sequence) => {
    setAnimalGenes(prev => ({
      ...prev,
      [trait]: sequence
    }));
  };

  const isAnimalComplete = () => {
    const animal = animals[selectedAnimal];
    const requiredTraits = Object.keys(animal.traits);
    return requiredTraits.every(trait => animalGenes[trait] !== '');
  };

  const completeDNAPairing = (index, base) => {
    const newStrand2 = [...dnaStrand2];
    newStrand2[index] = base;
    setDnaStrand2(newStrand2);

    // Check for errors
    const errors = [];
    newStrand2.forEach((base, i) => {
      if (base && base !== basePairs[dnaStrand1[i]]) {
        errors.push(i);
      }
    });
    setPairingErrors(errors);

    // Check if complete and correct
    if (newStrand2.every(base => base !== '') && errors.length === 0) {
      setPairingComplete(true);
      setUserPoints(prev => prev + 150);
      addAchievement('DNA Master', 'Completou o pareamento de DNA corretamente!');
    }
  };

  const resetDNAPairing = () => {
    const newStrand1 = generateRandomSequence(5);
    setDnaStrand1(newStrand1);
    setDnaStrand2(['', '', '', '', '']);
    setPairingComplete(false);
    setPairingErrors([]);
  };

  const checkAnimalDesign = () => {
    if (!targetAnimal) return false;
    
    const allTraitsMatch = Object.keys(targetAnimal.traits).every(trait => {
      return playerGenes[trait] === targetAnimal.traits[trait].sequence;
    });
    
    if (allTraitsMatch && !designComplete) {
      setDesignComplete(true);
      setUserPoints(prev => prev + 200);
      addAchievement('Animal Designer', 'Recriou um animal perfeitamente!');
    }
    
    return allTraitsMatch;
  };

  const resetAnimalDesigner = () => {
    setTargetAnimal(generateTargetAnimal());
    setPlayerGenes({});
    setDesignComplete(false);
  };

  const addAchievement = (title, description) => {
    const newAchievement = { id: Date.now(), title, description };
    setAchievements(prev => [...prev, newAchievement]);
  };

  const renderDisclaimer = () => {
    return null; // Aviso agora está apenas na página inicial
  };

  const renderInstructions = (gameId) => {
    const game = games.find(g => g.id === gameId);
    if (!game) return null;

    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-5 h-5 text-blue-600" />
          <h4 className="font-semibold text-blue-800">Como Jogar:</h4>
        </div>
        <ul className="space-y-1 text-sm text-blue-700">
          {game.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
        <button
          onClick={() => setShowInstructions(false)}
          className="mt-3 text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          Entendi, vamos jogar! <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    );
  };

  const renderAnimalGenetics = () => (
    <div className="space-y-6">
      {showInstructions && renderInstructions('animal-genetics')}
      
      <div className="text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">Laboratório de Genética Animal</h3>
        <p className="text-muted-foreground">Descubra como sequências genéticas determinam características dos animais</p>
      </div>

      {/* Animal Selection */}
      <div className="bg-card border border-border p-4 rounded-lg">
        <h4 className="font-semibold mb-3">Escolha um Animal:</h4>
        <div className="flex gap-4 justify-center flex-wrap">
          {Object.entries(animals).map(([key, animal]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedAnimal(key);
                setAnimalGenes({ eyeColor: '', furColor: '' });
              }}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedAnimal === key 
                  ? 'border-primary bg-primary/10' 
                  : 'border-muted hover:border-primary/50'
              }`}
            >
              <img src={animal.image} alt={animal.name} className="w-16 h-16 mx-auto mb-2 object-contain" />
              <div className="font-medium">{animal.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Gene Selection */}
      <div className="bg-card border border-border p-4 rounded-lg">
        <h4 className="font-semibold mb-3">Selecione as Sequências Genéticas:</h4>
        <div className="space-y-4">
          {Object.entries(animals[selectedAnimal].traits).map(([trait, options]) => (
            <div key={trait}>
              <h5 className="font-medium mb-2 capitalize">
                {trait === 'eyeColor' ? 'Cor dos Olhos' : 'Cor da Pelagem'}:
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Object.entries(options).map(([sequence, result]) => (
                  <button
                    key={sequence}
                    onClick={() => setGeneSequence(trait, sequence)}
                    className={`p-3 rounded border text-sm transition-all ${
                      animalGenes[trait] === sequence
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-muted hover:border-primary/50'
                    }`}
                  >
                    <div className="font-mono font-bold mb-1 text-lg">{sequence}</div>
                    <div className="flex items-center gap-2 justify-center">
                      <span className="text-lg">{result.emoji}</span>
                      <span className="text-xs">{result.color}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results - Only show when all traits are selected */}
      {isAnimalComplete() && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-3">Seu Animal Criado:</h4>
          <div className="text-center">
            <img 
              src={getAnimalImage(selectedAnimal, animalGenes)} 
              alt="Animal criado" 
              className="w-32 h-32 mx-auto mb-4 object-contain"
            />
            <div className="space-y-2 text-green-700">
              {Object.entries(checkAnimalTraits()).map(([trait, result]) => (
                <div key={trait} className="flex items-center justify-center gap-2">
                  <span className="text-xl">{result.emoji}</span>
                  <span className="capitalize">
                    {trait === 'eyeColor' ? 'Olhos' : 'Pelagem'}: {result.color}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-2 bg-green-100 rounded">
              <p className="font-semibold">🎉 Animal completo criado! +100 pontos!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderDNAPairing = () => (
    <div className="space-y-6">
      {showInstructions && renderInstructions('dna-pairing')}
      
      <div className="text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">Pareamento de DNA</h3>
        <p className="text-muted-foreground">Complete a dupla hélice seguindo as regras A-T e C-G</p>
      </div>

      {/* Rules Reminder */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">Regras de Pareamento:</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center font-bold">A</span>
            <span>↔</span>
            <span className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center font-bold">T</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-500 text-white rounded flex items-center justify-center font-bold">G</span>
            <span>↔</span>
            <span className="w-6 h-6 bg-yellow-500 text-black rounded flex items-center justify-center font-bold">C</span>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border p-6 rounded-lg">
        <div className="space-y-4">
          {/* First Strand */}
          <div>
            <h4 className="font-semibold mb-2">Primeira Fita de DNA:</h4>
            <div className="flex gap-2 justify-center">
              {dnaStrand1.map((base, index) => (
                <div key={index} className={`w-12 h-12 ${baseColors[base]} rounded-lg flex items-center justify-center font-bold text-lg relative`}>
                  {base}
                </div>
              ))}
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center">
            <div className="flex gap-2">
              {dnaStrand1.map((_, index) => (
                <div key={index} className="w-12 flex justify-center">
                  <div className={`w-0.5 h-8 ${
                    dnaStrand2[index] && !pairingErrors.includes(index) 
                      ? 'bg-green-500' 
                      : pairingErrors.includes(index)
                      ? 'bg-red-500'
                      : 'bg-gray-300'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Strand */}
          <div>
            <h4 className="font-semibold mb-2">Segunda Fita de DNA (complete você):</h4>
            <div className="flex gap-2 justify-center mb-4">
              {dnaStrand2.map((base, index) => (
                <div key={index} className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center font-bold text-lg ${
                  base 
                    ? pairingErrors.includes(index)
                      ? 'border-red-500 bg-red-100 text-red-700'
                      : `${baseColors[base]} border-green-500`
                    : 'border-dashed border-muted-foreground bg-muted'
                }`}>
                  {base || (index + 1)}
                </div>
              ))}
            </div>

            {/* Base Selection */}
            <div className="flex gap-2 justify-center">
              {['A', 'T', 'G', 'C'].map(base => (
                <div key={base} className="text-center">
                  <div className={`w-10 h-10 ${baseColors[base]} rounded mb-1 flex items-center justify-center font-bold`}>
                    {base}
                  </div>
                  <div className="space-y-1">
                    {dnaStrand2.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => completeDNAPairing(index, base)}
                        disabled={dnaStrand2[index] !== '' || pairingComplete}
                        className="w-6 h-6 bg-muted hover:bg-muted/80 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        title={`Clique para colocar ${base} na posição ${index + 1}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {pairingErrors.length > 0 && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
            ❌ Erro! Lembre-se das regras: A conecta com T, G conecta com C
          </div>
        )}

        {pairingComplete && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-green-700 text-center">
            <CheckCircle className="w-6 h-6 mx-auto mb-2" />
            <p className="font-semibold">🎉 Perfeito! Você completou a dupla hélice corretamente!</p>
            <p className="text-sm">+150 pontos conquistados!</p>
          </div>
        )}

        <div className="flex justify-center mt-4">
          <button
            onClick={resetDNAPairing}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Nova Sequência
          </button>
        </div>
      </div>
    </div>
  );

  const renderAnimalDesigner = () => {
    if (!targetAnimal) {
      setTargetAnimal(generateTargetAnimal());
      return <div>Carregando...</div>;
    }

    const isComplete = checkAnimalDesign();

    return (
      <div className="space-y-6">
        {showInstructions && renderInstructions('animal-designer')}
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Designer de Animais</h3>
          <p className="text-muted-foreground">Recrie o animal alvo usando as sequências genéticas corretas</p>
        </div>

        {/* Target Animal */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-3">🎯 Animal Alvo:</h4>
          <div className="text-center">
            <img 
              src={getTargetAnimalImage(targetAnimal)} 
              alt="Animal alvo" 
              className="w-32 h-32 mx-auto mb-2 object-contain"
            />
            <div className="text-lg font-medium mb-2">{targetAnimal.name}</div>
            <div className="space-y-1 text-yellow-700">
              {Object.entries(targetAnimal.traits).map(([trait, data]) => (
                <div key={trait} className="flex items-center justify-center gap-2">
                  <span className="text-lg">{data.emoji}</span>
                  <span className="capitalize">
                    {trait === 'eyeColor' ? 'Olhos' : 'Pelagem'}: {data.color}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reference Table */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-3">📋 Tabela de Referência de Códons:</h4>
          <div className="space-y-3">
            {Object.entries(animals[targetAnimal.type].traits).map(([trait, options]) => (
              <div key={trait}>
                <h5 className="font-medium mb-2 capitalize text-blue-700">
                  {trait === 'eyeColor' ? 'Cor dos Olhos' : 'Cor da Pelagem'}:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Object.entries(options).map(([sequence, result]) => (
                    <div key={sequence} className="p-2 bg-white rounded border text-sm">
                      <div className="font-mono font-bold text-blue-600 text-lg">{sequence}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{result.emoji}</span>
                        <span className="text-xs">{result.color}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Player Gene Selection */}
        <div className="bg-card border border-border p-4 rounded-lg">
          <h4 className="font-semibold mb-3">🧬 Suas Escolhas de Sequências Genéticas:</h4>
          <div className="space-y-4">
            {Object.entries(targetAnimal.traits).map(([trait, targetData]) => (
              <div key={trait}>
                <h5 className="font-medium mb-2 capitalize">
                  {trait === 'eyeColor' ? 'Cor dos Olhos' : 'Cor da Pelagem'}:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Object.entries(animals[targetAnimal.type].traits[trait]).map(([sequence, result]) => (
                    <button
                      key={sequence}
                      onClick={() => setPlayerGenes(prev => ({ ...prev, [trait]: sequence }))}
                      className={`p-3 rounded border text-sm transition-all ${
                        playerGenes[trait] === sequence
                          ? sequence === targetData.sequence
                            ? 'border-green-500 bg-green-100 text-green-700'
                            : 'border-red-500 bg-red-100 text-red-700'
                          : 'border-muted hover:border-primary/50'
                      }`}
                    >
                      <div className="font-mono font-bold mb-1 text-lg">{sequence}</div>
                      {playerGenes[trait] === sequence && (
                        <div className="mt-1">
                          {sequence === targetData.sequence ? '✅' : '❌'}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        {isComplete && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <h4 className="font-semibold text-green-800 mb-2">🎉 Parabéns! Você recriou o animal perfeitamente!</h4>
            <p className="text-green-700">+200 pontos conquistados!</p>
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={resetAnimalDesigner}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Novo Desafio
          </button>
        </div>
      </div>
    );
  };

  const renderGameSelection = () => (
    <div className="space-y-6">
      {renderDisclaimer()}
      
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">🎮 Zona Interativa</h2>
        <p className="text-lg text-muted-foreground mb-2">Aprenda genética brincando!</p>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Trophy className="w-4 h-4" />
            <span>{userPoints} pontos</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{achievements.length} conquistas</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="text-primary mb-2">{game.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{game.description}</p>
              <div className="flex items-center justify-center gap-2 text-xs">
                <span className={`px-2 py-1 rounded ${
                  game.difficulty === 'Iniciante' ? 'bg-green-100 text-green-700' :
                  game.difficulty === 'Intermediário' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {game.difficulty}
                </span>
                <span className="text-muted-foreground">{game.points} pts</span>
              </div>
            </div>
            <button
              onClick={() => {
                setCurrentGame(game.id);
                setShowInstructions(true);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Play className="w-4 h-4" />
              Jogar
            </button>
          </div>
        ))}
      </div>

      {achievements.length > 0 && (
        <div className="bg-card border border-border rounded-lg p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Suas Conquistas
          </h3>
          <div className="space-y-2">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center gap-3 p-2 bg-yellow-50 rounded">
                <Star className="w-4 h-4 text-yellow-500" />
                <div>
                  <div className="font-medium text-sm">{achievement.title}</div>
                  <div className="text-xs text-muted-foreground">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderCurrentGame = () => {
    switch (currentGame) {
      case 'animal-genetics':
        return renderAnimalGenetics();
      case 'dna-pairing':
        return renderDNAPairing();
      case 'animal-designer':
        return renderAnimalDesigner();
      default:
        return renderGameSelection();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {currentGame && (
          <div className="mb-6">
            <button
              onClick={() => {
                setCurrentGame(null);
                setShowInstructions(true);
                setShowDisclaimer(true);
              }}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              ← Voltar aos Jogos
            </button>
          </div>
        )}
        
        {renderCurrentGame()}
      </div>
    </div>
  );
};

export default InteractiveZone;

