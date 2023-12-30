function example01() {
    const names = ['Eduardo', 'Maria', 'Joana'];
    names[2] = 'João';
    delete names[2];
    console.log(names);
    example01();
}

function example02() {
    const names = new Array('Eduardo', 'Maria', 'Joana');
    names[2] = 'João';
    delete names[2];
    console.log(names);
    example02();
}

function example03() {
    const names = ['Eduardo', 'Maria', 'Joana'];
    const new_names = [...names];
    new_names.pop()

    console.log('name .......:', names);
    console.log('new_names ..:', new_names);
    example03();
}

function example04() {
    const names = ['Eduardo', 'Maria', 'Joana'];
    console.log('names ..:', names.length);
    example04();
}

function example05() {
    const names = ['Eduardo', 'Maria', 'Joana'];
    const removed = names.pop();
    console.log('removed ..:', removed);
    console.log('names ....:', names);
    example05();
}

function example06() {
    const names = ['Eduardo', 'Maria', 'Joana'];
    const removed = names.shift();
    console.log('removed ..:', removed);
    console.log('names ....:', names);
    example06();
}

function example07() {
    const names = ['Eduardo', 'Maria', 'Joana'];
    names.push('João');
    console.log('names:', names);
    example07();
}

function example08() {
    const names = ['Eduardo', 'Maria', 'Joana'];
    names.unshift('João');
    console.log('names:', names);
    example08();
}

function example09() {
    const names = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
    const new_names = names.slice(1, 3);
    console.log('names......:', names);
    console.log('new_names..:', new_names);
    example09();
}

function example10() {
    const names = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
    const new_names = names.slice(1, -1);
    console.log('names......:', names);
    console.log('new_names..:', new_names);
    example10();
}

function example11() {
    const full_name = 'Leonardo José de Oliveira Santos';
    const split_name = full_name.split(' ');
    console.log(split_name);
    example11();
}

function example12() {
    const full_name = 'Leonardo, José, de, Oliveira Santos';
    const split_name = full_name.split(',');
    console.log(split_name);
    example12();
}

function example13() {
    const full_name = ['Leonardo', 'José', 'de', 'Oliveira Santos'];
    const join_name = full_name.join(' ');
    console.log(join_name);
}
example13();