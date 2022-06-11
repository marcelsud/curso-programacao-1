import { escreva, leia } from './modules/io.mjs';

const nome = await leia('Qual é o seu nome?');
const cidade = await leia('Onde você mora?');

escreva(`Bem vindo ${nome} de ${cidade}`);
