const readline = require('readline');

// Crie a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para ler uma linha de entrada do usuário
function scanner(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Exemplo de uso:
async function inicio() {
    console.log('Bem-vindo!');

    // Utilizando o scanner para ler entrada do usuário
    const n1 = await scanner('Insira o valor de n1: ');

    const n2 = await scanner('Insira o valor de n2: ');
    console.log('A soma deu: ' + soma(n1, n2));
    console.log('A subtração deu: ' + subtrair(n1, n2));

    // Encerra a interface de leitura
    rl.close();
}

function soma(n1, n2) {
    return Number(n1) + Number(n2);
}

function subtrair(n1, n2) {
    return Number(n1) - Number(n2);
}

inicio()