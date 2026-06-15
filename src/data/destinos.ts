export interface Destino {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  precoMedio: string;
}


export const destinos: Destino[] = [
  {
    id: 'kyoto-japao',
    nome: 'Kyoto, Japão',
    imagem: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    descricao: 'Descubra a magia dos templos ancestrais, jardins zen e a deslumbrante época das cerejeiras em flor.',
    precoMedio: 'R$ 8.500'
  },
  {
    id: 'santorini-grecia',
    nome: 'Santorini, Grécia',
    imagem: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop',
    descricao: 'Pôr do sol inesquecível, águas cristalinas do Mar Egeu e a icônica arquitetura branca de cúpulas azuis.',
    precoMedio: 'R$ 7.200'
  },
  {
    id: 'machu-picchu-peru',
    nome: 'Machu Picchu, Peru',
    imagem: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop',
    descricao: 'Uma jornada mística aos Andes para explorar a cidade perdida dos Incas, cercada por montanhas majestosas.',
    precoMedio: 'R$ 3.800'
  },
  {
    id: 'banff-canada',
    nome: 'Parque Nacional de Banff, Canadá',
    imagem: 'https://images.unsplash.com/photo-1513559388339-44485501dc65?q=80&w=800&auto=format&fit=crop',
    descricao: 'Natureza selvagem, lagos glaciais de um azul turquesa vibrante e picos nevados das Montanhas Rochosas.',
    precoMedio: 'R$ 6.400'
  }
];