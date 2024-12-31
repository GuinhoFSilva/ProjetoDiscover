function mudarTema(){
    const body = document.body

    body.classList.toggle('light')
    const img = document.querySelector("#profile img")
    const link = document.getElementById('favicon')

    if(document.body.classList.contains('light')){
        img.setAttribute('src', './assets/perfil-light.jpeg')
        img.setAttribute('alt', 'foto de perfil tema claro')
        link.setAttribute('href', './assets/favicon.png')
    }else{
        img.setAttribute('src', './assets/perfil-dark.jpeg')
        img.setAttribute('alt', 'foto de perfil tema escuro')
        link.setAttribute('href', './assets/4187236.png')
    }

}
