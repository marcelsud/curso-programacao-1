import readline from 'readline';

function print(...a) {
  if (Array.isArray(a)) {
    console.log(a.join(''));
  } else {
    console.log(a);
  }
}

function input(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question || '', function (name) {
      rl.close();
      resolve(name);
    });
  });
}

export { print, input };
