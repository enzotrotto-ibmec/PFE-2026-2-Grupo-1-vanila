# Product Backlog

Backlog do produto da Equipe 1 na AC (site Vanilla), priorizado pelo método **MoSCoW** (Must / Should / Could / Won't). Os itens foram derivados dos requisitos passados pelo professor (mobile first, menu hambúrguer, imagens sem placeholder, alinhamentos, agendamento, GitHub Pages e documentação) e do que o histórico do repositório mostra que ainda falta.

---

## Épico A: Base do projeto

| ID | História de usuário / tarefa | Critério de aceitação | Prioridade | Sprint | Status |
|---|---|---|---|---|---|
| PB-01 | Como equipe, quero o repositório criado com o README inicial, para começar a desenvolver. | Repositório no GitHub com README. | Must | 1 | Concluído |
| PB-02 | Como equipe, quero a estrutura de pastas organizada (`pages/`, `css/`, `js/`, `assets/`), para encontrar tudo facilmente. | Pastas criadas e arquivos nos lugares certos. | Must | 2 | Concluído |
| PB-03 | Como equipe, quero um README com a estrutura e as observações técnicas, para qualquer pessoa entender o projeto. | README com estrutura, mobile first, menu, WhatsApp, 404 e imagens. | Must | 2 | Concluído |
| PB-04 | Como equipe, quero remover os arquivos placeholder (`apagar`) das pastas, para não ficar lixo no repositório. | Nenhum arquivo `apagar` no repositório. | Should | 2 | Concluído |

## Épico B: Estilos e layout (mobile first)

| ID | História de usuário / tarefa | Critério de aceitação | Prioridade | Sprint | Status |
|---|---|---|---|---|---|
| PB-05 | Como visitante, quero um layout que funcione bem no celular, para acessar o site de qualquer lugar. | `base.css` mobile first, com `@media (min-width)` só para telas maiores. | Must | 2 | Concluído |
| PB-06 | Como visitante da PKZ Lab, quero uma identidade visual própria da marca, para reconhecê-la. | `pkz.css` aplicado em `pkz.html`. | Must | 2 | Concluído |
| PB-07 | Como visitante da One to One, quero uma identidade visual própria da marca, para reconhecê-la. | `one-to-one.css` aplicado em `one-to-one.html`. | Must | 2 | Concluído |
| PB-08 | Como visitante, quero botões de ação claros e uma barra fixa no celular, para chegar rápido ao agendamento. | `cta.css` e `extras.css` (CTA, barra fixa, FAQ, skip-link, botões flutuantes). | Must | 2 | Concluído |
| PB-09 | Como professor, quero ver os elementos bem alinhados e com respiro, sem textos colados nas bordas. | Revisão de espaçamentos e alinhamentos em todas as páginas, no celular, tablet e desktop. | Must | 3 | Concluído |
| PB-10 | Como visitante, quero que o site funcione em celular, tablet e desktop. | Layout testado nos três tamanhos (quebras em 641, 769, 861 e 1101 px). | Must | 3 | Concluído |

## Épico C: Páginas

| ID | História de usuário / tarefa | Critério de aceitação | Prioridade | Sprint | Status |
|---|---|---|---|---|---|
| PB-11 | Como visitante, quero um portal de entrada que me deixe escolher entre PKZ e One to One, para ir direto à marca que me interessa. | `index.html` + `portal.css` + `portal.js` (halter arrastável e redirecionamento). | Must | 2 | Concluído |
| PB-12 | Como visitante, quero a página da PKZ Lab com sobre, família, modalidades, FAQ e localização. | `pages/pkz.html` com as seções e a janela de contato. | Must | 2 | Concluído |
| PB-13 | Como visitante, quero a página do Studio One to One com sobre, serviços, FAQ e localização. | `pages/one-to-one.html` com as seções e a janela de contato. | Must | 2 | Concluído |
| PB-14 | Como visitante, quero uma página de erro e uma política de privacidade. | `404.html` e `pages/privacidade.html` com `legal.css`. | Should | 2 | Concluído |
| PB-15 | Como visitante, quero que a página de erro (404) carregue com estilo no GitHub Pages. | O `<base href>` do `404.html` aponta para o nome do repositório publicado. | Must | 3 | A fazer |

## Épico D: Interatividade

| ID | História de usuário / tarefa | Critério de aceitação | Prioridade | Sprint | Status |
|---|---|---|---|---|---|
| PB-16 | Como visitante no celular, quero um menu hambúrguer, e no desktop o menu completo, para navegar com facilidade. | `main.js` adiciona e remove a classe `nav-open`; hambúrguer até 768 px e menu em linha a partir de 769 px. | Must | 2 | Concluído |
| PB-17 | Como visitante, quero uma janela de contato, links de WhatsApp e um botão de voltar ao topo. | Funções em `main.js`, números lidos de `data.js`. | Must | 2 | Concluído |
| PB-18 | Como equipe, quero os dados do site (WhatsApp, horários, endereço, modalidades) em um único arquivo. | `data.js` como fonte única de dados das duas marcas. | Must | 2 | Concluído |
| PB-19 | Como visitante, quero escolher dia e horário, preencher o formulário e enviar o pedido de aula experimental pelo WhatsApp. | `agendamento.js` integrado às duas páginas `*-aula-experimental.html` (dias, horários, validação de CPF e envio). | Must | 2 | Concluído (integração) |
| PB-20 | Como professor, quero a garantia de que as edições no JS do agendamento não quebraram a funcionalidade. | Fluxo completo testado nas duas marcas, no celular e no desktop; se quebrar, voltar à versão original. | Must | 3 | Concluído (17 testes passaram) |

## Épico E: Imagens e conteúdo

| ID | História de usuário / tarefa | Critério de aceitação | Prioridade | Sprint | Status |
|---|---|---|---|---|---|
| PB-21 | Como visitante, quero ver as fotos nas páginas, sem imagem quebrada. | As páginas apontam para arquivos que existem: versões `-480`, `-800` e `-1280` (WebP) geradas a partir das fotos originais, com os caminhos corrigidos. | Must | 2 | Concluído (commit "corrigindo fotos") |
| PB-22 | Como visitante da One to One, quero ver fotos da marca. | Pasta `assets/img/one-to-one/` com imagens do cliente ou geradas por IA. | Must | 2 | Concluído |
| PB-23 | Como professor, quero que não exista espaço de imagem vazio nem placeholder. | Todas as `<img>` carregam e têm texto alternativo. | Must | 2, 3 | Concluído |
| PB-24 | Como visitante, quero falar com a marca pelo WhatsApp real. | Número real de cada marca em `data.js` (hoje é o valor de exemplo `5521000000000`) e no `<noscript>` das páginas de aula experimental. | Must | 3 | A fazer (depende do cliente) |
| PB-25 | Como visitante, quero que o site carregue rápido. | Fotos otimizadas. As versões usadas pelo site somam ~1,2 MB; as originais de 3 a 4 MB ficam em `fotos-originais/` e não são carregadas pelas páginas. | Could | 2 | Concluído (originais continuam no repositório) |

## Épico F: Entrega e documentação

| ID | História de usuário / tarefa | Critério de aceitação | Prioridade | Sprint | Status |
|---|---|---|---|---|---|
| PB-26 | Como professor, quero ver o site publicado no GitHub Pages. | Site no ar e link adicionado ao README. | Must | 3 | A fazer |
| PB-27 | Como professor, quero ver evidências do uso de Scrum, para avaliar a metodologia. | Pasta `docs/scrum/` com papéis, backlog e sprints. | Must | 2, 3 | Concluído (atualizado até 25/10) |
| PB-28 | Como professor, quero a documentação do agendamento. | `docs/agendamento/agendamento.md` com onde aparece, como funciona, o que foi alterado no JS e como foi testado. | Must | 3 | Concluído |
| PB-29 | Como professor, quero o protótipo atualizado com o agendamento. | `docs/prototipo/` com link do Figma e/ou prints atualizados. | Must | 3 | Concluído (falta só o link em `docs/prototipo/`) |
| PB-30 | Como equipe, quero ensaiar e apresentar o site, para entregar a AC. | Ordem de falas definida e apresentação realizada. | Must | 3 | A fazer |

## Fora do escopo atual (Won't: por enquanto)

| ID | Item | Status |
|---|---|---|
| PB-31 | Cadastro/login de alunos e área logada por marca | Fora do escopo |
| PB-32 | Agendamento com banco de dados (créditos, vagas por horário, fila de espera). O pedido vai por WhatsApp. | Fora do escopo |
| PB-33 | Cobrança, pagamentos e notificações automáticas | Fora do escopo |
| PB-34 | Uso de React ou qualquer framework (a AC é Vanilla; React fica para a AP2) | Fora do escopo |
