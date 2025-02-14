// Objeto com as taxas de juros para cada quantidade de parcelas
const taxasJuros = {
    1: 3.10,
    2: 3.93,
    3: 4.67,
    4: 5.41,
    5: 6.16,
    6: 6.92,
    7: 8.08,
    8: 8.84,
    9: 9.61,
    10: 10.39,
    11: 11.17,
    12: 11.96,
    13: 13.05,
    14: 13.85,
    15: 14.65,
    16: 15.46,
    17: 16.28,
    18: 17.10,
    19: 17.93,
    20: 18.76,
    21: 19.60
};

// Função para calcular o valor total da venda com a taxa referente
function calcularValorTotal(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtém os valores do formulário
    const valorVendaInput = document.getElementById("valor_venda");
    let valorVenda = parseFloat(valorVendaInput.value);

    // Verifica se o valor de venda é válido
    if (isNaN(valorVenda) || valorVenda <= 0) {
        alert("Por favor, insira um valor de venda válido.");
        return;
    }

    // Arredonda o valor para duas casas decimais
    valorVenda = Math.round(valorVenda * 100) / 100;

    // Atualiza o valor no campo de input
    valorVendaInput.value = valorVenda.toFixed(2);

    const quantidadeVezes = parseInt(document.getElementById("quantidade_vezes").value);

    // Obtém a taxa de juros correspondente
    const taxaJuros = taxasJuros[quantidadeVezes];

    // Calcula o valor total e o valor da parcela
    const valorTotal = (valorVenda * taxaJuros / 100) + valorVenda;
    const parcela = valorTotal / quantidadeVezes;

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = `
        <p>Valor Total da Venda: R$ ${valorTotal.toFixed(2)}</p>
        <p>Valor de cada Parcela: R$ ${parcela.toFixed(2)}</p>
    `;
}

// Função para calcular o valor disponível após debitar os juros
function calcularValorDisponivel(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtém os valores do formulário
    const valorCobrancaInput = document.getElementById("valor_cobranca");
    let valorCobranca = parseFloat(valorCobrancaInput.value);

    // Verifica se o valor de cobrança é válido
    if (isNaN(valorCobranca) || valorCobranca <= 0) {
        alert("Por favor, insira um valor de cobrança válido.");
        return;
    }

    // Arredonda o valor para duas casas decimais
    valorCobranca = Math.round(valorCobranca * 100) / 100;

    // Atualiza o valor no campo de input
    valorCobrancaInput.value = valorCobranca.toFixed(2);

    const quantidadeParcelas = parseInt(document.getElementById("quantidade_parcelas").value);

    // Obtém a taxa de juros correspondente
    const taxaJuros = taxasJuros[quantidadeParcelas];

    // Calcula o valor debitado e o valor disponível
    const valorDebitado = (valorCobranca * taxaJuros / 100);
    const valorDisponivel = valorCobranca - valorDebitado;
    const parcela = valorCobranca / quantidadeParcelas;

    // Exibe o resultado na página
    document.getElementById("resultado_cobranca").innerHTML = `
        <p class="valor-em-conta">Valor em Conta: R$ ${valorDisponivel.toFixed(2)}</p>
        <p>Valor Retido pela Máquina: R$ ${valorDebitado.toFixed(2)}</p>
        <p>Valor de cada Parcela: R$ ${parcela.toFixed(2)}</p>
    `;
}
