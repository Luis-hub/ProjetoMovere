function usuario (){
      this.nome = 'joão oliveira',
      this.investimento = 'valores investido',
      this.encargo =  'aquiziçãos',
      this.aplicação =  1000,
      this.soma = function(a, b){
          return a + b;
      }

}


console.log(new usuario());
console.log('usuario cadastro com sucesso');



