# Scrum: Equipe 1 (PKZ Lab & One to One) - AC (site Vanilla)

Esta pasta documenta como a Equipe 1 aplicou o **Scrum** para organizar o trabalho da AC da disciplina Projeto Front-end (IBMEC 2026.2): o desenvolvimento do site da PKZ Lab & One to One em **HTML, CSS e JavaScript puro (Vanilla)**. Os registros foram montados com base no histórico de commits do repositório e nos requisitos passados pelo professor.

## Conteúdo da pasta

```
docs/scrum/
├── README.md            - papéis, eventos, artefatos e acordos do time
├── product-backlog.md   - backlog do produto priorizado (AC)
└── sprints/
    ├── sprint-01.md     - 12/10 a 18/10 - Kick-off e criação do repositório
    ├── sprint-02.md     - 19/10 a 25/10 - Implementação do site
    └── sprint-03.md     - 25/10 - Fechamento, testes, documentação e publicação
```

---

## 1. Papéis (Scrum Team)

| Papel | Quem | Responsabilidades no projeto |
|---|---|---|
| **Product Owner** | Prof. Thiago Marcondes Santos | Define os requisitos e os prazos da AC (mobile first, menu hambúrguer, imagens sem placeholder, agendamento), prioriza o que deve ser feito, aceita ou pede correções nas entregas e dá o feedback da apresentação. |
| **Scrum Master** | Enzo Trotto | Conduz as reuniões, remove impedimentos, mantém o repositório organizado (README, estrutura de pastas) e cuida da documentação do Scrum. |
| **Time de Desenvolvimento** | Alexia Schmid, Bernardo Gomes, Bernardo Nemirovsky, Gabriel Góis, Guilherme Macedo, João Pedro Ferreira | Constroem o site (HTML, CSS e JS), integram o sistema de agendamento e se auto-organizam na divisão das tarefas. |

**Cliente / stakeholder:** PKZ Lab & One to One - fonte do conteúdo e do material (fotos, textos) usado no site, e referência de público e identidade visual de cada marca (levantados na AP1).

---

## 2. Eventos

| Evento | Como fizemos | Duração |
|---|---|---|
| **Sprint** | Sprints de **1 semana** (segunda a domingo), alinhadas às aulas de terça-feira. A Sprint 3 foi curta: encerrou em 25/10, antes da apresentação de terça (27/10). | 1 semana (Sprint 3: 1 dia) |
| **Sprint Planning** | No início da semana, após a aula, o time escolhe os itens do Product Backlog para a sprint e divide os arquivos/páginas entre os membros. | ~30 min |
| **Daily Scrum** | Reunião rápida no Discord: cada membro informa o que fez, o que vai fazer e se tem algum impedimento. | ~15 min |
| **Sprint Review** | Revisão do que foi entregue no repositório (commits e site aberto no navegador) e, quando possível, validação com o professor. | ~30 min |
| **Sprint Retrospective** | Ao fim da sprint, o time lista o que funcionou, o que não funcionou e define ações de melhoria para a próxima. | ~15 min |

As reuniões acontecem no **Discord** (com compartilhamento de tela). Fora das reuniões, a comunicação por mensagem é feita pelo WhatsApp e pelo Discord.

---

## 3. Artefatos

| Artefato | Onde está |
|---|---|
| **Product Backlog** | [`product-backlog.md`](product-backlog.md) |
| **Sprint Backlog** | Seção "Sprint Backlog" de cada arquivo em [`sprints/`](sprints/) |
| **Incremento** | O próprio site versionado no repositório (`index.html`, `pages/`, `css/`, `js/` e `assets/`) |

### Meta do Produto (Product Goal)

> Entregar o site da PKZ Lab e do Studio One to One em HTML, CSS e JavaScript puro - com portal de entrada comum e uma página por marca - que leve o visitante a agendar uma aula experimental pelo WhatsApp, com layout mobile first, menu hambúrguer no celular, imagens reais (sem placeholders) e publicação no GitHub Pages.

