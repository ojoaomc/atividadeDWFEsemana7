var nome = prompt("Informe o seu nome:");

var rendaInput = prompt("Informe a sua renda mensal:");

while (rendaInput === "" || rendaInput === null || isNaN(Number(rendaInput))) {
    rendaInput = prompt("Valor inválido! Digite um número válido para a renda mensal:");
} 
var renda = Number(rendaInput);

var qtdDespesasInput = prompt("Quantas despesas você deseja informar?");
while (qtdDespesasInput === "" || qtdDespesasInput === null || isNaN(Number(qtdDespesasInput))) {
    qtdDespesasInput = prompt("Valor inválido! Digite um número para a quantidade de despesas:");
}
var qtdDespesas = Number(qtdDespesasInput);

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

var totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let despesaInput = prompt(`Digite o valor da Despesa ${i}:`);
    
    while (despesaInput === "" || despesaInput === null || isNaN(Number(despesaInput))) {
        despesaInput = prompt(`Valor inválido! Digite um número para a Despesa ${i}:`);
    }
    
    totalDespesas += Number(despesaInput);
}

var sobra = renda - totalDespesas;
var mensagemClassificacao = "";

if (totalDespesas > renda) {
    mensagemClassificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= (renda * 0.30)) {
        mensagemClassificacao = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagemClassificacao = "🙂 Ok: dá para melhorar a sobra.";
    }
}

var resumo = "--- RESUMO DO ORÇAMENTO ---\n" +
"Nome: " + nome + "\n" +
"Renda: R$"  + renda.toFixed(2) + "\n" +
"Total de Despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
"Sobra: R$ " + sobra.toFixed(2) + "\n" +
"Classificação: " + mensagemClassificacao;

alert(resumo);
console.log(resumo);