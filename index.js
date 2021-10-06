 // uma função que recebe dois argumentos 
// aqui e invocação da uma função com impressao de um this do escopo

function usuario1 (){
    this.nome = 'joão oliveira',
    this.conta = 'banco do brasil',
    this.senha =  'xxx-000',
    this.saldo =  1000,
    this.soma = function(a, b){
        return a + b;
    }

}

// multiplos argumento na funação
// escrita de texto e variaveis no console para consulta

console.log(new usuario1());
console.log('usuario cadastro com sucesso');


// aqui e invocação da uma função com impressao de um this do escopo
// uma função que recebe dois argumentos
function usuario (){
    this.nome = 'joão oliveira',
    this.investimento = 'valores investido',
    this.encargo =  'aquiziçãos',
    this.aplicação =  1000,
    this.soma = function(a, b){
        return a + b;
    }

}


// multiplos argumento na funação
// escrita de texto e variaveis no console para consulta

console.log(new usuario());
console.log('valores de investimento bem sucedido');



// aqui e invocação da uma função com impressao de um this do escopo
// uma função que recebe dois argumentos
function usuario2 (){
    this.nome = 'joão oliveira',
    this.conta = 'caixa economica',
    this.senha =  'xxx-000',
    this.saldo =  1000,
    this.soma = function(a, b){
        return a + b;
    }

}


// multiplos argumento na funação
// escrita de texto e variaveis no console para consulta

console.log(new usuario2());
console.log('usuario cadastro com sucesso');

saldo = {
    conta1 : "banco do brasil ",
    conta2 : "caixa economica",
    Caracteristicas : [" Valor do saldo 1000", 1.0, "saldo 2000"],

    exibirDetalhes : function(){
      console.log("saldo1: " + this.saldo1 + " - saldo2: " + this.saldo2)
    }
}

saldo.exibirDetalhes();
console.log(saldo.Caracteristicas[0])


saldo = {
    conta1 : "banco do brasil ",
    conta2 : "caixa economica",
    Caracteristicas : ["Valor do saldo 2000", 1.0, "saldo 1000"],

    exibirDetalhes : function(){
      console.log("saldo1: " + this.saldo1 + " - saldo2: " + this.saldo2)
    }
}

saldo.exibirDetalhes();
console.log(saldo.Caracteristicas[0])

//const sum = function (saldo1, saldo2){

  //  console.log(saldo1 + saldo2);
    //console.log('valor do saldo e positivo');
    


//}


//sum (1000, 2000)

// escrita de texto e variaveis no console para consulta