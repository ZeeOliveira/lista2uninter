let corOriginal = document.body.style.backgroundColor; // Armazena a cor original

function MudarCor(cor) {
    let corAtual = document.body.style.backgroundColor;
    
    if (corAtual === cor) {
        document.body.style.backgroundColor = corOriginal; // Volta para a cor original
    } else {
        document.body.style.backgroundColor = cor;
    }
}
