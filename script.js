function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso)) {
        alert('Preencha os campos com valores numéricos.');
        return;
    }

    const imc = peso / (altura / 100) ** 2;
    const classificacao = classificarIMC(imc);

    document.getElementById('imc-valor').textContent = imc.toFixed(2);
    document.getElementById('imc-classificacao').textContent = classificacao;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Sobrepeso';
    } else if (imc < 35) {
        return 'Obesidade Grau I';
    } else if (imc < 40) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}
