# 📄 Text Divider & Optimizer

Um conjunto de scripts Node.js criado para **limpar, dividir e analisar** transcrições de áudio longas, otimizando textos e facilitando seu uso em modelos de linguagem (como GPT). Ideal para manipulação de transcrições extensas antes do processamento por IA.

## 🎯 Objetivo

Este projeto tem como finalidade:

- 🔍 **Otimizar** textos removendo palavras e expressões desnecessárias.
- ✂️ **Dividir** arquivos longos em blocos menores, respeitando limites de tokens (útil para APIs de IA como OpenAI).
- 📊 **Contar palavras** de cada arquivo, facilitando o controle e análise dos blocos gerados.

## 📦 Estrutura do Projeto

- `otimization.js`: Remove vícios de linguagem e redundâncias da transcrição original.
- `text-division.js`: Divide o texto otimizado em blocos menores de acordo com o limite de tokens.
- `counter.js`: Conta e exibe a quantidade de palavras de cada bloco gerado.

## 🚀 Fluxo Completo

### 1️⃣ Limpeza da Transcrição

Arquivo: `otimization.js`

- Entrada: `transcricao.txt`
- Processo: Remove palavras de preenchimento (ex.: "tipo", "né", "então") e pontuação excessiva.
- Saída: `transcricao-otimizada.txt`

```bash
node otimization.js
```

### 2️⃣ Divisão em Blocos

Arquivo: `text-division.js`

- Entrada: `transcricao-otimizada.txt`
- Processo:

  - Converte o texto em tokens usando `gpt-3-encoder`.
  - Divide os tokens em blocos menores (ex.: 25.000 tokens).
  - Salva cada bloco como `bloco-1.txt`, `bloco-2.txt`, etc.

- Configurável: Altere `LIMITE_TOKENS` conforme necessidade.

```bash
node text-division.js
```

### 3️⃣ Contagem de Palavras

Arquivo: `counter.js`

- Entrada: Blocos `.txt` (pasta atual).
- Processo: Conta as palavras de cada bloco e exibe o total por arquivo.

```bash
node counter.js
```

## ⚙️ Requisitos

- Node.js
- Pacote: `gpt-3-encoder`

```bash
npm install gpt-3-encoder
```

## 📊 Benefícios

- Eliminação de ruídos no texto.
- Automação na divisão para modelos de IA.
- Análise rápida da volumetria dos blocos.

## 🛠️ Possíveis Melhorias

- Permitir personalização da lista de palavras a remover.
- Adicionar suporte para salvar os blocos em uma subpasta.
- Implementar interface CLI para configuração dinâmica.