---

## 4. Acordos do time

### Definition of Ready (DoR): um item pode entrar na sprint quando:
- Está escrito como história de usuário ou tarefa clara, com critério de aceitação.
- Está ligado a um requisito do professor ou a uma necessidade das marcas.
- Tem um responsável definido na Sprint Planning.

### Definition of Done (DoD): um item só está pronto quando:
- O arquivo está no repositório, na pasta correta (`pages/`, `css/`, `js/` ou `assets/`).
- Foi aberto no navegador e testado no **celular (mobile first)** e no **desktop**.
- Foi revisado por pelo menos mais um membro da equipe.
- Não tem imagem quebrada, espaço de imagem vazio ou placeholder.
- Tem respiro adequado entre os elementos, sem textos colados nas bordas.
- Se mexe em `base.css`, `cta.css`, `extras.css` ou nos scripts de `js/`, foi testado nas **duas marcas** (PKZ e One to One).
- Se mexe no agendamento, o fluxo completo (dia, horário, formulário e envio) foi testado depois da edição.
- O status do entregável foi atualizado no `README.md` principal.

### Convenções de trabalho
- **Git:** commits pequenos e descritivos em português, direto na `main`; sempre dar `git pull` antes de começar e avisar no grupo qual arquivo está editando.
- **Divisão por arquivo:** cada pessoa fica responsável por arquivos/páginas diferentes, para evitar conflitos.
- **Pastas:** criar o arquivo já com o conteúdo, na pasta certa (sem commitar arquivo vazio nem pasta com arquivo placeholder).
- **Autoria:** cada membro configura `git config user.name` / `user.email` uma única vez.
- **Comunicação:** Discord para as reuniões, WhatsApp e Discord para mensagens, GitHub para o código.

---

## 5. Contribuição por pessoa (AC)

Commits de 14/10 a 25/10/2026 (31 no total), com os nomes de autor unificados (o repositório tem 11 identidades de autor para 7 pessoas).

| Pessoa | Commits | Foco principal |
|---|---|---|
| Enzo Trotto | 10 | Repositório inicial, README, `main.js` (menu hambúrguer, janela de contato, WhatsApp, voltar ao topo), `extras.css` e `cta.css` (SM) |
| João Pedro Ferreira | 9 | README (estrutura e observações técnicas), `base.css`, favicon, `.gitignore`, limpeza de placeholders | Documentação (Scrum e Agendamento) | Protótipo Atualizado Figma
| Bernardo Nemirovsky | 5 | Estrutura de pastas, `pkz.html` + `pkz.css`, páginas de aula experimental, versões `-480/-800/-1280` das fotos ("corrigindo fotos") |
| Alexia Schmid | 5 | `one-to-one.html`, `one-to-one.css`, imagens da One to One e correção da pasta de imagens |
| Bernardo Gomes | 1 | `agendamento.js` e `data.js` (lógica base do agendamento) |
| Gabriel Góis | 1 | `index.html` (portal), `portal.js` e imagens do portal |
| Guilherme Macedo | 1 | `portal.css`, `legal.css`, `404.html` e `privacidade.html` |

> Número de commits não mede contribuição: vários commits aqui são de arquivo vazio seguido do commit com o conteúdo, e um único commit pode trazer centenas de linhas (ex.: `portal.css` tem 872).

---

## 6. Roadmap

| Sprint | Período | Objetivo | Status |
|---|---|---|---|
| [Sprint 1](sprints/sprint-01.md) | 12/10 - 18/10 | Criar o repositório e os arquivos iniciais | Concluída |
| [Sprint 2](sprints/sprint-02.md) | 19/10 - 25/10 | Implementar o portal, as páginas das duas marcas, o CSS e o agendamento | Concluída (com pendências) |
| [Sprint 3](sprints/sprint-03.md) | 25/10 (apresentação na terça, 27/10) | Testes do agendamento, responsividade, documentação e fechamento do site | Concluída (com pendências: WhatsApp real, 404, GitHub Pages) |
