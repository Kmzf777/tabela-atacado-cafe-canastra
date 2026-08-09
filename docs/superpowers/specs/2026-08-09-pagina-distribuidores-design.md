# Página `/distribuidores` — Design

Data: 2026-08-09

## Objetivo
Clonar a página principal (`app/page.tsx`) numa nova rota `/distribuidores` (plural),
com tabela de preços de distribuidor, sem cápsulas/graneis e sem promoções.

## Rota
- Novo arquivo autocontido: `app/distribuidores/page.tsx`.
- Não altera a rota existente `/distribuidor` (singular).
- Segue o padrão dos clones de país (chile/panama/paraguay): página com dados e
  componentes inline, sem extração de componentes compartilhados.

## Título / Hero
- H1 dedicado: "Tabela de Distribuidores — Café Canastra".
- Subtítulo da marca abaixo (mesma linha de frescor/torra sob demanda).
- Logo preta mantida.

## Produtos e preços (tabela única para todas as linhas)
| Produto | Opções |
|---|---|
| Canastra Clássico | 250g moído R$22,70 · 250g grãos R$25,70 · 500g moído R$39,70 · 500g grãos R$41,70 · 1kg grãos R$75,70 |
| Canastra Suave | tabela completa (igual Clássico) |
| Canastra Canela | 250g moído R$22,70 |
| Microlote | 250g moído R$22,70 · 250g grãos R$25,70 |
| Néctar de Minas Gourmet | 500g moído R$39,70 · 1kg grãos R$75,70 |
| Néctar de Minas Blend Arábica com Robusta | 1kg grãos R$75,70 |
| Moedor Café Canastra | R$949 (card escuro especial, sem tiers de granel) |
| Drip Coffee Canastra Suave | Display (10 unid. de sachês) R$19,90 |

## Remoções vs. main
- Sem Cápsulas, sem seção Graneis.
- Néctar renderiza como card normal (sem Black Friday / 20% OFF).
- Moedor: card escuro mantido, mas só com preço R$949 (removidos tiers "10/20 pacotes de granel").
- Néctar Gourmet sem "Kit 10 unidades".
- Sem badges de "Queima de Estoque" / promoções.
- Componentes `PromotionCard`, `CapsulePromotionCard`, `CardNectar` e helper
  `precoComDesconto` não são usados nesta página.

## Rodapé
- Após a seção "Por que Café Canastra?", aviso destacado: **"Frete não incluso"**.

## Estrutura de seções
- Seção "Pacotes": Clássico, Suave, Canela, Microlote, Néctar Gourmet, Néctar Blend, Moedor.
- Seção "Displays": apenas Drip Coffee.
