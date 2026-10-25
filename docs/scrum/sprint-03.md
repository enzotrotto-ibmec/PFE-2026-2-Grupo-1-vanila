# Sprint 3: Fechamento, testes, documentação e publicação

**Período:** 25/10/2026 (sprint curta, encerrada no mesmo dia; a apresentação do site é na terça, 27/10)
**Scrum Master:** Enzo Trotto

## Sprint Goal

> Fechar o site para a apresentação de terça (27/10): agendamento testado, layout revisado (mobile, tablet e desktop), documentação completa (Scrum, agendamento e protótipo) e site pronto para publicar no GitHub Pages.

## Sprint Backlog

| Item | Tarefa | Responsável | Status |
|---|---|---|---|
| PB-23 | Conferir no navegador que não há imagem quebrada nem espaço vazio e que todas as imagens têm texto alternativo | Equipe | Concluído |
| PB-20 | Testar o fluxo do agendamento (dia, horário, formulário, validação de CPF e envio pelo WhatsApp) nas duas marcas, no celular e no desktop | João Pedro Ferreira | Concluído (17 testes passaram) |
| PB-09 | Revisar alinhamentos, espaçamentos e organização do layout em todas as páginas | Equipe | Concluído |
| PB-10 | Testar a responsividade em celular, tablet e desktop | Equipe | Concluído |
| PB-28 | Documentar o agendamento (`docs/agendamento/agendamento.md`) | João Pedro Ferreira | Concluído |
| PB-29 | Atualizar o protótipo no Figma com os prints do site funcionando, incluindo o agendamento | João Pedro Ferreira | Concluído (falta só colocar o link em `docs/prototipo/`) |
| PB-27 | Atualizar a documentação do Scrum (`docs/scrum/`) com os commits até 25/10 | Enzo Trotto | Concluído |
| PB-24 | Trocar o número de WhatsApp de exemplo pelo real (depende do cliente) | A definir | Não concluído: segue `5521000000000` em `data.js` |
| PB-15 | Corrigir o `<base href>` do `404.html` para o nome do repositório publicado | A definir | Não concluído: segue `/PFEcodigo-prototipo/` |
| PB-26 | Publicar no GitHub Pages e colocar o link no README | A definir | Não concluído |
| PB-30 | Ensaiar e apresentar o site | Equipe toda | Ensaio a combinar; apresentação na terça, 27/10 |

## Sprint Review

- **Entregue:** agendamento testado nas duas marcas, documentação do agendamento escrita, protótipo no Figma com os prints do site e do fluxo de agendamento (desktop e celular), documentação do Scrum atualizada e imagens conferidas (nenhuma quebrada, todas com texto alternativo).
- **Não concluído:** número real de WhatsApp (depende do cliente), `<base href>` do `404.html`, publicação no GitHub Pages e o ensaio. Os quatro itens ficam para antes da apresentação de terça.
- **Principal aprendizado sobre o produto:** o agendamento funciona do início ao fim, e trocar o WhatsApp é uma mudança de uma linha por marca em `data.js`.

## Sprint Retrospective

| O que funcionou | O que não funcionou | Ação até a apresentação |
|---|---|---|
| Testar o agendamento com um roteiro fixo (dia, horário, campos inválidos, CPF, envio) deixou claro o que estava funcionando. | O que depende de fora do time (número real do cliente) e da publicação ficou por último. | Definir hoje quem troca o WhatsApp, quem corrige o `<base href>` e quem publica no GitHub Pages, e testar o site publicado. |
| Prints e Figma deram uma visão única do site para documentar. | Mais uma vez, a maior parte do trabalho ficou concentrada no fim do prazo. | Ensaiar a apresentação com ordem de falas definida antes de terça. |
