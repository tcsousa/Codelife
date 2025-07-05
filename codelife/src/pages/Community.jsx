import React, { useState, useEffect } from 'react';
import { MessageCircle, Heart, Users, Send, AlertTriangle, Clock, User } from 'lucide-react';

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Ana Silva',
      title: 'Como funciona a edição genética CRISPR?',
      content: 'Estou estudando sobre CRISPR-Cas9 e gostaria de entender melhor como essa tecnologia consegue "cortar" e "colar" genes específicos. Alguém pode explicar de forma simples?',
      timestamp: '2 horas atrás',
      likes: 12,
      comments: [
        {
          id: 1,
          author: 'Dr. Carlos',
          content: 'Ótima pergunta! O CRISPR funciona como uma "tesoura molecular" muito precisa. Imagine que o DNA é como um livro gigante, e o CRISPR consegue encontrar uma frase específica e substituí-la por outra.',
          timestamp: '1 hora atrás',
          likes: 8
        },
        {
          id: 2,
          author: 'Marina Santos',
          content: 'Complementando a explicação do Dr. Carlos: o sistema usa uma "guia" (gRNA) que leva a enzima Cas9 até o local exato do DNA que queremos modificar. É como ter um GPS molecular!',
          timestamp: '45 min atrás',
          likes: 5
        }
      ]
    },
    {
      id: 2,
      author: 'João Pedro',
      title: 'Meu dragão criado no laboratório!',
      content: 'Consegui criar um dragão de gelo gigante com escamas resistentes! As sequências genéticas que usei foram baseadas em peixes antárticos e crocodilos. Que combinações vocês mais gostaram de criar?',
      timestamp: '5 horas atrás',
      likes: 24,
      comments: [
        {
          id: 3,
          author: 'Sofia Lima',
          content: 'Que legal! Eu criei um dragão pequeno de fogo com espinhos. Adorei como o jogo explica a base científica por trás de cada característica.',
          timestamp: '3 horas atrás',
          likes: 7
        }
      ]
    },
    {
      id: 3,
      author: 'Prof. Maria',
      title: 'Algas purificadoras: realidade ou ficção?',
      content: 'O Laboratório Oceânico me fez pesquisar mais sobre biorremediação. Descobri que já existem pesquisas reais usando algas para limpar poluição! Alguém conhece outros exemplos de biotecnologia ambiental?',
      timestamp: '1 dia atrás',
      likes: 18,
      comments: [
        {
          id: 4,
          author: 'Lucas Tech',
          content: 'Sim! Existem bactérias que "comem" petróleo e são usadas para limpar vazamentos no oceano. A natureza é incrível!',
          timestamp: '20 horas atrás',
          likes: 12
        },
        {
          id: 5,
          author: 'Dra. Fernanda',
          content: 'Outro exemplo fascinante são as plantas que acumulam metais pesados do solo, processo chamado fitorremediação. A biotecnologia tem muito potencial para resolver problemas ambientais!',
          timestamp: '18 horas atrás',
          likes: 15
        }
      ]
    }
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [newComment, setNewComment] = useState({});
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [likedComments, setLikedComments] = useState(new Set());

  const handleLikePost = (postId) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, likes: post.likes - 1 } : post
      ));
    } else {
      newLikedPosts.add(postId);
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      ));
    }
    setLikedPosts(newLikedPosts);
  };

  const handleLikeComment = (postId, commentId) => {
    const key = `${postId}-${commentId}`;
    const newLikedComments = new Set(likedComments);
    
    if (newLikedComments.has(key)) {
      newLikedComments.delete(key);
      setPosts(posts.map(post => 
        post.id === postId ? {
          ...post,
          comments: post.comments.map(comment =>
            comment.id === commentId ? { ...comment, likes: comment.likes - 1 } : comment
          )
        } : post
      ));
    } else {
      newLikedComments.add(key);
      setPosts(posts.map(post => 
        post.id === postId ? {
          ...post,
          comments: post.comments.map(comment =>
            comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
          )
        } : post
      ));
    }
    setLikedComments(newLikedComments);
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (newPost.title.trim() && newPost.content.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'Você',
        title: newPost.title,
        content: newPost.content,
        timestamp: 'Agora',
        likes: 0,
        comments: []
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '' });
    }
  };

  const handleSubmitComment = (postId) => {
    const commentText = newComment[postId];
    if (commentText && commentText.trim()) {
      const comment = {
        id: Date.now(),
        author: 'Você',
        content: commentText,
        timestamp: 'Agora',
        likes: 0
      };
      
      setPosts(posts.map(post => 
        post.id === postId ? {
          ...post,
          comments: [...post.comments, comment]
        } : post
      ));
      
      setNewComment({ ...newComment, [postId]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-12 h-12 mr-4" />
            <h1 className="text-4xl font-bold">Comunidade Científica</h1>
          </div>
          <p className="text-xl mb-6">Compartilhe descobertas e aprenda com outros exploradores da genética</p>
          <div className="bg-purple-700/50 rounded-lg p-4 max-w-4xl mx-auto">
            <p className="text-lg">
              🧬 Fórum dedicado a discussões científicas, dúvidas e descobertas sobre genética e biotecnologia
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Aviso de Moderação */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 text-amber-600 mr-3" />
            <div>
              <h3 className="font-semibold text-amber-800">Moderação Ativa</h3>
              <p className="text-amber-700">
                Todos os comentários passam por moderação para manter um ambiente educativo e respeitoso. 
                Contribuições construtivas e científicas são sempre bem-vindas!
              </p>
            </div>
          </div>
        </div>

        {/* Formulário para Nova Postagem */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            <MessageCircle className="w-8 h-8 inline mr-2" />
            Criar Nova Discussão
          </h3>
          
          <form onSubmit={handleSubmitPost} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título da Discussão
              </label>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                placeholder="Ex: Como funciona a herança genética?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                maxLength={100}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Conteúdo
              </label>
              <textarea
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                placeholder="Compartilhe sua dúvida, descoberta ou reflexão científica..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                maxLength={500}
              />
            </div>
            
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-semibold"
            >
              <Send className="w-5 h-5 inline mr-2" />
              Publicar Discussão
            </button>
          </form>
        </div>

        {/* Lista de Postagens */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg p-6">
              {/* Cabeçalho da Postagem */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mr-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{post.author}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.timestamp}
                  </div>
                </div>
              </div>

              {/* Conteúdo da Postagem */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

              {/* Ações da Postagem */}
              <div className="flex items-center space-x-4 mb-4">
                <button
                  onClick={() => handleLikePost(post.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    likedPosts.has(post.id)
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                  <span>{post.likes}</span>
                </button>
                
                <div className="flex items-center space-x-2 text-gray-600">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments.length} comentários</span>
                </div>
              </div>

              {/* Comentários */}
              {post.comments.length > 0 && (
                <div className="border-t pt-4 space-y-4">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-2">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800 text-sm">{comment.author}</span>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {comment.timestamp}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm mb-2 leading-relaxed">{comment.content}</p>
                      
                      <button
                        onClick={() => handleLikeComment(post.id, comment.id)}
                        className={`flex items-center space-x-1 text-xs px-2 py-1 rounded transition-all duration-300 ${
                          likedComments.has(`${post.id}-${comment.id}`)
                            ? 'bg-red-100 text-red-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-3 h-3 ${likedComments.has(`${post.id}-${comment.id}`) ? 'fill-current' : ''}`} />
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Formulário de Comentário */}
              <div className="border-t pt-4 mt-4">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={newComment[post.id] || ''}
                      onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                      placeholder="Adicione um comentário científico..."
                      rows={2}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      maxLength={300}
                    />
                    <button
                      onClick={() => handleSubmitComment(post.id)}
                      className="mt-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-sm font-semibold"
                    >
                      Comentar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diretrizes da Comunidade */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-blue-800 mb-4">📋 Diretrizes da Comunidade</h3>
          <div className="grid md:grid-cols-2 gap-4 text-blue-700">
            <div>
              <h4 className="font-semibold mb-2">✅ Incentivamos:</h4>
              <ul className="text-sm space-y-1">
                <li>• Perguntas científicas curiosas</li>
                <li>• Compartilhamento de descobertas</li>
                <li>• Discussões respeitosas</li>
                <li>• Explicações didáticas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">❌ Não permitimos:</h4>
              <ul className="text-sm space-y-1">
                <li>• Conteúdo ofensivo ou inadequado</li>
                <li>• Informações científicas incorretas</li>
                <li>• Spam ou autopromoção</li>
                <li>• Discussões fora do tema científico</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

