// usar o express no servidor
const express = require("express") // pedindo o express e passando para a variável
const server = express() // vai executar a função express


// configurar pasta pública
server.use(express.static("public")) // configuração do servidor


// utilizando template engine
const nunjucks = require("nunjucks") // pedindo o nunjucks
nunjucks.configure("src/views", {
    express: server, // ligando o nunjucks ao express
    noCache: true // para que não tenha cache
})


// configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
// __dirname retorna o nome diretório
// render: renderização
server.get("/", (req, res) => { // get: verbo http (pedido) / a barra via get vai responder uma função
    return res.render("index.html", {title: "Um título"}) // resposta renderiza e envia uma mensagem (index)
})

server.get("/create-point", (req, res) => { // get: verbo http (pedido) / a barra via get vai responder uma função
    return res.render("create-point.html") // resposta renderiza e envia uma mensagem (create-point)
})

server.get("/search-results", (req, res) => { // get: verbo http (pedido) / a barra via get vai responder uma função
    return res.render("search-results.html") // resposta renderiza e envia uma mensagem (create-point)
})


// ligar o servidor
server.listen(3000) // função que vai ouvir a porta 3000



