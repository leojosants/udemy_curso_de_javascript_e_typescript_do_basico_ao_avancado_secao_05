function example01() {
    /**
     *  some todos os numeros (reduce) 
     */

    const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

    // some todos os numeros (reduce) 
    const sum = numbers.reduce((accumulator, number) => accumulator += number);

    console.log('\nSoma do valores:', sum);

    example01();
}

function example02() {
    /**
     * retorne a pessoa mais velha
     */

    const people = [
        { name: 'Luiz', age: 62 },
        { name: 'Maria', age: 23 },
        { name: 'Eduardo', age: 55 },
        { name: 'Letícia', age: 10 },
        { name: 'Rosana', age: 64 },
        { name: 'Wallace', age: 63 },
    ];

    const older_person = people.reduce(function (accumulator, object) {
        if (accumulator.age > object.age) return accumulator;
        return object;
    });

    console.log('\nPessoa mais velha:', older_person);
}
example02()