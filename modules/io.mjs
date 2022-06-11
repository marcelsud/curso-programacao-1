import readline from 'readline';

function escreva(...a) {
  if (Array.isArray(a)) {
    console.log(a.join(''));
  } else {
    console.log(a);
  }
}

function leia(mensagem) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    const question = mensagem ? mensagem + ' ' : '';
    rl.question(question, function (name) {
      rl.close();
      resolve(name);
    });
  });
}

export { escreva, leia };
