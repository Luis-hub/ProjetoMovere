function usuario2 (){
    this.nome = 'joão oliveira',
    this.conta = 'caixa economica',
    this.senha =  'xxx-000',
    this.saldo =  1000,
    this.soma = function(a, b){
        return a + b;
    }

}


console.log(new usuario2());
console.log('usuario cadastro com sucesso');
