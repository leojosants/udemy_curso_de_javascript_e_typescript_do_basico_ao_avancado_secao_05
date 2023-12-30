function example01() {
    const array_1 = [1, 2, 3];
    const array_2 = [4, 5, 6];
    const array_3 = array_1.concat(array_2, [7, 8, 9], 'teste');
    console.log(array_3)
    example01();
}

function example02() {
    const array_1 = [1, 2, 3];
    const array_2 = [4, 5, 6];
    const array_3 = [...array_1, ...array_2, ...[7, 8, 9]];
    console.log('array_3:', array_3)
}
example02();