/* ---- Function -------
 function IMC(peso, alt) {
     return peso / (alt * alt);
 }
 console.log(`Valor do IMC ${IMC(60, 1.78).toFixed(2)}`)
 */



// ----------- Arrow Function (nova forma de fazer) --------------
const IMC = (peso, alt) => {
    return peso / (alt * alt);
};
console.log(`Valor do IMC:${IMC(60,1.78).toFixed(2)}`);
