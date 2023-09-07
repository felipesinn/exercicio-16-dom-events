// 1. Tornar a planilha de cálculos dinâmica com DOM Events. Ao clicar no
// botão calcular efetuar os cálculos solicitados na página.

// 2. Alterar o cálculo do botão calcular para que a cada vez que o
// usuário digitar um valor e sair do input o formulário seja
// automaticamente recalculado.




function getCapturaValor(elementId){
    return Number(document.getElementById(elementId).value);
}

function setValeuElement(elementId, value){
    document.getElementById(elementId).value = value;
}

function calcular(){
    const valorBase = getCapturaValor("valor_base");
    const valorTransporte = getCapturaValor("valor_transporte");
    const valorAlimentacao = getCapturaValor("valor_alimentacao");
    const valorReceita = valorBase + valorTransporte + valorAlimentacao;
    setValeuElement("valor_receita", valorReceita);

    const descontoAutomovel = getCapturaValor("valor_automovel");
    const faltas = getCapturaValor("faltas");
    const somaDesconto = descontoAutomovel + faltas;
    setValeuElement("valor_descontos", somaDesconto)
    
    const somaTotal = valorReceita - somaDesconto ;
    setValeuElement("valor_total", somaTotal)
   
}

