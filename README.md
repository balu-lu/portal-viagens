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

Observação: o workflow atual também executa os testes com `npm run test` — portanto o pipeline completa as etapas de lint, testes e build antes do deploy.

## Deploy via Vercel

O deploy usa `amondnet/vercel-action@v42.3.0` e requer os seguintes secrets no repositório:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Após configurar os `secrets` no repositório, o deploy será acionado automaticamente em pushes na branch `main`.

Substitua o link abaixo pelo endereço do seu projeto Vercel após o primeiro deploy:

(URL do deploy: https://portal-viagens-one.vercel.app/) 

## Aderência ao desafio

O projeto atende aos requisitos do desafio:

- **Validação de Código**: `npm run lint` (ESLint) — script definido em `package.json` como `eslint --ext .ts,.tsx,.js,.jsx .`.
- **Build da Aplicação**: `npm run build` (Next.js `next build`).
- **Testes**: `npm run test` (Vitest) e o passo de testes está incluído no workflow.
- **Deploy Automatizado**: deploy via Vercel configurado no workflow (`amondnet/vercel-action@v42.3.0`).

Passos pendentes para completar o fluxo end-to-end:

- Configurar os `secrets` (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`) no repositório GitHub.
- Fazer push das alterações e verificar a execução do workflow na aba **Actions** do repositório.
- Atualizar este `README.md` com o link final do deploy em Vercel.
```