import { escreva, leia } from './modules/io.mjs';

var nome = await leia('Qual é o seu nome?');
var cidade = await leia('Onde você mora?');

escreva(`Bem vindo ${nome} de ${cidade}`);
