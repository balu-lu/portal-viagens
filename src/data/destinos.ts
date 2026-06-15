export interface Destino {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  precoViagem: string;
  diasDisponiveis: string;
  oQueFazer: string[];
}

export const destinos: Destino[] = [
  {
    id: 'kyoto-japao',
    nome: 'Kyoto, Japão',
    imagem: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    descricao: 'Descubra a magia dos templos ancestrais, jardins zen e a deslumbrante época das cerejeiras em flor.',
    precoViagem: 'R$ 8.500',
    diasDisponiveis: '7 a 10 dias',
    oQueFazer: [
      'Visitar o santuário Fushimi Inari',
      'Passear no bosque de bambu de Arashiyama',
      'Participar numa cerimónia do chá tradicional'
    ]
  },
  {
    id: 'santorini-grecia',
    nome: 'Santorini, Grécia',
    imagem: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop',
    descricao: 'Pôr do sol inesquecível, águas cristalinas do Mar Egeu e a arquitetura branca de cúpulas azuis.',
    precoViagem: 'R$ 7.200',
    diasDisponiveis: '5 a 7 dias',
    oQueFazer: [
      'Navegar de catamarã pela caldeira vulcânica',
      'Explorar as ruínas de Akrotiri',
      'Provar a gastronomia mediterrânica nas tabernas locais'
    ]
  },
  {
    id: 'machu-picchu-peru',
    nome: 'Machu Picchu, Peru',
    imagem: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop',
    descricao: 'Uma jornada mística aos Andes para explorar a cidade perdida dos Incas, cercada por montanhas majestosas.',
    precoViagem: 'R$ 3.800',
    diasDisponiveis: '4 a 5 dias',
    oQueFazer: [
      'Percorrer o Trilho Inca clássico',
      'Explorar as ruínas e terraços agrícolas da cidadela',
      'Subir à montanha Huayna Picchu para uma vista panorâmica'
    ]
  },
  {
    id: 'ouro-preto-brasil',
    nome: 'Ouro Preto, Brasil',
    imagem: 'https://plus.unsplash.com/premium_photo-1680100349601-7694f71db99b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descricao: 'Mergulhe na profunda história da formação do Brasil. Uma cidade colonial marcada pela extração do ouro, arquitetura barroca e uma rica memória material.',
    precoViagem: 'R$ 2.500',
    diasDisponiveis: '3 a 5 dias',
    oQueFazer: [
      'Explorar as minas de ouro desativadas',
      'Visitar as igrejas barrocas esculpidas por Aleijadinho',
      'Percorrer o centro histórico e compreender a dinâmica económica colonial',
      'Visitar o Museu da Inconfidência'
    ]
  }
];