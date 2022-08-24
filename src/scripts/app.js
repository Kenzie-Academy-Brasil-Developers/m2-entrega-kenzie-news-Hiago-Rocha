async function getterAwait(){
    const data = await fetch("https://kenzie-news-api.herokuapp.com/api/news",{
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
    const noticias = await data.json()
    return noticias
}

const noticiasApi = await getterAwait()

console.log(noticiasApi)

let tagUL = document.getElementById("lista")

function listaNoticias(noticiasApi){
    for(let i=0;i<noticiasApi.length;i++){
        let noticia = noticiasApi[i]
        let noticiaCriada = criaNoticia(noticia)

        tagUL.appendChild(noticiaCriada)
    }
}

listaNoticias(noticiasApi)

function criaNoticia(noticia){
    const tagLi   = document.createElement("li")
    const tagImg  = document.createElement("img")
    const tagDiv  = document.createElement("div")
    const tagSpan = document.createElement("span")
    const tagH2   = document.createElement("h2")
    const tagP    = document.createElement("p")
    const tagA    = document.createElement("a")

    tagImg.src        = noticia.imagem
    tagImg.alt        = noticia.titulo
    tagSpan.innerText = noticia.categoria
    tagH2.innerText   = noticia.titulo
    tagP.innerText    = noticia.resumo
    tagA.href         = noticia.noticia_completa
    tagA.innerText    = `Fonte:${noticia.fonte}`

    tagLi.appendChild(tagImg)
    tagLi.appendChild(tagDiv)
    tagDiv.appendChild(tagSpan)
    tagDiv.appendChild(tagH2)
    tagDiv.appendChild(tagP)
    tagDiv.appendChild(tagA)

    return tagLi
}