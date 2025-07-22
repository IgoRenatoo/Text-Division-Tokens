const fs = require('fs')
const path = require('path')

// Caminho da pasta com os arquivos .txt
const pasta = './'  // ou './blocos' se estiver em uma subpasta

// Lista todos os arquivos .txt da pasta
const arquivosTxt = fs.readdirSync(pasta).filter(arquivo => arquivo.endsWith('.txt'))

// Conta palavras por arquivo
arquivosTxt.forEach(arquivo => {
  const conteudo = fs.readFileSync(path.join(pasta, arquivo), 'utf-8')

  // Conta palavras (separadas por espaço ou quebra de linha)
  const palavras = conteudo.trim().split(/\s+/).filter(Boolean)
  const total = palavras.length

  console.log(`📄 ${arquivo} → ${total} palavras`)
})
