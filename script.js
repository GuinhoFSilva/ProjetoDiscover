function mudarTema(){
    const body = document.body
    body.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(document.body.classList.contains('light')){
        img.setAttribute('src', './assets/perfil-light.PNG')
        img.setAttribute('alt', 'foto de perfil tema claro')
    }else{
        img.setAttribute('src', './assets/perfil-dark.jpg')
        img.setAttribute('alt', 'foto de perfil tema escuro')
    }
}
