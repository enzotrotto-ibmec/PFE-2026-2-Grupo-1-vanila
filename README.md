# Projeto para AC da disciplina Projeto Front-end

## PKZ Lab & One to One

Repositório de organização e centralização do código e da documentação produzidos para o projeto de avaliação **AC** da disciplina **Projeto Front-end**, cujo objetivo é desenvolver o novo site da empresa **PKZ Lab & One to One**.

## Contexto

A PKZ Lab & One to One contratou nossa instituição para reestruturar o site da empresa. Na etapa anterior (AP1), o foco foi o planejamento da proposta de melhoria. Nesta etapa (AC), o foco está na **implementação**: o trabalho consiste em **desenvolver o site em si**, utilizando **HTML, CSS e JavaScript puro (Vanilla)**, **sem uso de React** ou qualquer outro framework/biblioteca de interface.

Ou seja: este repositório reúne o código-fonte do site e a documentação de apoio (Scrum, sistema de agendamento e protótipo atualizado).

## Tecnologias utilizadas

- **HTML5**: estrutura semântica das páginas
- **CSS3**: estilização, responsividade e layout (Flexbox/Grid)
- **JavaScript (Vanilla)**: interatividade e manipulação do DOM, sem React nem outros frameworks

## Requisitos da entrega

- **Mobile first e responsividade**: o CSS é pensado primeiro para telas pequenas e depois expandido para telas maiores, e o site deve funcionar bem em mobile, tablet e desktop
- **Menu hambúrguer** no mobile, com JavaScript adicionando e removendo uma classe CSS para abrir e fechar o menu (como no exemplo mostrado em sala), e **menu completo (sem hambúrguer)** no desktop
- **Imagens** presentes no site e **nenhum espaço de imagem vazio ou placeholder**: usar o material disponibilizado pelo cliente ou imagens geradas com IA
- **Alinhamento e organização do layout**: respiro (espaçamento) adequado entre os elementos, sem elementos aglutinados e sem textos colados nas bordas dos elementos pais
- **Sistema de agendamento**: usa a lógica em JavaScript disponibilizada pelo professor, que pode ser editada à vontade, mas deve ser testada para garantir que as alterações não quebraram a funcionalidade (se quebrar, voltar à versão original). O CSS pode ser alterado livremente
- **Publicação no GitHub Pages**
- **Documentação do repositório** referente a esta tarefa, contendo:
  - o **Scrum** respectivo
  - a **questão do agendamento** (como o sistema foi incorporado ao site)
  - o **protótipo atualizado**, incluindo o agendamento

## Estrutura do repositório (ainda será organizado direitinho)

```
.
├── index.html
├── pages/
│   └── (demais páginas HTML do site)
├── css/
│   ├── style.css
│   └── (demais arquivos de estilo)
├── js/
│   ├── main.js
│   └── (demais scripts, incluindo a lógica do agendamento)
├── assets/
│   ├── img/
│   ├── icons/
│   └── fonts/
├── docs/
│   ├── scrum/
│   │   ├── README.md
│   │   ├── product-backlog.md
│   │   └── sprints/
│   ├── agendamento/
│   │   └── agendamento.md
│   └── prototipo/
│       └── link-e-prints.md
└── README.md
```

## Descrição dos entregáveis

**HTML**
Páginas do site estruturadas de forma semântica e acessível.

**CSS**
Estilização com identidade visual consistente, seguindo a abordagem mobile first, com layout responsivo, bom espaçamento entre elementos, menu hambúrguer no mobile e menu completo no desktop.

**JavaScript**
Funcionalidades e interações do site (menu hambúrguer controlado por adição e remoção de classe, sistema de agendamento, validações de formulário, componentes dinâmicos, etc.), implementadas em JavaScript puro, sem frameworks.

**Documentação Scrum (`docs/scrum/`)**
Registro de como a equipe aplicou o Scrum nesta tarefa: papéis (PO, Scrum Master e time), eventos, Definition of Done, Product Backlog priorizado e um arquivo por sprint com Sprint Backlog, Review e Retrospectiva.

**Documentação do agendamento (`docs/agendamento/`)**
Descrição de como o sistema de agendamento foi integrado ao site: onde ele aparece, como funciona para o usuário, quais alterações a equipe fez na lógica em JavaScript fornecida pelo professor, e como foram feitos os testes para garantir que a funcionalidade continuou funcionando.

**Protótipo atualizado (`docs/prototipo/`)**
Protótipo do grupo atualizado para incluir o agendamento, com o link para a ferramenta utilizada (ex: Figma) e/ou capturas de tela.

## Como executar

Por ser um projeto Vanilla, não há etapa de build nem dependências a instalar:

1. Clone o repositório
2. Abra o arquivo `index.html` no navegador (ou use uma extensão como o Live Server do VS Code)

## Publicação

O site é publicado via **GitHub Pages**.

- **Link do site publicado:** _(adicionar aqui após a publicação)_

## Nossa equipe:

- Alexia Schmid
- Bernardo Gomes
- Bernardo Nemirovsky
- Enzo Trotto
- Gabriel Góis
- Guilherme Macedo
- João Pedro Ferreira

## Disciplina

- **Curso/Disciplina:** Projeto Front-end (turma de terça-feira)
- **Professor:** Thiago Marcondes Santos
- **Instituição:** IBMEC
- **Semestre:** 2026.2

## Status dos entregáveis

- [ ] Estrutura HTML das páginas
- [ ] Estilização CSS (mobile first)
- [ ] Responsividade (mobile, tablet e desktop)
- [ ] Menu hambúrguer (mobile) e menu completo (desktop)
- [ ] Imagens e remoção de placeholders vazios
- [ ] Revisão de alinhamentos, espaçamentos e organização do layout
- [ ] Sistema de agendamento (testado após as edições)
- [ ] Interatividade com JavaScript
- [ ] Documentação Scrum
- [ ] Documentação do agendamento
- [ ] Protótipo atualizado com o agendamento
- [ ] Publicação no GitHub Pages
- [ ] Revisão e testes finais
