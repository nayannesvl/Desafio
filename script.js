var card = document.querySelectorAll('.carta')


cartaAleatoria = () => {
    return Math.floor(Math.random()*671);
}

pegarPersonagem = () => {
    var Personagem = cartaAleatoria();
    return fetch(`https://rickandmortyapi.com/api/character/${Personagem}`,{
        method:'GET',
        headers: {
            Accept:'application/json',
            "Content-type": 'application/json'
    }
}).then((response) => response.json()).then((data)=>{
    return data
})  
}
card.forEach(item => {
    pegarPersonagem().then().then(data=>{
        item.querySelector('img').src = data.image
        item.querySelector('img').alt = data.name
        item.querySelector('label').innerText = data.name
    })
})