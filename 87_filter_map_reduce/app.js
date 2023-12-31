function example01() {
    /**
     *  retorne a soma do dobro de todos os pares
     */

    const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
    const copy_numbers = [...numbers];

    const double_sum_of_all_pairs = copy_numbers
        .filter((value) => value % 2 === 0)
        .map((value) => value * 2)
        .reduce((accumulator, value) => accumulator + value);

    console.log('\nSoma do dobro de todos os pares:', double_sum_of_all_pairs);
}
example01();