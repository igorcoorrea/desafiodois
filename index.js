function calcularSaldoRankeadas(vitorias, derrotas) {
    var saldo = vitorias - derrotas;
    return saldo;
}

function obterNivel(saldo) {
    if (saldo >= 50) {
        return "Mestre";
    } else if (saldo >= 20) {
        return "Avançado";
    } else if (saldo >= 5) {
        return "Intermediário";
    } else {
        return "Iniciante";
    }
}

var vitorias = 43;
var derrotas = 25;
var saldo = calcularSaldoRankeadas(vitorias, derrotas);
var nivel = obterNivel(saldo);

console.log("O Herói tem saldo de " + saldo + " está no nível de " + nivel);