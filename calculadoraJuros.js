/*crie uma classe parcela que tenha um método que calcule o valor da parcela com 
    n , valor juros, valor amortização, iof,e saldo devedor.
*/
class Parcela {
    constructor(n, valorJuros, valorAmortizacao, iof, saldoDevedor, totalJuros, totalAmortizado) {
        this.n = n;
        this.valorJuros = valorJuros;
        this.valorAmortizacao = valorAmortizacao;
        this.iof = iof;
        this.saldoDevedor = saldoDevedor;
        this.totalJuros = totalJuros;
        this.totalAmortizado = totalAmortizado;
    }

    calculaValorParcela() {
        return this.valorJuros + this.valorAmortizacao + this.iof;
    }
}

/*crie uma classe Ficanciamento abstrata que receba em seu construtor  o numero de meses, valor juros, valor amortização, iof,e saldo devedor e gere
    um array com todas as parcelas utiliazando a classe Parcela.
*/
class Financiamento {
    constructor(numeroMeses, valorJuros, valorAmortizacao, iof, saldoDevedor) {
        this.numeroMeses = numeroMeses;
        this.valorJuros = valorJuros;
        this.valorAmortizacao = valorAmortizacao;
        this.iof = iof;
        this.saldoDevedor = saldoDevedor;
        this.parcelas = [];
    }

    calculaParcelas() {
        for (let i = 1; i <= this.numeroMeses; i++) {
            let valorJuros = this.saldoDevedor * this.valorJuros;
            let valorAmortizacao = this.saldoDevedor * this.valorAmortizacao;
            let iof = this.saldoDevedor * this.iof;
            let parcela = new Parcela(i, valorJuros, valorAmortizacao, iof, this.saldoDevedor);
            
            this.parcelas.push(parcela);
            this.saldoDevedor -= valorAmortizacao;
            
        }
    }
}
