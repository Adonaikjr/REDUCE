const list =[
    {
        name:'chocolate',
        preco: 50
    },
    {
        name:'chocolate',
        preco: 5
    },
    {
        name:'chocolate',
        preco: 5
    },
    {
        name:'chocolate',
        preco: 10
    },
]

const saldoDispovivel = 100;



function calculaSaldo(saldoDispovivel, lista){
    
    return lista.reduce(

        function(anterior, atual, index){
            console.log('rodada', index + 1)
            console.log({ anterior });
            console.log({ atual })
            return anterior - atual.preco
        }, 
        
        saldoDispovivel
    );
}

console.log(calculaSaldo(saldoDispovivel, list))

