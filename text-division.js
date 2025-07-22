const fs = require('fs')
const { encode } = require('gpt-3-encoder')

// Lê o arquivo da transcrição otimizada
const transcricao = fs.readFileSync('./transcricao-otimizada.txt', 'utf-8')

// Define o limite de tokens por bloco (ex: 3000 tokens)
const LIMITE_TOKENS = 25000

// Converte o texto em tokens
const tokens = encode(transcricao)

// Função para dividir tokens em partes menores
function dividirTokens(tokens, limite) {
  const blocos = []

  for (let i = 0; i < tokens.length; i += limite) {
    const bloco = tokens.slice(i, i + limite)
    blocos.push(bloco)
  }

  return blocos
}

// Divide os tokens em blocos menores
const blocosTokenizados = dividirTokens(tokens, LIMITE_TOKENS)

// Converte os tokens de volta para texto
const { decode } = require('gpt-3-encoder')
const blocosTexto = blocosTokenizados.map(bloco => decode(bloco))

// Salva os blocos como arquivos separados
blocosTexto.forEach((bloco, i) => {
  fs.writeFileSync(`bloco-${i + 1}.txt`, bloco)
  console.log(`✅ Bloco ${i + 1} salvo com sucesso (${bloco.length} caracteres)`)
})
