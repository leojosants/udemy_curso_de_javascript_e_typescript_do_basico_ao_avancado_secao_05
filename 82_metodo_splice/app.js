function example01() {
    const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    const removed_names = names.splice(4, 1);
    console.log('removed_names..:', removed_names);
    console.log('names..........:', names);
    example01();
}

function example02() {
    const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    const removed_names = names.splice(3, 2, 'Luiz', 'Otávio');
    console.log('removed_names..:', removed_names);
    console.log('names..........:', names);
    example02();
}

function example03() {
    const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    const removed_names = names.splice(-1, 1); // pop
    console.log('removed_names..:', removed_names);
    console.log('names..........:', names);
    example03();
}

function example04() {
    const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    const removed_names = names.splice(0, 1); // shift
    console.log('removed_names..:', removed_names);
    console.log('names..........:', names);
    example04();
}

function example05() {
    const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    names.splice(0, 0, 'Luiz'); // unshift
    console.log('names:', names);
    example05();
}

function example06() {
    const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
    names.splice(names.length, 0, 'Luiz'); // push
    console.log('names:', names);
    example06();
}