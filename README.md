# Voyage - Portal de Viagens em Next.js

Uma aplicação moderna desenvolvida em Next.js (App Router) para consolidar conceitos de roteamento baseado em arquivos, rotas dinâmicas e isolamento de estilos com CSS Modules. O foco da interface é oferecer uma navegação limpa, aplicando os melhores padrões de UX/UI.

## Funcionalidades e Aprendizados Aplicados

- **Roteamento Baseado em Arquivos (App Router):** Estrutura limpa utilizando pastas para definir rotas.
- **Rotas Dinâmicas (`[id]`):** Geração de páginas individuais para cada destino através da leitura de parâmetros da URL (`params.id`).
- **Navegação SPA:** Uso do componente `<Link>` do `next/link` para transições instantâneas sem recarregar o navegador.
- **CSS Modules:** Estilos com escopo local isolado (ex: `styles.container`), evitando conflitos de classes e aplicando técnicas como *Glassmorphism* e microinterações de hover.
- **Layout Global:** Utilização do `layout.tsx` para manter o Header e o Menu de Navegação consistentes em toda a aplicação.
- **Tratamento de Exceções:** Uso da função `notFound()` nativa do Next.js para rotas inexistentes.

## Como executar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/portal-viagens.git](https://github.com/SEU-USUARIO/portal-viagens.git)