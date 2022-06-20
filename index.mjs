import { print, input } from './modules/io.mjs';

const nome = await input('Qual é o seu nome? ');
const cidade = await input('Onde você mora?\n');

print(`Bem vindo ${nome} de ${cidade}`);
