const input = document.getElementById('nota');
const enviar = document.querySelector('.btn');
const calcular = document.querySelector('.bot');
const resetar = document.querySelector('.reset')
const resultado = document.getElementById('resultado');
const result = document.getElementById('result');

const notas = [];

enviar.addEventListener('click', () => {
    const nota = parseFloat(input.value); 

    if((isNaN(nota)) || (nota < 0) || (nota > 10)) {
        alert('Digite um número entre 0 e 10');
    } else {
        notas.push(nota);
        input.value = '';
    }
});

calcular.addEventListener('click', () => {
    if(notas.length === 0) {
        alert('Digite suas notas');
        return
    }

    const soma = notas.reduce((acc, curr) => acc + curr, 0);
    const media = soma / notas.length;

    resultado.textContent = `Sua média é: ${media.toFixed(2)}`


    if(media >= 6) {
        result.textContent = `Aprovado`
        result.style.color = 'green';
    }else {
        result.textContent = `Reprovado`
        result.style.color = 'red';
    }
});

resetar.addEventListener('click', () => {
    notas.length = 0;
    input.value = '';
    result.textContent = '';
    resultado.textContent = '';
});

