function example01() {
    /*
    *   dobre os numeros
    */
   
    const numbers = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];
    const copy_of_numbers = [...numbers];
    const doubled_numbers = copy_of_numbers.map((number) => number * 2);
   
    console.log('\nNúmeros dobrados:\n', doubled_numbers)
   
    example01();
}

function example02() {
    /*
    *   retorne apenas uma string com o nome da pessoa
    *   remova apenas a chave 'nome' do objeto
    *   adicione uma chave id em cada objeto 
    */

    const people = [
        { name: 'Luiz', age: 62 },
        { name: 'Maria', age: 23 },
        { name: 'Eduardo', age: 55 },
        { name: 'Letícia', age: 19 },
        { name: 'Rosana', age: 32 },
        { name: 'Wallace', age: 47 },
    ];

    const copy_of_people = [...people];
    
    // retorne apenas uma string com o nome da pessoa
    const name = copy_of_people.map((object) => object.name);
    
    // remova apenas a chave 'nome' do objeto
    const ages = copy_of_people.map((object) => ({ age: object.age }));
    
    // adicione uma chave id em cada objeto 
    const key_id = copy_of_people.map((object, indice) => {
        object.id = indice;
        return object;
    });

    console.log('\nNome das pessoas:\n' , name);
    console.log('\nIdades das pessoas:\n' , ages);
    console.log('\nIdades das pessoas:\n' , key_id);

    example02();
}