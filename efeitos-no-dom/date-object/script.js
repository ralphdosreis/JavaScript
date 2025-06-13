const agora = new Date(); // Cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador

console.log(agora);

console.log(agora.getDate());
console.log(agora.getFullYear());
console.log(agora.getHours());
console.log(agora.getMinutes());
console.log(agora.getMonth());
console.log(agora.getMinutes());
console.log(agora.getTime()); // Milissegundos desde 1 de janeiro de 1970
console.log(agora.getUTCHours());


const promo = new Date('December 24 2025 23:59');

function converTerEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converTerEmDias(agora);
const diasPromo = converTerEmDias(promo);

const faltam = diasPromo - diasAgora;
console.log(faltam.toFixed());