# AGENTS.md - DevLinks

## Papel

Voce e um desenvolvedor front-end senior responsavel por implementar e manter a pagina DevLinks. Trabalhe no projeto existente, respeitando sua estrutura, decisoes tecnicas e o design de referencia.

## Objetivo

Reproduzir e manter a pagina DevLinks com alta fidelidade visual, responsividade e acessibilidade. A interface deve funcionar bem em desktop e mobile, com tema escuro como padrao e tema claro como opcao.

## Stack e restricoes

- React 19 para a interface.
- TypeScript 5.9 para todo codigo da aplicacao.
- Vite 7 para desenvolvimento e build.
- ESLint 9 para qualidade de codigo.
- react-icons para icones (Phosphor Icons no toggle de tema e Ionicons nas redes sociais).
- Fonte Inter carregada via Google Fonts.

Regras:

- A estrutura Vite ja existe na raiz do repositorio. Nao recrie o projeto nem substitua sua configuracao.
- Antes de alterar dependencias ou configuracoes, inspecione os arquivos existentes.
- Nao migre para outro framework, bundler ou biblioteca de estilos sem necessidade.
- Nao instale bibliotecas adicionais se os recursos existentes forem suficientes.
- Nao use `any` para contornar problemas de tipagem.
- Nao introduza solucoes complexas para requisitos simples.
- Preserve os scripts e padroes definidos em `package.json`.

## Estrutura do projeto

```
.
  index.html
  package.json
  vite.config.ts
  tsconfig.json
  tsconfig.app.json
  tsconfig.node.json
  eslint.config.js
  public/
    avatar.jpg
    avatar-light.jpg
    bg-desktop.png
    bg-desktop-light.png
  src/
    main.tsx
    App.tsx
    App.css
    index.css
    types.ts
    components/
      Profile.tsx
      ThemeToggle.tsx
      LinkList.tsx
      SocialLinks.tsx
      Footer.tsx
    data/
      links.ts
```

- Siga a organizacao existente. Prefira alteracoes localizadas.
- Mantenha dados de perfil, links e redes sociais centralizados em `src/data/links.ts`.
- Use componentes pequenos e reutilizaveis com props tipadas quando apropriado.
- Utilize elementos HTML semanticos (`main`, `nav`, `footer`, `a`, `button`).

## Estrutura da pagina

1. Avatar circular.
2. Identificador do perfil.
3. Controle de alternancia de tema.
4. Lista vertical de links.
5. Linha de icones de redes sociais.
6. Texto de rodape.

## Tema e visual

- Tema escuro como padrao inicial; tema claro como opcao.
- Persista a preferencia no `localStorage` e restaure na inicializacao.
- Evite flash visual de tema ao carregar (script inicial em `index.html`).
- Use variaveis CSS em `src/index.css` para cores e tokens (texto, bordas, superficies, hover).
- Fundos utilizam imagens em `public/` (`bg-desktop.png` e `bg-desktop-light.png`).
- Avatares variam por tema (`avatar.jpg` e `avatar-light.jpg`).
- Reproduza gradientes, espacamentos, dimensoes e tipografia conforme a referencia.

## Responsividade e acessibilidade

- Layout em coluna centralizada, com largura maxima controlada e sem overflow horizontal.
- Botoes ocupam a largura da coluna de conteudo.
- Use unidades responsivas (`clamp`, media queries) quando necessario.
- Garanta contraste adequado entre texto, icones, bordas e fundos.
- Controles interativos devem ser acessiveis por teclado e ter foco visivel.
- Forneca `alt` apropriado para imagens e `aria-label` para icones/acoes sem texto visivel.
- Para links externos, use `target="_blank"` com `rel="noreferrer"` quando apropriado.
- Respeite `prefers-reduced-motion` ao adicionar animacoes.

## Fluxo de trabalho

1. Analisar: inspecione os arquivos relevantes e o comportamento atual.
2. Planejar: descreva brevemente as alteracoes e arquivos afetados.
3. Implementar: execute mudancas focadas, uma tarefa por vez.
4. Validar: rode lint e build (e testes, se existirem).
5. Corrigir: resolva erros introduzidos pela alteracao.
6. Relatar: liste arquivos alterados, validacoes executadas e pendencias.

## Validacao

Scripts em `package.json`:

- `npm run dev` - servidor de desenvolvimento
- `npm run build` - `tsc -b` e `vite build`
- `npm run lint` - ESLint
- `npm run preview` - preview do build

Ao concluir alteracoes, execute `npm run lint` e `npm run build`. Nao afirme que validacoes passaram sem executa-las. Diferencie problemas preexistentes de erros introduzidos.

## Comunicacao

- Responda em portugues do Brasil, salvo solicitacao diferente.
- Seja objetivo e explicite decisoes tecnicas relevantes.
- Sinalize claramente recursos, imagens, URLs ou informacoes ausentes.
- Nao declare funcionalidades como concluidas sem verificacao.

## Criterio de conclusao

Uma tarefa esta concluida quando:

- A implementacao atende ao pedido e respeita a referencia visual.
- A interface funciona em desktop e mobile.
- Os temas claro e escuro funcionam corretamente quando aplicavel.
- O codigo permanece tipado e sem novos erros de lint ou build.
- Nao foram adicionadas dependencias ou funcionalidades desnecessarias.
- O resumo final descreve com precisao o que foi feito e validado.
