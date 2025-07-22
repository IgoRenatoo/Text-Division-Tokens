const fs = require('fs')

// Lista de palavras e frases que não agregam
const palavrasDesnecessarias = [
  'a gente', 'tipo', 'então', 'né', 'tá bom', 'beleza', 'tá', 'ok',
  'sei lá', 'é isso aí', 'só para', 'só que', 'assim', 'né?', 'tá?', 'tudo bem?', 'entendeu?',
  'show de bola', 'valeu', 'tá beleza', 'na verdade', 'por exemplo',
  'bom', 'legal', 'bacana'
]

// Regex para remover frases e vícios de linguagem
function limparTexto(texto) {
  let limpo = texto

  // Remove palavras de preenchimento
  palavrasDesnecessarias.forEach(palavra => {
    const regex = new RegExp(`\\b${palavra}\\b`, 'gi')
    limpo = limpo.replace(regex, '')
  })

  // Remove repetições excessivas de pontuação ou espaços
  limpo = limpo.replace(/\n{2,}/g, '\n')       // múltiplas linhas vazias
  limpo = limpo.replace(/[ ]{2,}/g, ' ')       // espaços duplicados
  limpo = limpo.replace(/[,]{2,}/g, ',')       // vírgulas duplicadas
  limpo = limpo.replace(/\.+\s*/g, '. ')       // muitos pontos seguidos

  return limpo.trim()
}

// Lê o arquivo original
const textoOriginal = fs.readFileSync('./transcricao.txt', 'utf-8')

// Limpa o texto
const textoLimpo = limparTexto(textoOriginal)

// Salva texto limpo
fs.writeFileSync('./transcricao-otimizada.txt', textoLimpo)
console.log('✅ Transcrição otimizada salva como "transcricao-otimizada.txt"')
