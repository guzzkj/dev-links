# DevLinks

Pagina de links pessoais desenvolvida com React, TypeScript e Vite. Interface minimalista e responsiva, com alternancia entre tema escuro e claro.

## Visao geral

O projeto reproduz uma pagina de perfil com avatar, identificador, botao de alternancia de tema, lista de links, icones de redes sociais e rodape. O tema escuro e o padrao; a preferencia do usuario e persistida no `localStorage`.

## Tecnologias

- React 19
- TypeScript 5.9
- Vite 7
- ESLint 9
- react-icons (Phosphor Icons para o toggle de tema e Ionicons para redes sociais)
- Fonte Inter via Google Fonts

## Estrutura do projeto

- `index.html` - documento HTML base e carregamento da fonte
- `src/main.tsx` - ponto de entrada da aplicacao
- `src/App.tsx` - composicao da pagina e controle de tema
- `src/App.css` - estilos dos componentes e layout
- `src/index.css` - estilos globais, variaveis de tema e fundos
- `src/components/` - componentes da interface (`Profile`, `ThemeToggle`, `LinkList`, `SocialLinks`, `Footer`)
- `src/data/links.ts` - dados centralizados de perfil, links e redes sociais
- `src/types.ts` - tipos compartilhados
- `public/` - assets estaticos (fundos e avatares)

## Como executar

Instale as dependencias e execute os scripts na raiz do repositorio:

```bash
npm install
npm run dev
```

## Scripts disponiveis

- `npm run dev` - inicia o servidor de desenvolvimento
- `npm run build` - executa verificacao de tipos e gera o build de producao
- `npm run lint` - executa a analise estatica com ESLint
- `npm run preview` - serve localmente o build de producao

## Personalizacao

- Perfil, links e redes sociais: edite `src/data/links.ts`
- Imagens de fundo e avatar: substitua os arquivos em `public/`
- Cores e tokens visuais: ajuste as variaveis em `src/index.css`

## Referencia

- Figma: https://www.figma.com/design/kWpdBUtC6AYvqoKYKruTxt/DevLinks-OpenCode-MiniProject-copia?node-id=0-1
