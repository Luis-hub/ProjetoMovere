function usuario (){
    this.nome = 'joão oliveira',
    this.conta = 'banco do brasil',
    this.senha =  'xxx-000',
    this.saldo =  1000,
    this.soma = function(a, b){
        return a + b;
    }

}


console.log(new usuario());
console.log('usuario cadastro com sucesso');
