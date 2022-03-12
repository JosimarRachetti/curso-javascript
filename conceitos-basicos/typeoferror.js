// try verifica se existe um erro nos comandos
// se existir a parte catch é executada
// finally sempre é executada

try{
console.log(nome);
}catch{
console.log('erro no código, nome não foi definido');
}finally{
console.log('sempre é executada, com ou sem erros.');
}