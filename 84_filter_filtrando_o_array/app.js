function example01() {
    // retorne os numeros maiores que 10
    const numbers = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];
    const numbers_greater_than_10 = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) { numbers_greater_than_10.push(numbers[i]); }
    }

    console.log('Números maior que 10: ', numbers_greater_than_10);
    example01();
}

function example02() {
    /*
    *   retorne os numeros maiores que 10
    */
    
    const numbers = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];

    function callbackFilter(value) {
        return value > 10;
    }

    const numbers_greater_than_10 = numbers.filter(callbackFilter);
    
    console.log('Números maiores que 10:', numbers_greater_than_10);
    example02();
}

function example03() {
    /*
    *   retorne os numeros maiores que 10
    */
    
    const numbers = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];

    const numbers_greater_than_10 = numbers.filter(function callbackFilter(value) {
        return value > 10;
    });
    
    console.log('Números maiores que 10:', numbers_greater_than_10);
    example03();
}

function example04() {
    /*
    *   retorne os numeros maiores que 10
    */
    const numbers = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];
    const numbers_greater_than_10 = numbers.filter((number) => number > 10);
    console.log('Números maiores que 10:', numbers_greater_than_10);
    example04();
}

function example05() {
    /*
    *   retorne os numeros maiores que 10
    */
    const numbers = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];
  
    const numbers_greater_than_10 = numbers.filter((value, indice, array) => {
        console.log(value, indice, array);
        return value > 10
    });
  
    console.log('Números maiores que 10:', numbers_greater_than_10);
    example05();
}

function example06() {
    /*
    *   retorne as pessoas que tem o nome com 5 letras ou mais
    *   retorne as pessoas com mais de 50 anos
    *   retorne as pessoas cujo nome termina com 'a'
    */
    
    const people = [
        { name: 'Luiz', age: 62 },
        { name: 'Maria', age: 23 },
        { name: 'Eduardo', age: 55 },
        { name: 'Letícia', age: 19 },
        { name: 'Rosana', age: 32 },
        { name: 'Wallace', age: 47 },
    ];
    
    // retorne as pessoas que tem o nome com 5 letras ou mais
    const people_with_5_letters_or_more = people.filter((object) => object.name.length >= 5);
   
    // retorne as pessoas com mais de 50 anos
    const people_over_50_years_old = people.filter((object) => object.age >= 50);

    // retorne as pessoas cujo nome termina com 'a'
    const people_whose_name_ends_with_a = people.filter((object) => object.name.toLowerCase().endsWith('a'));

    console.log('\nPessoa(s) que tem o nome com 5 letras ou mais:\n', people_with_5_letters_or_more)
    console.log('\nPessoa(s) com mais de 50 anos:\n', people_over_50_years_old)
    console.log('\nPessoa(s) cujo nome termina com "a":\n', people_whose_name_ends_with_a)
}
example06();