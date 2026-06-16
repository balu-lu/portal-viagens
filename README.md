# Voyage - Portal de Viagens em Next.js

Uma aplicação moderna desenvolvida em Next.js (App Router) para consolidar conceitos de roteamento baseado em arquivos, rotas dinâmicas e isolamento de estilos com CSS Modules. O foco da interface é oferecer uma navegação limpa, aplicando os melhores padrões de UX/UI

## Funcionalidades e Aprendizados Aplicados

- **Roteamento Baseado em Arquivos (App Router):** Estrutura limpa utilizando pastas para definir rotas.
- **Rotas Dinâmicas (`[id]`):** Geração de páginas individuais para cada destino através da leitura de parâmetros da URL (`params.id`).
- **Navegação SPA:** Uso do componente `<Link>` do `next/link` para transições instantâneas sem recarregar o navegador.
- **CSS Modules:** Estilos com escopo local isolado (ex: `styles.container`), evitando conflitos de classes e aplicando técnicas como *Glassmorphism* e microinterações de hover.
- **Layout Global:** Utilização do `layout.tsx` para manter o Header e o Menu de Navegação consistentes em toda a aplicação.
- **Tratamento de Exceções:** Uso da função `notFound()` nativa do Next.js para rotas inexistentes.

## Como executar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU-USUARIO/portal-viagens.git](https://github.com/SEU-USUARIO/portal-viagens.git)

## Instalação e configuração Prettier e eslint
Bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

2. **Configuração do Prettier**
   Crie um arquivo chamado .prettierrc (ou .prettierrc.json) na raiz do seu projeto. É aqui que definimos a regra dos 4 espaços, além de outras boas práticas de padronização do ecossistema JavaScript:

```JSON
{
  "tabWidth": 4,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80
}
```

3. **Arquivo de Ignorados (Prettier Ignore)**
   Para evitar que o Prettier tente formatar arquivos gerados automaticamente ou pastas de build, crie um arquivo .prettierignore na raiz do projeto:

```Plaintext
.next
node_modules
dist
build
public
*.md
```

4. **Configuração do VS Code (Formatação Automática)**
   Para que o editor formate o código automaticamente de acordo com as regras (com 4 espaços) sempre que você salvar um arquivo, crie ou edite a pasta .vscode na raiz do projeto e adicione um arquivo settings.json:

```JSON
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

5. **Scripts de Validação Automática**
   Por fim, abra o seu package.json e adicione dois scripts na seção "scripts" para facilitar a formatação de todo o projeto de uma só vez pelo terminal:

```JSON
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
  ```

6. **Como configurar no ficheiro eslint.config.mjs**
   Abra o seu ficheiro eslint.config.mjs. Vai notar que ele tem um código pré-configurado pelo Next.js.

```JavaScript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended" // <-- Prettier adicionado aqui
  ),
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          "tabWidth": 4
        }
      ]
    }
  }
];

export default eslintConfig;
```