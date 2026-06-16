# Portal de Viagens

Aplicação front-end em Next.js com rotas estáticas e dinâmicas, CSS Modules e deploy automatizado via Vercel.

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- ESLint
- Prettier
- GitHub Actions
- Vercel

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/portal-viagens.git
   cd portal-viagens
   ```
2. Instale as dependências:
   ```bash
   npm ci
   ```
3. Execute a aplicação:
   ```bash
   npm run dev
   ```
4. Abra o navegador em `http://localhost:3000`.

## Scripts disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento
- `npm run build` - compila o projeto para produção
- `npm run start` - inicia o servidor de produção
- `npm run lint` - executa ESLint
- `npm run test` - executa os testes com Vitest
- `npm run format` - formata o código com Prettier
- `npm run format:check` - verifica o estilo com Prettier

## CI/CD

O workflow principal está em `.github/workflows/main.yml`.

Ele executa as seguintes etapas em push ou pull request para as branches `main` e `master`:

- checkout do código
- instalação de dependências com `npm ci`
- lint com `npm run lint`
- build com `npm run build`

Também há deploy automático via Vercel em push para `main` ou `master`.

## Deploy via Vercel

O deploy usa `amondnet/vercel-action@v42.3.0` e requer os seguintes secrets no repositório:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

(https://meu-blog-next-azure.vercel.app/)

## Aderência ao desafio

O projeto atende aos seguintes itens:

- validação de código com ESLint
- build da aplicação com `npm run build`
- deploy automatizado via Vercel na branch `main`

## Observação

Para cumprir o requisito completo de CI, adicione testes e um script `test` em `package.json`, depois inclua `npm run test` no workflow.

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