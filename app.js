let criaHtml =  ()=> {
    let home = document.querySelector('#home').innerHTML
    if (screen.width < 575) {
        home.innerHTML = ''
        home.innerHTML = 'Bem-vindo ao Apenunga Eco Hotel'
        let btn = home.createElement('button')
        btn.classList.add('btn btn-lg btn-custom btn-verde')
        btn.innerHTML = 'ENTRE EM CONTATO CONOSCO'
    }
    

}

criaHtml()