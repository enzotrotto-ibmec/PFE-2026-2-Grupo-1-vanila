# Sprint 2: Implementação do site

**Período:** 19/10/2026 a 25/10/2026
**Scrum Master:** Enzo Trotto

## Sprint Goal

> Implementar o site em HTML, CSS e JavaScript puro: estrutura de pastas, CSS base mobile first, portal de entrada, páginas das duas marcas e integração do sistema de agendamento.

## Sprint Backlog

Responsável = quem fez o commit correspondente no repositório. Todas as entregas desta sprint são de 25/10.

| Item | Tarefa | Responsável | Status |
|---|---|---|---|
| PB-02 | Montar e corrigir a estrutura de pastas do repositório | Bernardo Nemirovsky | Concluído |
| PB-03 | README do projeto (estrutura, observações técnicas, requisitos do professor) | João Pedro Ferreira, Enzo Trotto | Concluído |
| PB-04 | Apagar placeholders das pastas | Enzo Trotto, João Pedro Ferreira, Alexia Schmid, Bernardo Nemirovsky | Concluído |
| PB-05 | `base.css`: estrutura e componentes comuns, mobile first | João Pedro Ferreira | Concluído |
| PB-08 | `cta.css` e `extras.css`: botões de ação, barra fixa no celular, FAQ, skip-link e botões flutuantes | Enzo Trotto | Concluído |
| PB-16, PB-17 | `main.js`: menu hambúrguer (classe `nav-open`), janela de contato, links de WhatsApp e voltar ao topo | Enzo Trotto | Concluído |
| PB-18, PB-19 | `data.js` e `agendamento.js`: dados do site e lógica base do agendamento | Bernardo Gomes | Concluído |
| PB-11 | Portal (`index.html`), `portal.js` e imagens do portal | Gabriel Góis | Concluído |
| PB-11, PB-14 | `portal.css`, `legal.css`, `404.html` e `privacidade.html` | Guilherme Macedo | Concluído |
| PB-12, PB-06 | `pkz.html` e `pkz.css` | Bernardo Nemirovsky | Concluído |
| PB-13, PB-07 | `one-to-one.html` e `one-to-one.css` | Alexia Schmid | Concluído |
| PB-19 | Páginas de aula experimental (`pkz-aula-experimental.html` e `one-to-one-aula-experimental.html`) | Bernardo Nemirovsky | Concluído |
| PB-21, PB-22, PB-23 | Adicionar as imagens da PKZ e da One to One; corrigir a pasta da One to One e gerar as versões `-480`, `-800` e `-1280` (WebP) | Alexia Schmid, Bernardo Nemirovsky | Concluído |
| PB-27 | Documentação do Scrum (`docs/scrum/`) | Enzo Trotto | Em andamento |

## Sprint Review

- **Entregue (25/10):** estrutura de pastas, `base.css`, `cta.css`, `extras.css`, `main.js` com o menu hambúrguer, `data.js` e `agendamento.js`, portal (`index.html`, `portal.css`, `portal.js`), `404.html`, `privacidade.html`, `pkz.html`, `one-to-one.html`, os CSS das duas marcas e as duas páginas de aula experimental.
- **Correções no fim do dia (14:13 a 14:24):** "Ajustando erro" (fotos da One to One estavam na pasta da PKZ), "Apagando a o arquivo vazio" e "corrigindo fotos" (versões `-480`, `-800` e `-1280` das fotos de PKZ e One to One, e as originais movidas para `fotos-originais/`). Depois disso nenhuma imagem referenciada nas páginas está quebrada e todas têm texto alternativo.
- **Pendente ao fim da sprint** (passa para a Sprint 3):
  - **WhatsApp:** o número ainda é o valor de exemplo (`5521000000000`).
  - **404:** o `<base href>` ainda aponta para outro nome de repositório.
  - **Testes:** o fluxo de agendamento ainda não foi testado depois das edições.
  - **Documentação:** o documento do agendamento está escrito (falta commitar) e o protótipo no Figma recebeu os prints do agendamento (falta o link/prints em `docs/`).
  - **Publicação** no GitHub Pages.
- **Principal aprendizado sobre o produto:** a estrutura "portal + uma página por marca + página de aula experimental por marca" permitiu dividir o trabalho por arquivo. O agendamento é todo dirigido por `data.js`, então trocar horários, modalidades e número de WhatsApp não exige mexer no HTML.

## Sprint Retrospective

| O que funcionou | O que não funcionou | Ação para a próxima sprint |
|---|---|---|
| Divisão por arquivo: cada pessoa ficou com páginas e CSS diferentes. Houve 0 commits de merge e todos os `pull` foram em fast-forward. | Quase todo o trabalho (29 dos 31 commits do projeto) foi feito em um único dia, 25/10. O problema já tinha aparecido na AP1. | Dividir o trabalho em entregas ao longo da semana, com um item por dia, para ter tempo de testar e corrigir. |
| README com a estrutura e as observações técnicas (como trocar o WhatsApp, o `<base>` do 404 e o padrão das imagens) deixou os pontos de atenção documentados. | Commits de arquivo vazio seguidos de outro commit com o conteúdo (ex.: `css/extras.css` e depois `extras.css`) e pastas com arquivos placeholder `apagar`, que só foram apagados no fim do dia (os últimos às 14:17 e 14:24). | Criar o arquivo já com o conteúdo e na pasta certa, sem commit de arquivo vazio e sem placeholder. |
| `data.js` como fonte única de dados das duas marcas. | Mensagens de commit pouco descritivas ("main.js", "cta.css", "arquivos pkz") e 11 identidades de autor para 7 pessoas. | Cada membro configura `git config user.name` / `user.email` uma única vez e escreve mensagens que dizem o que mudou. |
| | O HTML foi enviado (14:01 a 14:09) apontando para imagens que só chegaram às 14:24, então o site ficou com imagens quebradas durante algumas horas do dia. | Só subir a página junto com as imagens que ela usa e abrir o site no navegador antes de fazer o commit. |

## Próxima sprint (Sprint 3)

- Testar o agendamento depois das edições, nas duas marcas (PB-20).
- Revisar responsividade, alinhamentos e espaçamentos (PB-09, PB-10).
- Trocar o WhatsApp de exemplo pelo real e corrigir o `<base href>` do 404 (PB-24, PB-15).
- Commitar a documentação do agendamento e o link/prints do protótipo (PB-28, PB-29).
- Publicar no GitHub Pages e ensaiar a apresentação (PB-26, PB-30).
