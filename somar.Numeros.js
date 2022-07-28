function somarNumeros(array) {
    return array.reduce( 

        function(anterior, atual ) {
        console.log({ anterior });
        console.log({ atual });
        return anterior + atual;
    } )
}

const myarray = [1, 2];

console.log(somarNumeros(myarray));
